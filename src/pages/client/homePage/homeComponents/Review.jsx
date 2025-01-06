import React from 'react';
import Marquee from 'react-fast-marquee';

const Review = () => {
    return (
        <div className="">
            {/* Title Section */}
            <div className="mt-3 text-center md:text-left">
                <p className="text-xl md:text-4xl text-gray-400 mt-6 md:mt-36 md:ml-12">Border Review</p>
                <p className="text-sm md:text-xl text-gray-500 mt-2 md:ml-12">Container</p>
            </div>

            {/* Card Container */}
            <div className="block md:hidden">
                {/* Static Flex Layout for Mobile */}
                <div className="flex flex-wrap gap-6 justify-center mt-6">
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center w-full md:max-w-lg bg-white shadow-lg rounded-lg p-4 gap-4">
                        <div className="flex-shrink-0">
                            <img
                                className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736095640/ronjona/sghoablli8mfzf3llk26.png"
                                alt="Jay Kriplani"
                            />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <p className="text-lg md:text-2xl font-bold">Jay Kriplani</p>
                            <p className="text-[#FAB10B] text-md md:text-lg">Noida, Delhi</p>
                            <p className="text-sm md:text-base mt-2 text-gray-600 break-words">
                                Nilesh Bhai and his supporting team from the Skyee property are the reason I’ll recommend Hive to anyone. His style of communication and relentless approach to making sure everyone is happy and properly serviced is certainly something I was very impressed by.
                            </p>
                        </div>
                    </div>
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center w-full md:max-w-lg bg-white shadow-lg rounded-lg p-4 gap-4">
                        <div className="flex-shrink-0">
                            <img
                                className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736095640/ronjona/sghoablli8mfzf3llk26.png"
                                alt="Jay Kriplani"
                            />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <p className="text-lg md:text-2xl font-bold">Jay Kriplani</p>
                            <p className="text-[#FAB10B] text-md md:text-lg">Noida, Delhi</p>
                            <p className="text-sm md:text-base mt-2 text-gray-600 break-words">
                                Nilesh Bhai and his supporting team from the Skyee property are the reason I’ll recommend Hive to anyone. His style of communication and relentless approach to making sure everyone is happy and properly serviced is certainly something I was very impressed by.
                            </p>
                        </div>
                    </div>
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center w-full md:max-w-lg bg-white shadow-lg rounded-lg p-4 gap-4">
                        <div className="flex-shrink-0">
                            <img
                                className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736095640/ronjona/sghoablli8mfzf3llk26.png"
                                alt="Jay Kriplani"
                            />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <p className="text-lg md:text-2xl font-bold">Jay Kriplani</p>
                            <p className="text-[#FAB10B] text-md md:text-lg">Noida, Delhi</p>
                            <p className="text-sm md:text-base mt-2 text-gray-600 break-words">
                                Nilesh Bhai and his supporting team from the Skyee property are the reason I’ll recommend Hive to anyone. His style of communication and relentless approach to making sure everyone is happy and properly serviced is certainly something I was very impressed by.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee for Larger Screens */}
            <div className="hidden md:block">
                <Marquee pauseOnHover gradient={false} speed={50}>
                    <div className="flex gap-6 mt-6">
                        {/* Card 1 */}
                        <div className="flex flex-col md:flex-row items-center w-full md:max-w-lg bg-white shadow-lg rounded-lg p-4 gap-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736095640/ronjona/sghoablli8mfzf3llk26.png"
                                    alt="Jay Kriplani"
                                />
                            </div>
                            <div className="text-center md:text-left flex-grow">
                                <p className="text-lg md:text-2xl font-bold">Jay Kriplani</p>
                                <p className="text-[#FAB10B] text-md md:text-lg">Noida, Delhi</p>
                                <p className="text-sm md:text-base mt-2 text-gray-600 break-words">
                                    Nilesh Bhai and his supporting team from the Skyee property are the reason I’ll recommend Hive to anyone. His style of communication and relentless approach to making sure everyone is happy and properly serviced is certainly something I was very impressed by.
                                </p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className="flex flex-col md:flex-row items-center w-full md:max-w-lg bg-white shadow-lg rounded-lg p-4 gap-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736095640/ronjona/sghoablli8mfzf3llk26.png"
                                    alt="Jay Kriplani"
                                />
                            </div>
                            <div className="text-center md:text-left flex-grow">
                                <p className="text-lg md:text-2xl font-bold">Jay Kriplani</p>
                                <p className="text-[#FAB10B] text-md md:text-lg">Noida, Delhi</p>
                                <p className="text-sm md:text-base mt-2 text-gray-600 break-words">
                                    Nilesh Bhai and his supporting team from the Skyee property are the reason I’ll recommend Hive to anyone. His style of communication and relentless approach to making sure everyone is happy and properly serviced is certainly something I was very impressed by.
                                </p>
                            </div>
                        </div>
                        {/* Card 1 */}
                        <div className="flex flex-col md:flex-row items-center w-full md:max-w-lg bg-white shadow-lg rounded-lg p-4 gap-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                    src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736095640/ronjona/sghoablli8mfzf3llk26.png"
                                    alt="Jay Kriplani"
                                />
                            </div>
                            <div className="text-center md:text-left flex-grow">
                                <p className="text-lg md:text-2xl font-bold">Jay Kriplani</p>
                                <p className="text-[#FAB10B] text-md md:text-lg">Noida, Delhi</p>
                                <p className="text-sm md:text-base mt-2 text-gray-600 break-words">
                                    Nilesh Bhai and his supporting team from the Skyee property are the reason I’ll recommend Hive to anyone. His style of communication and relentless approach to making sure everyone is happy and properly serviced is certainly something I was very impressed by.
                                </p>
                            </div>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Review;
