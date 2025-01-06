import React from 'react';
import Marquee from 'react-fast-marquee';

const Location = () => {
    return (
        <div className="mt-64 md:mt-16 container px-4 md:px-0 md:mx-auto">
            {/* Title */}
            <p className="hover:underline text-2xl md:text-4xl mb-6 font-bold text-main-color">Locations</p>
            
            {/* Wrapper with overflow hidden */}
            <div className="overflow-hidden relative">
                {/* Absolute element for larger screens */}
                <div className="absolute z-10 h-80 w-80 p-8 bg-[#f1edec] rounded-lg bg-opacity-80  hidden lg:block">
                    <img
                        className="rounded-lg h-60 w-full"
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/imagecon-group.jpg"
                        alt="Highlight Location"
                    />
                </div>

                <Marquee speed={100} gradient={false}>
                    <div className="flex md:gap-4 gap-2 px-1  py-10">
                        {/* Cards */}
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 md:h-60 h-48 md:w-56 w-40 text-center p-4 bg-gray-200 rounded-2xl"
                            >
                                <img
                                    src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/imagecon-group.jpg"
                                    alt="Location"
                                    className="md:h-40 h-32 w-full object-cover rounded-lg"
                                />
                                <p className="p-4 text-sm md:text-base">Noida</p>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Location;
