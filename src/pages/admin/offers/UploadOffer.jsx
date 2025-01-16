import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { uploadImg } from '../../../hooks/UploadImage';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';

const UploadOffer = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
      headers: {
          Authorization: token,
      },
  };
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const img = e.target.img.files[0];
    const link = e.target.link.value;
    let imgUrl = "";
    if (!img?.name) {
      imgUrl = ""
    };
    imgUrl = await uploadImg(img);
    const payload = {
      img: imgUrl,
      link: link
    }
    console.log(payload);
    const resp = await createAlert()
    try {
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.post(`/create-offer`, payload, config);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Offer upload successfully",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset();
          return;
        }
      }
    } catch (error) {
      setLoading(false)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Offer upload fail",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  return (
    <div>
      <Helmet>
        <title>Dashboard | Offer Upload Page </title>
      </Helmet>
      <div className=" flex items-center my-16 justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Offer Upload From</h2>

          {/* Image Upload Field */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="img"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Link Field */}
          <div className="mb-4">
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700"
            >
              Link
            </label>
            <input
              type="url"
              id="link"
              name="link"
              placeholder="Enter a valid URL"

              className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {
              loading ? "Submiting...." : 'Submit'
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default UploadOffer
