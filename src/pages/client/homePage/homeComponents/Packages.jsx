import React from 'react';
import { FaAngleRight, FaSlideshare } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa6';
import { IoIosShareAlt } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';
import { TbShare3 } from 'react-icons/tb';

const Packages = () => {
    return (
        <div className='container px-4 md:px-0 md:mx-auto'>
            {/* Top Section start */}
            <div className='  mb-6 font-bold flex justify-between items-center'>
                <p className="text-2xl md:text-4xl hover:underline">Our Pakeges</p>
                <div className='flex items-center gap-2 hover:underline'>
                    <a href="text-lg hover:underline ">See More</a>
                    <FaAngleRight />
                </div>
            </div>
            {/* Top Section end */}

            {/* Mian Card Section Start */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/food/spices.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452835/samples/look-up.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452828/samples/landscapes/girl-urban-view.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/ecommerce/car-interior-design.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452828/samples/landscapes/beach-boat.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452828/samples/people/jazz.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452828/samples/people/bicycle.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
                <div className='rounded-xl  w-full pb-6'> 
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452828/samples/bike.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-[#fab10b] p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 className='absolute top-4 right-3 bg-white rounded-full text-3xl p-1'></TbShare3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-[#fab10b] hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>
                </div>
               
            </div>

            {/* Mian Card Section End */}
        </div>
    );
};

export default Packages;