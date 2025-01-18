import React, { useState } from "react";
import { uploadImg } from "../../../hooks/UploadImage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddPhotoGallery = () => {

  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const img = e.target.img.files[0];
    let imgUrl = ""
    if (!img?.name) {
      imgUrl = ''
    }
    imgUrl = await uploadImg(img);
    const paylod = {
      img: imgUrl
    }

    const resp = await createAlert()

    try {
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.post(`/uploadPhoto`, paylod);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Img upload successfully",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset();
          return;
        }
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Img upload fail",
        showConfirmButton: false,
        timer: 1500
      });

    }


  };

  return (
    <div className="flex justify-center items-center my-32 ">
      <Helmet>
        <title>Dashboard | Img Upload Page </title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Image Upload Form</h2>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="img"
            accept="img/*"
            className="block border-2 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPhotoGallery;
