import { Carousel } from 'flowbite-react';
import { Select } from "flowbite-react";
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="relative h-56 md:h-[100vh] mt-16 md:mt-12 rounded-none">
                {/* Banner Text */}
                <p className="absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-30 text-[#fab10b] text-3xl md:text-6xl text-center font-bold px-4 w-full">
                    You don’t just Stay with us, you <br/> Live with us!
                </p>
                {/* Responsive Form */}
                <div className="absolute z-30 p-4 top-[105%] md:top-[65%] left-[50%] transform -translate-x-[50%] tarnslate-y-0 md:-translate-y-[50%] border-2 md:border-8 bg-white border-black border-opacity-10 flex flex-col md:flex-row gap-3 items-center w-[90%] md:w-auto rounded-md shadow-lg">
                    <div className="w-full md:w-auto">
                        <Select
                            id="destination"
                            required
                            className="w-full md:w-auto p-2 rounded-md border border-gray-300"
                        >
                            <option value="">Select Destination</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>
                    </div>
                    <div className="w-full md:w-auto">
                        <Select
                            id="guests"
                            required
                            className="w-full md:w-auto p-2 rounded-md border border-gray-300"
                        >
                            <option value="">Select Guests</option>
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4+ Guests</option>
                        </Select>
                    </div>
                    <button className="w-full md:w-auto flex gap-2 items-center justify-center bg-[#fab10b] rounded-lg px-6 py-2 text-white text-sm md:text-base hover:bg-yellow-600">
                        <FaSearch />
                        <p>Search</p>
                    </button>
                </div>
                {/* Carousel */}
                <Carousel rounded="none" leftControl="" rightControl="">
                    <img
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452837/samples/cup-on-a-table.jpg"
                        alt="Slide 1"
                        className="w-full object-cover h-56 md:h-[100vh]"
                    />
                    <img
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452835/samples/balloons.jpg"
                        alt="Slide 2"
                        className="w-full object-cover h-56 md:h-[100vh]"
                    />
                    <img
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/imagecon-group.jpg"
                        alt="Slide 3"
                        className="w-full object-cover h-56 md:h-[100vh]"
                    />
                    <img
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-4.jpg"
                        alt="Slide 4"
                        className="w-full object-cover h-56 md:h-[100vh]"
                    />
                    <img
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg"
                        alt="Slide 5"
                        className="w-full object-cover h-56 md:h-[100vh]"
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
