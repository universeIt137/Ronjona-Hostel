import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MissionVissionForm = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    // Fetch mission and vision data
    const { data: missionVissionData = {}, refetch, isLoading } = useQuery({
        queryKey: ["whyChooseData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/vission-mission");
            return res.data.data[0];
        },
    });

    // Initialize state with default values
    const [formData, setFormData] = useState({
        missionTitle: "",
        vissionTitle: "",
        missionVissionTitle: "",
        keyFeatures: [{ des: "" }],
    });

    // Update state when data is fetched
    useEffect(() => {
        if (missionVissionData) {
            setFormData({
                missionTitle: missionVissionData.missionTitle || "",
                vissionTitle: missionVissionData.vissionTitle || "",
                missionVissionTitle: missionVissionData.missionVissionTitle || "",
                keyFeatures: missionVissionData.keyFeatures?.length
                    ? missionVissionData.keyFeatures
                    : [{ des: "" }],
            });
        }
    }, [missionVissionData]);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle keyFeatures change
    const handleKeyFeaturesChange = (index, value) => {
        const updatedKeyFeatures = formData.keyFeatures.map((feature, i) =>
            i === index ? { ...feature, des: value } : feature
        );
        setFormData((prev) => ({ ...prev, keyFeatures: updatedKeyFeatures }));
    };

    // Add a new keyFeature
    const addKeyFeature = () => {
        setFormData((prev) => ({
            ...prev,
            keyFeatures: [...prev.keyFeatures, { des: "" }],
        }));
    };

    // Remove a keyFeature
    const removeKeyFeature = (index) => {
        setFormData((prev) => ({
            ...prev,
            keyFeatures: prev.keyFeatures.filter((_, i) => i !== index),
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted Form Data:", formData);
        let resp = await createAlert();
        try {
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.put(`/vission-mission`, formData);
                setLoading(false);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data save successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data save fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader />
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <Helmet>
                <title>Dashboard | Mission&Vission Upload Page </title>
            </Helmet>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-full  space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Mission & Vision Form
                </h2>

                <div className="grid grid-cols-2 gap-4 " >
                    {/* Mission Title */}
                    <div>
                        <label htmlFor="missionTitle" className="block font-semibold mb-2">
                            Mission Title
                        </label>
                        <input
                            id="missionTitle"
                            type="text"
                            name="missionTitle"
                            value={formData.missionTitle}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter mission title"
                        />
                    </div>

                    {/* Vision Title */}
                    <div>
                        <label htmlFor="vissionTitle" className="block font-semibold mb-2">
                            Vision Title
                        </label>
                        <input
                            id="vissionTitle"
                            type="text"
                            name="vissionTitle"
                            value={formData.vissionTitle}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter vision title"
                        />
                    </div>

                    {/* Mission & Vision Title */}
                    <div>
                        <label
                            htmlFor="missionVissionTitle"
                            className="block font-semibold mb-2"
                        >
                            Mission & Vision Title
                        </label>
                        <input
                            id="missionVissionTitle"
                            type="text"
                            name="missionVissionTitle"
                            value={formData.missionVissionTitle}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter mission & vision title"
                        />
                    </div>
                </div>

                {/* Key Features */}
                <div>

                    {formData.keyFeatures.map((feature, index) => (
                        <div key={index} className="mb-2 space-x-2">
                            <div className="" >
                                <div className="" >
                                    <label className="block font-semibold mb-2">Key Features</label>
                                    <textarea
                                        value={feature.des}
                                        onChange={(e) => handleKeyFeaturesChange(index, e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-lg"
                                        placeholder={`Key Feature ${index + 1}`}
                                        rows="5"
                                    />
                                </div>
                                {/* Conditionally show Remove button */}
                                {feature.des && (
                                    <button
                                        type="button"
                                        onClick={() => removeKeyFeature(index)}
                                        className="bg-[#1C64F2] text-white px-3 py-2 rounded-lg "
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addKeyFeature}
                        className="bg-[#1C64F2] text-white px-4 py-2 rounded-lg "
                    >
                        Add Key Feature
                    </button>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        {
                            loading ? "Submitimg..." : "Submit"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MissionVissionForm;
