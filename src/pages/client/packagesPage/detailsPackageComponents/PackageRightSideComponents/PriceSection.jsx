import React from 'react';

const PriceSection = () => {
    return (
        <div className=' justify-items-center'>
            <img className='w-[450px] rounded-[30px]  h-96 my-10' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735624182/samples/imagecon-group.jpg" alt="" />
            <div className='bg-yellow-50 shadow-lg p-6 w-[450px] rounded-[30px]'>
                <p className='text-2xl font-bold'>Duluxe Hostel Package</p>
                <p className='text-6xl font-semibold'>8000 Taka</p>
                <div className='flex justify-between gap-3 mt-12'>
                    <button className='bg-main-color text-white py-3 text-xl rounded-lg w-full'>CALL NOW</button>
                    <button className='bg-main-color text-white py-3 text-xl rounded-lg w-full'>CALL NOW</button>
                </div>
                <button className='bg-main-color text-white py-3 text-xl rounded-lg w-full my-3'>CALL NOW</button>
            </div>
        </div>
    );
};

export default PriceSection;