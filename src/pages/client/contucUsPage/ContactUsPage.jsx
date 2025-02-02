import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const ContactUsPage = () => {
  window.scrollTo(0, 0)
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const phone_number = e.target.phone_number.value;
    const payload = {
      name, email, message, phone_number

    };
    try {
      setLoading(true);
      let res = await axiosPublic.post(`/send-contact`, payload);
      setLoading(false)
      if (res) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Contact successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Contact fail",
        showConfirmButton: false,
        timer: 1500
      });

    }
  }
  return (
    <div className="bg-white mt-20 px-6 md:px-16 lg:px-32 py-12">
      <Helmet>
        <title>Ronjona | Contact Page </title>
      </Helmet>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Visit Our Office
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="relative bg-white p-6 pt-24 rounded-lg shadow-lg space-y-4 text-center m-6">
          {/* Top-left corner decoration */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#a020ba] rounded-tl-lg"></div>

          {/* Bottom-right corner decoration */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#a020ba] rounded-br-lg"></div>

          {/* Content */}
          <h2 className="text-4xl font-semibold text-gray-700">
            Ronjona Girls Hostel
          </h2>
          <p className="text-gray-600">
            <strong>Location:</strong> House No # 44, Road No # 13, Sector # 12
            Uttara, Dhaka-1230
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +88 0 1 7 7 7 1 7 7 7 7 1
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> ronjonawomenshostel@gmail.com
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>


            <div className="mb-4">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="phone_number"
                id="phone_number"
                name="phone_number"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>



            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                name="message"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                disabled={loading}
                type="submit"
                className="px-6 py-2 bg-[#a020ba] text-white font-semibold rounded-md hover:bg-[#a020ba] focus:outline-none focus:ring-2 focus:ring-[#a020ba]"
              >
                {
                  loading ? "Submiting..." : "Submit"
                }
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Map
        </h2>
        <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center text-gray-500">
          <iframe
            className="w-full h-[250px] lg:h-[320px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.461961532779!2d90.37831817513481!3d23.873232184050075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c523cc694607%3A0x9f8edd9745e6b818!2sRonjona%20Female%20Hostel!5e0!3m2!1sen!2sbd!4v1738148587063!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;


