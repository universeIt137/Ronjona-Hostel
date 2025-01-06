import React from 'react';
import { IoArrowBackOutline, IoArrowForward } from 'react-icons/io5';

const Offers = () => {
    return (
        <div className='mt-10 container px-4 md:px-0 md:mx-auto'>
            {/* Top Section start */}
            <div className='  mb-6 font-bold flex justify-between items-center'>
                <p className="text-2xl md:text-4xl hover:underline">Offers For you</p>
                <div className='flex items-center gap-8 hover:underline me-8 text-xl'>
                    <IoArrowBackOutline></IoArrowBackOutline>
                    <IoArrowForward></IoArrowForward>
                </div>
            </div>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-4 md:mx-0'>
                <div className='relative w-full'>
                    <img className='w-full h-72 rounded-xl' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg" alt="" />
                </div>
                <div className='relative w-full'>
                    <img className='w-full h-72 rounded-xl' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg" alt="" />
                </div>
            </div>
            {/* Top Section end */}
        </div>
    );
};

export default Offers;