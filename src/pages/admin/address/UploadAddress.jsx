import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';
import { createAlert } from '../../../helper/createAlert';

const UploadAddress = () => {
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const token = localStorage.getItem("token");

  const config = token
    ? { headers: { Authorization: `${token}` } }
    : {}; // Handle missing token gracefully

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const payload = {
      name
    }
    try {
      const resp = await createAlert();
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.post(`/address-upload`, payload,config);
        setLoading(false);
        if (res) {
          toast.success("Address Upload successfully");
          e.target.reset();
          return;
        }
        
      }
    } catch (error) {
      setLoading(false);
      toast.error("Address upload fail")
    }
  }
  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 my-32 rounded-lg shadow-lg">
        <Helmet>
          <title>Dashboard | Upload Address</title>
        </Helmet>
        <h2 className="text-2xl font-semibold text-center mb-4">Address upload from</h2>


        <form onSubmit={handleSubmit} className="space-y-4">


          {/* Hotline Number Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name address
            </label>
            <textarea
              rows={8}
              name="name"
              placeholder="Enter address name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#853493]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#853493] text-white py-2 rounded-lg hover:bg-[#6d2a77] transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <Toaster position="top-center" />
      </div>
    </div>
  )
}

export default UploadAddress
