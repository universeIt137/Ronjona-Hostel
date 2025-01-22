import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { uploadImg } from '../../../hooks/UploadImage';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const AddPayment = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const logo = e.target.logo.files[0];
    const paymentName = e.target.paymentName.value;
    const phoneNumber = e.target.phoneNumber.value;
    let imgUrl = "";

    if (!logo?.name) {
      imgUrl = ""
    }

    imgUrl = await uploadImg(logo);

    const payload = {
      paymentName, phoneNumber, logo: imgUrl
    };

    let resp = await createAlert();

    try {
      if (resp.isConfirmed) {
        setLoading(true);
        const res = await axiosPublic.post(`/payment`, payload);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data upload successfully",
            showConfirmButton: false,
            timer: 1500
          });
          e.target.reset()
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data upload fail",
        showConfirmButton: false,
        timer: 1500
      });
    }


  }
  return (
    <div>
      <Helmet>
        <title>Dashboard | Payme Upload Page</title>
      </Helmet>
      <div className="max-w-lg mx-auto mt-24  p-6  bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">Payment Form</h1>
        <form className='' onSubmit={handleSubmit}>
          {/* Logo Field */}
          <div className="mb-4">
            <label htmlFor="logo" className="block text-lg font-semibold mb-2">
              Logo
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              placeholder="Enter logo URL"
              className="w-full px-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment Name Field */}
          <div className="mb-4">
            <label htmlFor="paymentName" className="block text-lg font-semibold mb-2">
              Payment Name
            </label>
            <input
              type="text"
              id="paymentName"
              name="paymentName"
              placeholder="Enter payment name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-lg font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {
              loading ? "Submiting..." : "Submit"
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPayment
