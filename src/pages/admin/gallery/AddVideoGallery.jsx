import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { UploadVideo } from "../../../hooks/UploadVideo";

const AddVideoGallery = () => {
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const video_link = e.target.video_link.files[0];
    const youtube_link = e.target.youtube_link.value;

    if (!video_link && !youtube_link) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please provide a video file or a YouTube link.",
      });
      return;
    }

    let videoUrl = "";
    if (video_link) {
      videoUrl = await UploadVideo(video_link);
    }

    const payload = {
      video_link: videoUrl,
      youtube_link,
    };

    const resp = await createAlert();

    try {
      if (resp.isConfirmed) {
        setLoading(true);
        const res = await axiosPublic.post(`/uploadVideo`, payload);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Video uploaded successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Video upload failed",
        text: error.response?.data?.message || "An unexpected error occurred.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-32">
      <Helmet>
        <title>Dashboard | Video Maname Page</title>
        <meta name="description" content="Upload videos and manage your video gallery easily." />
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Video Upload Form
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="video_link">
            Upload Video
          </label>
          <input
            type="file"
            id="video_link"
            name="video_link"
            accept="video/*"
            className="block border-2 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="youtube_link">
            Video Link
          </label>
          <input
            type="url"
            id="youtube_link"
            name="youtube_link"
            placeholder="Enter video link"
            className="block border-2 w-full text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 ${loading ? "bg-gray-400" : "bg-blue-600"} text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddVideoGallery;
                                                                               