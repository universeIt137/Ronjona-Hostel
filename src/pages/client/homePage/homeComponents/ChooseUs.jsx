import React from 'react';

const ChooseUs = () => {
    return (
        <div className=" my-48 container px-4 md:px-0 md:mx-auto">
            <div className='  mb-10 '>
                <p className="text-2xl md:text-5xl hover:underline font-bold text-main-color">Why Choose Us</p>
                
            </div>
            <div className="flex flex-col lg:flex-row  lg:gap-20">
                <div className="lg:w-1/2">
    
                    <div className="relative ">
                        <img
                            className="w-full md:w-3/4 h-[70lvh] md:h-[80lvh] rounded-[20px]"
                            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735624184/samples/two-ladies.jpg"
                            alt="Main Image"
                        />
                        <img
                            className="absolute right-0 top-36 w-96 h-64  border-4 rounded-[20px] border-white hidden md:block"
                            src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735624187/samples/man-on-a-street.jpg"
                            alt="Overlay Image"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:mt-10 mr-0 lg:mr-8">
                    <p className="text-xl lg:text-6xl font-semibold mb-4 text-center text-main-color">WHY YOU WITH RONJONA</p>
                    <p className="text-sm lg:text-lg text-justify">
                        Ronjona women’s Hostel in Uttara is a premier venture for a comfortable stay for both girl
                        residents studying in various institutions who prefer staying away from the college hostel
                        and professionals working women who need accommodation in Dhaka (nearer to Uttara),
                        combining ideal locations near popular colleges and universities with modern facilities and
                        support to ensure maximum comfort and convenience during their stay.
                        Our elegantly designed rooms and furnished homes offer you a choice of two beds, three beds
                        in rooms, or four beds in house accommodations featuring spacious living and dining areas,
                        a browsing center, and pick-up & drop-off facilities for a few colleges and universities.
                        All are assured with
                    </p>
                </div>
            </div>
        </div>


    );
};

export default ChooseUs;