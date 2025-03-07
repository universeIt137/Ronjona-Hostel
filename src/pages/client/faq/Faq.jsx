import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { Helmet } from "react-helmet-async";

const Faq = () => {
  window.scrollTo(0, 0);
  const axiosPublic = useAxiosPublic();
  // Team data


  const { data: faqDataList = [], refetch, isLoading } = useQuery({
    queryKey: ['teamData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/faq');
      return res.data.data;
    }
  })

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
    <div className="w-11/12 mt-30 lg:mt-32 mx-auto">
      <Helmet>
        <title>Ronjona | FAQ page</title>
      </Helmet>
      <div>
        <h2 className="lg:text-6xl text-center text-[#A020BA]  mb-12 italic" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div
          className="h-[60vh]  flex flex-col justify-center items-start px-8 text-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1740654088/Banner-3_1_1_ouyni3.jpg')" }}
        >
          <h1 className="text-4xl font-semibold text-black mb-4 italic" data-aos="fade-up">
            Special Offers For Pandemic Situation!
          </h1>
          <h3 className="text-2xl mb-6 italic text-black " data-aos="fade-up">
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
        <div className="px-4 py-8">
          <h1 className="text-6xl text-center text-[#A020BA]  mb-8 italic" data-aos="fade-up">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-4">
            {
              faqDataList.map((item, i) => {
                return (
                  <div key={i} >
                    {/* FAQ 1 */}
                    <div className="text-center" data-aos="zoom-in">
                      <img
                        src={item?.logo}
                        alt="Why choose Ronjona"
                        className="w-24 h-24 mx-auto mb-4"
                      />
                      <div className="h-16" >
                        <h2 className="text-xl font-semibold mb-4 text-center italic">
                          {item?.questions}
                        </h2>
                      </div>
                      <div className="my-auto mt-6 " >
                        <p className="text-gray-600 text-xl text-justify ">
                          {item?.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>


        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
        <div data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448387/2_mwngcg.jpg"
            alt="Image 1"
            className="w-full h-96 object-cover"
          />
        </div>
        <div data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448387/MG_kogtz6.jpg"
            alt="Image 2"
            className="w-full h-96 object-cover"
          />
        </div>
        <div data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737448387/MG1_f7vn38.jpg"
            alt="Image 3"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
