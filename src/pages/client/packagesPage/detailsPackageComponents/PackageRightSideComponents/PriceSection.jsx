import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal'; // Install this library using: npm install react-modal
import { useNavigate } from 'react-router-dom';
const phoneNumber = "01777177771"; // Define phone number once to reuse


const PriceSection = ({ packagesDetailsData }) => {
    console.log(packagesDetailsData)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    const navigateBookingFrom = (id) => {
        navigate(`/packages-booking-from/${id}`)
    }

    return (
        <div className='justify-items-center'>
            {/* Video Thumbnail */}
            <div
                className="relative w-[300px] h-64 rounded-[20px] overflow-hidden shadow-lg my-10 cursor-pointer"
                onClick={handleOpenModal} // Opens modal when clicked
            >
                <video
                    className="w-full h-full object-cover"
                    src={packagesDetailsData?.[0]?.img || "https://www.w3schools.com/html/mov_bbb.mp4"} // Replace with your video URL
                    muted
                    loop
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-xl font-bold">Play Video</p>
                </div>
            </div>

            {/* Modal Section */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                ariaHideApp={false}
            >
                <div className="relative bg-black rounded-lg shadow-lg w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                    >
                        ✕
                    </button>
                    <ReactPlayer
                        url={ packagesDetailsData?.video || "https://youtu.be/yzhLlprnX8Q?si=i5e7NO-528ScjNwg" } // Replace with your video URL
                        playing={isModalOpen}
                        controls
                        width="100%"
                        height="70vh" // Adjust the height as needed
                    />
                </div>
            </Modal>

            {/* Price and Buttons Section */}
            <div className='bg-gray-200 shadow-lg p-6 w-[450px] rounded-[30px]'>
                <p className='text-2xl font-bold text-center '> {packagesDetailsData?.title} </p>
                <p className='lg:text-4xl font-semibold text-center '>Price {packagesDetailsData?.price} </p>
                <div className='flex justify-between gap-3 mt-6 '>

                    <a
                        href={`tel:+88${phoneNumber}`}
                        className="w-full"
                    >
                        <button className='bg-[#853493] text-white  py-3 text-xl rounded-lg w-full '>CALL NOW</button>
                    </a>

                    <a
                        href={`https://wa.me/+88${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className='bg-[#853493] text-white w-full   py-3 text-xl rounded-lg '>What's App</button>
                    </a>
                </div>
                <button onClick={()=>navigateBookingFrom(packagesDetailsData?._id)} className='bg-[#853493] text-white  py-3 text-xl rounded-lg w-full my-3'>Booking from</button>
            </div>
        </div>
    );
};

export default PriceSection;
