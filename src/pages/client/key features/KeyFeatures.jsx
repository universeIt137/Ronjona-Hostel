import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const KeyFeatures = () => {
  const [showMoreImages, setShowMoreImages] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [showMoreFacilities, setShowMoreFacilities] = useState(false);
  const axiosPublic = useAxiosPublic();

  const { data: keyFeaturesData = {} } = useQuery({
    queryKey: ["keyFeaturesData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/key-features");
      return res.data.data[0] || {};
    },
  });

  // Ensure images exist before slicing
  const images = keyFeaturesData?.images ? (showMoreImages ? keyFeaturesData.images : keyFeaturesData.images.slice(0, 4)) : [];
  const features = keyFeaturesData?.features ? (showMoreFeatures ? keyFeaturesData.features : keyFeaturesData.features.slice(0, 3)) : [];
  const facilities = keyFeaturesData?.facilities ? (showMoreFacilities ? keyFeaturesData.facilities : keyFeaturesData.facilities.slice(0, 4)) : [];

  return (
    <div className="w-11/12 mx-auto  ">
      {/* Header */}
      <div className="flex justify-center my-8">
        <button className="bg-[#A020BA] px-4 py-2 lg:px-8 lg:py-4 text-xl lg:text-4xl text-white rounded-md hover:bg-purple-700 transition duration-300">
          Features and Key Facilities
        </button>
      </div>

      {/* Images Section */}
      <div className="gap-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images?.map((item, i) => (
            <div key={i}>
              <img
                src={item?.img}
                alt={`Feature ${i + 1}`}
                className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-md shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Show More / Show Less for Images */}
      {keyFeaturesData?.images?.length > 4 && (
        <div className="flex justify-center my-6">
          <button
            onClick={() => setShowMoreImages(!showMoreImages)}
            className="bg-[#853493] text-white px-6 py-2 rounded-lg  transition"
          >
            {showMoreImages ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Features and Facilities Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 lg:p-8 bg-[#A020BA] text-white ">
        {/* Features Section */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#A020BA]">Features</h1>
          <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg">
            {features?.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div><FaRegDotCircle className="text-[#A020BA] mt-1 text-xl" /></div>
                <span>{item?.title}</span>
              </li>
            ))}
          </ul>

          {/* Show More / Show Less for Features */}
          {keyFeaturesData?.features?.length > 4 && (
            <div className="mt-4">
              <Link className="ml-10" to="/our-facility">
                <button
                  onClick={() => setShowMoreFacilities(!setShowMoreFeatures)}
                  className="text-white px-6 py-2 rounded-lg bg-[#853493] transition"
                >
                  <Link to={"/our-facility"}>Show More</Link>
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Facilities Section */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#A020BA]">Facilities</h1>
          <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg">
            {facilities?.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div><FaRegDotCircle className="text-[#A020BA] mt-1 text-xl" /></div>
                <span>{item?.title}</span>
              </li>
            ))}
          </ul>

          {/* Show More / Show Less for Facilities */}
          {keyFeaturesData?.facilities?.length > 4 && (
            <div className="mt-4">
              <Link className="ml-10" to="/our-facility">
                <button
                  onClick={() => setShowMoreFacilities(!showMoreFacilities)}
                  className="text-white px-6 py-2 rounded-lg bg-[#853493] transition"
                >
                  <Link to={"/our-facility"}>Show More</Link>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
