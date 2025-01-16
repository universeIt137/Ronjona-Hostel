import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { uploadImg } from '../../../hooks/UploadImage';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { updateAlert } from '../../../helper/updateAlert';

const UpdateOffer = () => {
  const axiosPublic = useAxiosPublic();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const { data: singleOfferData = {}, refetch } = useQuery({
    queryKey: ['offersData', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/offer-by-id/${id}`);
      return res.data.data;
    }
  });

  const { img: upcommingUrl } = singleOfferData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const img = e.target.img.files[0];
    const link = e.target.link.value;

    let imgUrl = upcommingUrl;

    if (img) {
      imgUrl = await uploadImg(img); // Upload the new image
    }

    const payload = {
      img: imgUrl,
      link: link
    };

    console.log(payload);

    try {
      const resp = await updateAlert();
      if (resp.isConfirmed) {
        setLoading(true);
        let res = await axiosPublic.put(`/offer-update/${id}`, payload, config);
        setLoading(false);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your offer has been updated successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong, please try again.",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(error);
    }
  };

  refetch()

  return (
    <div>
      <Helmet>
        <title>Dashboard | Update Offer Page</title>
      </Helmet>
      <div className="flex items-center my-16 justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Update Offer Form</h2>

          {/* Display Existing Image */}
          <div className="avatar mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src={singleOfferData?.img} alt="Offer Image" />
            </div>
          </div>

          {/* Image Upload Field */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="url"
              id="link"
              name="link"
              defaultValue={singleOfferData?.link}
              placeholder="Enter a valid URL"
              className="mt-1 block w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateOffer;
