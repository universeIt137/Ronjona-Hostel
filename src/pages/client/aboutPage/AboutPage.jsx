import { useQuery } from "@tanstack/react-query";
import { FaLinkedin } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {
  const axiosPublic = useAxiosPublic()
  const { data: aboutData = {}, isLoading } = useQuery({
    queryKey: ['aboutData',],
    queryFn: async () => {
      const res = await axiosPublic.get(`/aboutDataById`);
      console.log(res?.data?.data);
      return res?.data?.data[0] || {};
    },
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
      once: true, // Trigger the animation only once
    });
  }, []);
  if (isLoading) {
    return (
      <div>
        <SkeletonLoader></SkeletonLoader>
      </div>
    )
  }
  return (
    <div className="w-11/12 bg-white py-10  mx-auto">
      <Helmet>
        <title>Ronjona | About Us Page </title>
      </Helmet>
      {/* Who We Are Section */}
      <div
        className="h-[60vh]  flex flex-col justify-center items-start px-8 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1727492547/course-images/p5gcvttzauhtt7dggh3f.jpg')" }}
      >
        <h1 className="text-4xl font-semibold mb-4 italic" data-aos="fade-up">
          Special Offers For Pandemic Situation!
        </h1>
        <h3 className="text-2xl mb-6 italic" data-aos="fade-up">
          10% Off On All Categories Seat
        </h3>
        <a
          href="#"
          className="px-6 py-3 bg-transparent rounded border border-[#97509F] text-white hover:bg-[#97509F] hover:text-white transition"
          data-aos="fade-up"
        >
          Book Your Seat Earlier
        </a>
      </div>
      <div className="bg-gray-100 py-12 ">
        <h2 className="text-4xl  font-bold text-center text-blue-600 mb-8">
          About
        </h2>

        <div className=" mx-auto flex flex-col md:flex-row justify-between items-start bg-white shadow-lg rounded-lg ">
          {/* Left Side - Image */}
          <div className="md:w-1/2" data-aos="zoom-in" >
            <img
              src={aboutData?.img}
              alt="Garment Factory"
              className="w-full h-[70vh] rounded-lg"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0" data-aos="zoom-in" >
            <h3 className="text-2xl ml-6 font-bold text-blue-600 mb-4">About Us</h3>
            <p className="text-gray-700 mb-2 p-6 text-justify ">
              {
                aboutData?.shortDes
              }
            </p>

          </div>
        </div>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Vision</h2>
          <p className="text-gray-700 text-justify ">
            Our mission is to be the No.1 Hostel service provider in Dhaka City by providing a clean, comfortable and affordable accommodation with superior customer service with assurance of Discipline, Security, and Excellence in all amenities & care. Our team is extremely professional and willing to go above and beyond to provide the absolute best Hostel experience possible.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Mission</h2>
          <p className="text-gray-700 text-justify ">
            Our mission is to be the No.1 Hostel service provider in Dhaka City by providing a clean, comfortable and affordable accommodation with superior customer service with assurance of Discipline, Security, and Excellence in all amenities & care. Our team is extremely professional and willing to go above and beyond to provide the absolute best Hostel experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
