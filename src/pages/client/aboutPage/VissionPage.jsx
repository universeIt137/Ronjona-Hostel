import React from 'react';
import Marquee from 'react-fast-marquee';

const VissionPage = () => {
return (
<div className="bg-gray-100">
    {/* Mission Section */}
    <section className="py-10 bg-gradient-to-r from-[#7F2B90] to-[#9B56A1] p-6 rounded-lg shadow-lg mt-32 mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
        <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">Our Mission & Vission</h1>
            <p className="text-white mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-center">
                Leading the way in sustainable and community-focused real estate.
            </p>
        </div>
    </section>
    
    {/* Mission Section */}
    <section className="py-10 bg-gradient-to-r from-[#7F2B90] to-[#9B56A1] p-6 rounded-lg shadow-lg mt-8 mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
        <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">Our Mission</h1>
            <p className="text-white mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                Our mission is to assist individuals and businesses in achieving growth, efficiency, and success by providing
                innovative and customized solutions. Through our commitment to quality, integrity, and continuous improvement, 
                we are dedicated to creating value for our customers, employees, and the communities we serve.
            </p>
        </div>
    </section>

    {/* Vision Section */}
    <section className="py-10 bg-gradient-to-r from-[#7F2B90] to-[#9B56A1] p-6 rounded-lg shadow-lg mt-8 mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
        <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">Our Vission</h1>
            <p className="text-white mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                Our vision is to provide reliable, sustainable, and community-focused real estate solutions. We are
                committed to creating spaces where families thrive and businesses grow, laying a strong foundation for
                future generations.
            </p>
        </div>
    </section>

    {/* Project Features Section */}
    <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6">Key Features</h2>
            <Marquee gradient={false} className="space-x-8">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="max-w-sm flex-shrink-0 p-6 bg-[#7F2B90] border border-gray-200 rounded-lg shadow-lg text-white dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p className="mb-3 font-normal text-sm sm:text-base lg:text-lg">
                            To meet the growing demand for residential living within the project, there will be a medical
                            college hospital, private university, as well as schools, colleges, mosques, madrasas, temples,
                            churches, and a theme park. Through the middle of the project, a dedicated infrastructure...
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    </section>
</div>
);
};

export default VissionPage;