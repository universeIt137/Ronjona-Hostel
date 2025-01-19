import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { uploadImg } from "../../../hooks/UploadImage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { updateAlert } from "../../../helper/updateAlert";

const UpdateTeam = () => {
  window.scrollTo(0, 0)
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  // Team data


  const { data: singleTeamData = {}, refetch, isLoading } = useQuery({
    queryKey: ['singleTeamData', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/team/${id}`);
      return res.data.data;
    }
  });

  const { img: upcommingImgUrl } = singleTeamData;



  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;
    const experience = e.target.experience.value;
    const img = e.target.img.files[0];

    let imgUrl = upcommingImgUrl;

    if (imgUrl) {
      imgUrl = upcommingImgUrl;
    } else {
      imgUrl = await uploadImg(img)
    }


    const payload = {
      name,
      role,
      phoneNumber,
      email,
      experience,
      img: imgUrl,
    };

    let resp = await updateAlert();

    try {
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.put(`/team/${id}`, payload);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Data update failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) {
    return (
      <div>
        <SkeletonLoader></SkeletonLoader>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center  p-4">
      <Helmet>
        <title>Dashboard | Team Member Update Page</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Team Member
        </h2>

        <div className="avatar">
          <div className="w-12">
            <img className="object-cover rounded-full " src= { singleTeamData?.img }  />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="img" className="block text-gray-600 font-semibold mb-2">
              Image
            </label>
            <input
              id="img"
              type="file"
              name="img"
              className="w-full border border-gray-300 rounded-lg"
            />
          </div>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your full name"
              defaultValue={singleTeamData?.name}
            />
          </div>



          {/* Role Input */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-600 font-semibold mb-2">
              Role
            </label>
            <input
              id="role"
              type="text"
              name="role"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your role"
              defaultValue={singleTeamData?.role}
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-600 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your phone number"
              defaultValue={singleTeamData?.phoneNumber}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              defaultValue={singleTeamData?.email}
            />
          </div>

          {/* Experience Input */}
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-gray-600 font-semibold mb-2"
            >
              Experience
            </label>
            <input
              id="experience"
              type="text"
              name="experience"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your years of experience"
              defaultValue={singleTeamData?.experience}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none ${loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTeam;
