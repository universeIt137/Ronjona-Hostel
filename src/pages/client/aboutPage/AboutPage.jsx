import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="w-11/12 bg-white py-10 px-6 mx-auto">
      {/* Who We Are Section */}
      <section className="text-center mt-16">
        <div>
          <h1 className="text-4xl font-bold text-black">Who We Are</h1>
        </div>
      </section>

      <section className="bg-white py-10 px-6">
        {/* About Company Section */}
        <button className="bg-blue-900 rounded-full mb-4">
          <h2 className="text-xl font-bold text-white px-2 py-1">
            About Company
          </h2>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mb-12">
          <div className="text-left">
            <h3 className="text-3xl font-bold text-black mb-4">
              Discover Our Story of Success
            </h3>
          </div>
          <div className="text-right">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              From humble beginnings to industry leadership, we've taken steps
              toward excellence. Join us in your pursuit of innovation—welcome
              to the journey.
            </p>
          </div>
        </div>

        {/* Highlights Section (All Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div>
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736572682/wzutxckyafvbyomqa3er.png"
              alt="Trusted Business"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-900 text-center">
              Trusted Business
            </h4>

            <p className="text-sm text-gray-600 text-center mt-2">
              We deliver success to your business.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736572682/w4eyksiym7nftjyyxiy0.png"
              alt="Expertise in Action"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-900 text-center">
              Expertise in Action
            </h4>
            <p className="text-sm text-gray-600 text-center mt-2">
              We assist our clients in setting the right strategy.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736572682/rs7q8bl3x1dj2ig0xany.png"
              alt="Recognized Excellence"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-900 text-center">
              Recognized Excellence
            </h4>
            <p className="text-sm text-gray-600 text-center mt-2">
              We see challenges as opportunities.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736572682/b9y2gqbqyw5kqmrvdtvf.png"
              alt="Always Ready to Help"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-900 text-center">
              Always Ready to Help
            </h4>
            <p className="text-sm text-gray-600 text-center mt-2">
              Your success is our priority, and we're always here to support
              you.
            </p>
          </div>
        </div>
      </section>

      <section>
        <img
          src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736576752/rtj1nrifk5xbhoxbm42x.png"
          alt="Company Visual"
          className="w-full h-auto"
        />
      </section>

      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative w-60 h-80 bg-transparent">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736573918/cvl6hsaiyswfys7tivyl.png"
                alt="Image 2"
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute top-44 left-8 transform translate-x-1/2 -translate-y-1/2 rounded-full w-28 h-28 shadow-lg">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736578446/r8sgg0mvcepncvmuypyo.png"
                alt="Image 1"
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-10 left-50 transform translate-x-1/2 translate-y-1/2 w-40 h-48 shadow-lg">
              <img
                src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736573919/yjrphxsrqghjj82oeey7.png"
                alt="Image 3"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div>
            <button className="bg-blue-900 text-xl font-bold text-white mt-12 rounded-full px-2 py-1">Our Values</button>
            <p className="text-4xl font-bold text-black mt-6">
              Empowering Success Through Insightful Solutions
            </p>
            <p className="text-black mt-4 leading-relaxed text-justify text-lg">
              At our consulting firm, we are dedicated to delivering insightful
              and innovative solutions tailored to each client’s unique needs.
              Our unwavering commitment is to drive our clients’ success,
              treating their objectives as our own.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-center text-5xl text-black font-semibold m-10">
            We Are Here To Help You
          </h1>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {/* Card 1 */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736585039/hxlbwimcyhn0eqizqrgy.png"
              alt="John McNab"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute left-10 bottom-2 bg-black bg-opacity-50 rounded-lg flex flex-row justify-start items-center space-x-4 px-2 py-1">
              <div className="text-center text-white">
                <p className="font-bold text-lg">John McNab</p>
                <p className="text-sm">Position/Role</p>
              </div>
              <div>
                <i className="text-white text-4xl">
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736585039/hxlbwimcyhn0eqizqrgy.png"
              alt="Jane Doe"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute left-10 bottom-2 bg-black bg-opacity-50 rounded-lg flex flex-row justify-start items-center space-x-4 px-2 py-1">
              <div className="text-center text-white">
                <p className="font-bold text-lg">Jane Doe</p>
                <p className="text-sm">Position/Role</p>
              </div>
              <div>
                <i className="text-white text-4xl">
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736585039/hxlbwimcyhn0eqizqrgy.png"
              alt="Alice Johnson"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute left-10 bottom-2 bg-black bg-opacity-50 rounded-lg flex flex-row justify-start items-center space-x-4 px-2 py-1">
              <div className="text-center text-white">
                <p className="font-bold text-lg">Alice Johnson</p>
                <p className="text-sm">Position/Role</p>
              </div>
              <div>
                <i className="text-white text-4xl">
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dxgisw3qc/image/upload/v1736585039/hxlbwimcyhn0eqizqrgy.png"
              alt="Bob Smith"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute left-10 bottom-2 bg-black bg-opacity-50 rounded-lg flex flex-row justify-start items-center space-x-4 px-2 py-1">
              <div className="text-center text-white">
                <p className="font-bold text-lg">Bob Smith</p>
                <p className="text-sm">Position/Role</p>
              </div>
              <div>
                <i className="text-white text-4xl">
                  <FaLinkedin />
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
