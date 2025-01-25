import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const KeyFeatures = () => {
  const axiosPublic = useAxiosPublic();
  const { data: keyFeaturesDatas = [], refetch } = useQuery({
    queryKey: ["keyFeaturesDatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/key-features");
      return res.data.data[0];
    },
  });

  return (
    <div className="w-11/12 mx-auto">
      {/* Button Section */}
      <div className="flex justify-center m-8">
        <button className="bg-[#A020BA] px-4 py-2 lg:px-8 lg:py-4 text-xl lg:text-4xl text-white text-center rounded-md hover:bg-purple-700 transition duration-300">
          Features and Key Facilities
        </button>
      </div>

      {/* Images Section */}
      <div className="gap-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeaturesDatas?.images?.map((item, i) => (
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

      {/* Features and Facilities Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 lg:p-8 bg-gray-50">
        {/* Features Section */}
        <div className="  " >
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#A020BA]">
            Features
          </h1>
          <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg">
            {keyFeaturesDatas?.features?.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <FaRegDotCircle className="text-[#A020BA] mt-1 text-lg lg:text-xl" />
                <span>{item?.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Facilities Section */}
        <div className="" >
          <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#A020BA]">
            Facilities
          </h1>
          <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg">
            {keyFeaturesDatas?.facilities?.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <FaRegDotCircle className="text-[#A020BA] mt-1 text-lg lg:text-xl" />
                <span>{item?.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
