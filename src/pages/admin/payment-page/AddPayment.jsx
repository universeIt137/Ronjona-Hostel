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
    const accountName = e.target.accountName.value;
    const accountNumber = e.target.accountNumber.value;
    const bankName = e.target.bankName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const branchName = e.target.branchName.value;
    const logo = e.target.logo.files[0];
    let imgUrl = "";
    if (!logo.name) {
      imgUrl = ""
    }
    imgUrl = await uploadImg(logo)
    const payload = {
      accountName, accountNumber, bankName, phoneNumber, branchName, logo: imgUrl
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
      <div className=" mx-auto mt-24  p-6  bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">Payment Form</h1>
        <form className='' onSubmit={handleSubmit}>
          <div className='grid lg:grid-cols-2 gap-x-5 ' >
            {/* accountName */}
            <div className="mb-4">
              <label htmlFor="accountName" className="block text-lg font-semibold mb-2">
                Account Name
              </label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                placeholder="Enter account name"
                className="w-full px-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* logo */}
            <div className="mb-4">
              <label htmlFor="logo" className="block text-lg font-semibold mb-2">
                Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                placeholder="Enter account name"
                className="w-full px-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/*accountNumber */}
            <div className="mb-4">
              <label htmlFor="accountNumber" className="block text-lg font-semibold mb-2">
                Account number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="Enter account number "
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* bankName */}
            <div className="mb-4">
              <label htmlFor="bankName" className="block text-lg font-semibold mb-2">
                Enter bank name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                placeholder="Enter bank name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* phoneNumber */}
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-lg font-semibold mb-2">
                Enter number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* branchName */}
            <div className="mb-4">
              <label htmlFor="branchName" className="block text-lg font-semibold mb-2">
                Branch name
              </label>
              <input
                type="text"
                id="branchName"
                name="branchName"
                placeholder="Enter branch name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-5 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
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
