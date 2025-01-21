import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
      once: true, // Trigger the animation only once
    });
  }, []);

  return (
    <div className="w-11/12 mt-32 mx-auto">
      <div>
        <h2 className="text-6xl text-center mb-12 italic" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div className="bg-[#85919A] h-[80vh] flex flex-col justify-center items-start px-8 text-white">
          <h1 className="text-4xl font-semibold mb-4 italic" data-aos="fade-up">
            Special Offers For Pandemic Situation!
          </h1>
          <h3 className="text-2xl mb-6 italic" data-aos="fade-up">
            10% Off On All Categories Seat
          </h3>
          <a
            href="#"
            className="px-6 py-3 bg-transparent rounded border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
            data-aos="fade-up"
          >
            Book Your Seat Earlier
          </a>
        </div>
        <div className="px-4 py-8">
          <h1 className="text-6xl text-center mb-8 italic" data-aos="fade-up">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 mt-8">
            {/* FAQ 1 */}
            <div className="text-center" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439957/glo_dkmvgj.png"
                alt="Why choose Ronjona"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                Why should I choose Ronjona?
              </h2>
              <p className="text-gray-600 text-xl text-justify mt-12">
                Our place is an only women hostel, quiet, cosy and well-located.
                The hostel is peaceful, with friendly staff, and close to many
                colleges and universities in Uttara. Our goal is to make our
                inmates feel at home, away from home.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className=" text-center" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439957/q_zd4wqn.png"
                alt="Location safety"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                How is the location? Is it dangerous?
              </h2>
              <p className="text-gray-600 text-xl text-justify">
                It is a 2-minute walk from the main road with access to
                transportation. Restaurants, hospitals, ATMs, shops, and bus
                stops are all nearby, with Zom Zom Tower and Mascot Plaza just a
                short walk away.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className=" text-center" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439956/tag_jfgvjw.png"
                alt="Price inclusions"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                What is included in the price?
              </h2>
              <p className="text-gray-600 text-xl text-justify mt-12">
                The price includes airy, well-ventilated furnished rooms (A/C
                and non-A/C), separate beds, reading tables, nutritious food,
                purified water, lighting, housekeeping, and access to the
                kitchen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* FAQ 4 */}
            <div className="text-center" data-aos="fade-down">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439957/glo_dkmvgj.png"
                alt="Other services"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                What other services and facilities do you provide??
              </h2>
              <p className="text-gray-600 text-xl text-justify mt-8">
                Friendly Environment, 24 hour Wifi and Free Internet Access,
                luggage storage, Fridge, TV in the common area, Parking
                Facilities for Honda/Vespa, Newspaper & magazines, 24/7 hours
                Security, CCTV, Generator and Lift facilities etc.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className=" text-center" data-aos="fade-down">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439957/lock_lknumi.png"
                alt="Late check-in"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                What if I need to check in after reception hours??
              </h2>
              <p className="text-gray-600 text-xl text-justify mt-8">
                Our reception is open from 7.00 to 21.00. Upon request we accept
                late arrivals. In this case you will receive instructions on how
                to let yourself in as there won’t be staff expecting you.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className=" text-center" data-aos="fade-down">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439956/tag_jfgvjw.png"
                alt="Age limit"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                Is there an age limit?
              </h2>
              <p className="text-gray-600 text-xl text-justify mt-14">
                All our ladies guests must be at least 14 years old and not
                above 48 years. Guest under 18 years old have to be accompanied
                by an adult.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="text-center" data-aos="fade-down">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1737439957/lock_lknumi.png"
                alt="Payment system"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-4 text-center italic">
                How the payment system of ronjona’s product/service?
              </h2>
              <p className="text-gray-600 text-xl text-justify mt-8">
                Pay for the product or service with ease by using any of the
                available modes of payment, such as Cash, Cheques, bkash or
                Rocket.
              </p>
            </div>
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
