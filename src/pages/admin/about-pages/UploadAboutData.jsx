import React, { useState, useEffect } from "react";
import axios from "axios";
import { createAlert } from "../../../helper/createAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UploadAboutData = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        shortDes: "",
        aboutFeatures: [{ logo: "", title: "", short_des: "" }],
        years: "",
        img: "",
        valuesTitle: "",
        valueDes: "",
        aboutTeamImg: [{ img: "", name: "", role: "",linkedinLink : "" }],
    });

    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxvacpgrv/image/upload";
    const UPLOAD_PRESET = "ronjonaImg";

    // Fetch default data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://ronjona-hostel-server.vercel.app/api/v1/aboutDataById"
                ); // Replace with your API endpoint
                setFormData(response?.data?.data[0] || {});
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleArrayChange = (e, index, arrayName, fieldName) => {
        const updatedArray = [...formData[arrayName]];
        updatedArray[index][fieldName] = e.target.value;
        setFormData({ ...formData, [arrayName]: updatedArray });
    };

    const handleUpload = async (e, arrayName, index, fieldName) => {
        const file = e.target.files[0];
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("upload_preset", UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, uploadData);
            const imageUrl = response.data.secure_url;

            if (arrayName) {
                const updatedArray = [...formData[arrayName]];
                updatedArray[index][fieldName] = imageUrl;
                setFormData({ ...formData, [arrayName]: updatedArray });
            } else {
                setFormData({ ...formData, [fieldName]: imageUrl });
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleAddItem = (arrayName, newItem) => {
        setFormData({ ...formData, [arrayName]: [...formData[arrayName], newItem] });
    };

    const handleRemoveItem = (arrayName, index) => {
        const updatedArray = formData[arrayName].filter((_, i) => i !== index);
        setFormData({ ...formData, [arrayName]: updatedArray });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let resp = await createAlert();

        try {
            if (resp.isConfirmed) {
                setLoading(true)
                let res = await axiosPublic.put(`/about-data`, formData);
                setLoading(false)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit data.");
        }
    };

    return (
        <div className="p-6 min-h-screen">
            <Helmet>
                <title>Dashboard | About Data Upload Page </title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">About Section</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Input */}
                <div className="mb-4">
                    <label htmlFor="title" className="block font-bold mb-2">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={formData.title || ""}
                        onChange={handleInputChange}
                        placeholder="Enter the title"
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Short Description */}
                <div className="mb-4">
                    <label htmlFor="shortDes" className="block font-bold mb-2">
                        Short Description
                    </label>
                    <textarea
                        id="shortDes"
                        name="shortDes"
                        value={formData.shortDes || ""}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Write a short description"
                        className="w-full p-2 border rounded-lg"
                    ></textarea>
                </div>

                {/* About Features */}
                <div>
                    <h2 className="text-lg font-semibold">About Features</h2>
                    {formData.aboutFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 mb-2">
                            <div className="flex flex-col w-[25%] " >
                                <label htmlFor={`feature-logo-${index}`} className="block font-bold mb-2">
                                    Logo
                                </label>
                                <input
                                    id={`feature-logo-${index}`}
                                    type="file"
                                    onChange={(e) => handleUpload(e, "aboutFeatures", index, "logo")}
                                    className=" border rounded-lg"
                                />
                            </div>
                            {feature.logo && (
                                <img
                                    src={feature.logo}
                                    alt="Team Member"
                                    className="w-16 h-16 mt-8 rounded-full object-cover"
                                />
                            )}
                            <div className="w-[25%] flex flex-col " >
                                <label htmlFor={`feature-title-${index}`} className="block font-bold mb-2">
                                    Title
                                </label>
                                <input
                                    id={`feature-title-${index}`}
                                    type="text"
                                    placeholder="Title"
                                    value={feature.title || ""}
                                    onChange={(e) => handleArrayChange(e, index, "aboutFeatures", "title")}
                                    className="p-2 border rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col w-[35%] " >
                                <label htmlFor={`feature-desc-${index}`} className="block font-bold mb-2">
                                    Short Description
                                </label>
                                <input
                                    id={`feature-desc-${index}`}
                                    type="text"
                                    placeholder="Short Description"
                                    value={feature.short_des || ""}
                                    onChange={(e) =>
                                        handleArrayChange(e, index, "aboutFeatures", "short_des")
                                    }
                                    className="p-2 border rounded-lg"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem("aboutFeatures", index)}
                                className="font-bold rounded-xl shadow-lg mt-8 bg-[#3f83f8] p-2 text-white"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() =>
                            handleAddItem("aboutFeatures", {
                                logo: "",
                                title: "",
                                short_des: "",
                            })
                        }
                        className="font-bold rounded-xl shadow-lg bg-[#3f83f8] mt-5 p-2 text-white"
                    >
                        Add Feature
                    </button>
                </div>

                {/* About Team */}
                <div>
                    <h2 className="text-lg font-semibold">About Team</h2>
                    {formData.aboutTeamImg.map((member, index) => (
                        <div key={index} className="flex items-center gap-4 mb-2">
                            <div className="flex flex-col  " >
                                <label htmlFor={`team-img-${index}`} className="block font-bold mb-2">
                                    Image
                                </label>
                                <input
                                    id={`team-img-${index}`}
                                    type="file"
                                    onChange={(e) => handleUpload(e, "aboutTeamImg", index, "img")}
                                    className=" border rounded-lg"
                                />
                            </div>
                            {member.img && (
                                <img
                                    src={member.img}
                                    alt="Team Member"
                                    className="w-16 h-16 mt-7 rounded-full object-cover"
                                />
                            )}
                            <div className="flex flex-col w-[25%] " >
                                <label htmlFor={`team-name-${index}`} className="block font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    id={`team-name-${index}`}
                                    type="text"
                                    placeholder="Name"
                                    value={member.name || ""}
                                    onChange={(e) => handleArrayChange(e, index, "aboutTeamImg", "name")}
                                    className="p-2 border rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col w-[25%] " >
                                <label htmlFor={`team-role-${index}`} className="block font-bold mb-2">
                                    Role
                                </label>
                                <input
                                    id={`team-role-${index}`}
                                    type="text"
                                    placeholder="Role"
                                    value={member.role || ""}
                                    onChange={(e) => handleArrayChange(e, index, "aboutTeamImg", "role")}
                                    className="p-2  border rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col w-[25%] " >
                                <label htmlFor={`team-role-${index}`} className="block font-bold mb-2">
                                Linkedin Link
                                </label>
                                <input
                                    id={`team-role-${index}`}
                                    type="text"
                                    placeholder="Linkedin Link"
                                    value={member.linkedinLink || ""}
                                    onChange={(e) => handleArrayChange(e, index, "aboutTeamImg", "linkedinLink")}
                                    className="p-2  border rounded-lg"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem("aboutTeamImg", index)}
                                className="font-bold mt-8 rounded-xl shadow-lg bg-[#3f83f8] p-2 text-white"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() =>
                            handleAddItem("aboutTeamImg", { img: "", name: "", role: "" })
                        }
                        className="font-bold rounded-xl shadow-lg bg-[#3f83f8] mt-5 p-2 text-white"
                    >
                        Add Team Member
                    </button>
                </div>


                <div>
                    {formData.img && (
                        <img
                            src={formData.img}
                            alt="Uploaded"
                            className="w-16 h-16 object-cover rounded-lg mb-2"
                        />
                    )}
                </div>


                <div className="grid grid-cols-2 gap-8" >
                    {/* Image Upload */}
                    <div  >
                        <label htmlFor="img" className="block font-bold mb-2">
                            Image
                        </label>

                        <input
                            id="img"
                            type="file"
                            onChange={(e) => handleUpload(e, null, null, "img")}
                            className="w-full  border rounded-lg"
                        />
                    </div>

                    {/* Years */}
                    <div>
                        <label htmlFor="years" className="block font-bold mb-2">
                            Years
                        </label>
                        <input
                            id="years"
                            type="text"
                            name="years"
                            value={formData.years ? new Date(formData.years).toLocaleDateString() : ""} // Convert to local date string
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8"
                >
                    {/* valuesTitle */}
                    <div>
                        <label htmlFor="valuesTitle" className="block font-bold mb-2">
                            Title
                        </label>
                        <input
                            id="valuesTitle"
                            type="text"
                            name="valuesTitle" // Add a name attribute for better form handling
                            value={formData.valuesTitle || ""}
                            onChange={handleInputChange}
                            placeholder="Enter the title" // Add placeholder for guidance
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required // Ensure this field is filled out
                        />
                    </div>

                    {/* valueDes */}
                    <div>
                        <label htmlFor="valueDes" className="block font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            id="valueDes"
                            name="valueDes"
                            value={formData.valueDes || ""}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-lg"
                            rows="6" // Specifies the height of the textarea
                        ></textarea>
                    </div>



                </div>



                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading} // Disable button when loading
                        className={`flex items-center justify-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-600 ${loading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? (
                            <svg
                                className="w-5 h-5 mr-2 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadAboutData;
