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
    <div className="w-11/12 bg-white   mx-auto">
      <Helmet>
        <title>Ronjona | About Us Page </title>
      </Helmet>
      {/* Who We Are Section */}

      <div className=" my-28  ">


        {/* Right Side - Text Content */}
        <div className=" md:pl-6 mt-6 md:mt-0" data-aos="zoom-in" >
          <h3 className="lg:text-4xl ml-6 font-bold text-center mb-4">About Us</h3>
          <p className="text-gray-700 mb-2  text-justify ">
            <div
              className=" text-2xl text-black "
              dangerouslySetInnerHTML={{ __html: aboutData?.shortDes }}
            />
          </p>

        </div>
      </div>

    </div>
  );
};

export default AboutPage;
