import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";

const KeyFeatures = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Button Section */}
      <div className="flex justify-center m-8">
        <button className="bg-[#A020BA] px-8 py-4 text-4xl text-white text-center rounded-md hover:bg-purple-700 transition duration-300">
          Features and Key Facilities
        </button>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448998/Buffet_wkhwh6.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-md shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448998/MG_0_kyq2cc.jpg"
            alt="Image 2"
            className="w-full h-48 object-cover rounded-md shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448999/3_oj52ok.jpg"
            alt="Image 3"
            className="w-full h-48 object-cover rounded-md shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448998/Young_vq0mwq.jpg"
            alt="Image 4"
            className="w-full h-48 object-cover rounded-md shadow-lg"
          />
        </div>


      </div>

      {/* Features and Facilities Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 bg-gray-50">
  {/* Features Section */}
  <div className="">
    <h1 className="text-4xl font-bold mb-6 text-[#A020BA]">Features</h1>
    <ul className="space-y-6 text-lg">
      {[
        "Airy and well-ventilated A/C and non-A/C well-furnished rooms with separate bed, reading table, cot, pillow, and bedspreads.",
        "Ronjona women’s hostel offers you the joy of living, pleasure, and peace.",
        "We assure you the comforts of home, individual care, and safety.",
        "We offer two-sharing, three-sharing, four-sharing, and single rooms.",
        "Furnished portico, study rooms for the inmates, food, and accommodations.",
        "Convenient homely atmosphere at a reasonable price.",
        "Nutritious, hygienic food with a decorated dining hall.",
        "Housekeeping, bathroom and room cleaning, and use of the kitchen.",
        "With the help of CCTV in the common area, we provide the best possible security.",
        "Ronjona women’s hostel provides uninterrupted power supply for all rooms.",
      ].map((feature, index) => (
        <li key={index} className="grid grid-cols-12 items-center">
          <FaRegDotCircle className="text-[#A020BA] text-xl " />
          <span className="col-span-11">{feature}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Facilities Section */}
  <div className=" ">
    <h1 className="text-4xl font-bold mb-6 text-[#A020BA]">Facilities</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ul className="space-y-6 text-lg">
        {[
          "Nutritious, hygienic food with a free decorated dining hall.",
          "Airy and well-ventilated A/C and non-A/C well-furnished rooms with separate bed, reading table, cot, pillow, and bedspreads.",
          "Purified drinking water.",
          "Fan and lighting facilities.",
          "Housekeeping and laundry service.",
          "Fridge and LED TV in the common area.",
          "Newspapers and magazine services.",
        ].map((facility, index) => (
          <li key={index} className="grid grid-cols-12 items-center">
            <CiCircleCheck className="text-[#A020BA] text-xl" />
            <span className="col-span-11">{facility}</span>
          </li>
        ))}
      </ul>

      <ul className="space-y-6 text-lg">
        {[
          "24/7 power backup with a generator and lift facilities.",
          "24/7 security guard.",
          "Bathroom and room cleaning services with access to the kitchen.",
          "Best possible security with CCTV in the common area.",
          "Friendly environment, feel like your HOME.",
          "Parking facilities for Honda/Vespa.",
        ].map((facility, index) => (
          <li key={index} className="grid grid-cols-12 items-center">
            <CiCircleCheck className="text-[#A020BA] text-xl" />
            <span className="col-span-11">{facility}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default KeyFeatures;
