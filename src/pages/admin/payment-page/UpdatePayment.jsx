import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { updateAlert } from '../../../helper/updateAlert';
import { uploadImg } from '../../../hooks/UploadImage';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const UpdatePayment = () => {
  const { id } = useParams()
  const { data: singlePamentData = {}, refetch, isLoading } = useQuery({
    queryKey: ['singlePamentData', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment/${id}`);
      return res.data.data;
    }
  });

  const { logo: imgUrl } = singlePamentData;

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


    let logoUrl = imgUrl;

    if (!logo?.name) {
      logoUrl = imgUrl;
    } else {
      logoUrl = await uploadImg(logo)
    }

    const payload = {
      accountName, accountNumber, bankName, phoneNumber, branchName, logo: logoUrl
    }

    let resp = await updateAlert();

    try {
      if (resp.isConfirmed) {
        setLoading(true);
        const res = await axiosPublic.put(`/payment/${id}`, payload);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data update successfully",
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data update fail",
        showConfirmButton: false,
        timer: 1500
      });
    }


  }
  return (
    <div>
      <div>
        <Helmet>
          <title>Dashboard | Payme Update Page</title>
        </Helmet>
        <div className=" mx-auto mt-24  p-6  bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-center mb-4">Payment Form</h1>
          <form className='' onSubmit={handleSubmit}>
            <div>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={singlePamentData?.logo} />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2  gap-x-5 ' >
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
              {/* accountName */}
              <div className="mb-4">
                <label htmlFor="accountName" className="block text-lg font-semibold mb-2">
                  Account Name
                </label>
                <input
                  type="text"
                  id="accountName"
                  name="accountName"
                  defaultValue={singlePamentData?.accountName}
                  className="w-full px-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>



              {/* accountNumber */}
              <div className="mb-4">
                <label htmlFor="accountNumber" className="block text-lg font-semibold mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  defaultValue={singlePamentData?.accountNumber}
                  placeholder="Enter payment name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {
                singlePamentData?.phoneNumber ? <>
                  {/* bankName */}
                  <div className="mb-4">
                    <label htmlFor="bankName" className="block text-lg font-semibold mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      defaultValue={singlePamentData?.bankName}
                      placeholder="Enter phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* phoneNumber */}
                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-lg font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      defaultValue={singlePamentData?.phoneNumber}
                      placeholder="Enter phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {/* branchName */}
                  <div className="mb-4">
                    <label htmlFor="branchName" className="block text-lg font-semibold mb-2">
                      Branch Name
                    </label>
                    <input
                      type="text"
                      id="branchName"
                      name="branchName"
                      defaultValue={singlePamentData?.branchName}
                      placeholder="Enter phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </> : <></>
              }
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {
                loading ? "Submiting..." : "Submit"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePayment
