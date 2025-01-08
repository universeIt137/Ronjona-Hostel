import React from 'react';

const ContactBanner = () => {
    return (
        <div className="relative">
            <img
                 src="https://res.cloudinary.com/da43e0ikj/image/upload/v1736157745/ronjona/cum82erydiqnglmy8taw.png"
                alt="Contact Banner"
                className="absolute inset-0 md:w-full object-cover md:object-center"
            />
            <div className="relative flex items-center justify-center min-h-[100px] md:min-h-[500px] px-4">
                <p className="text-4xl mt-20 md:text-9xl  font-bold text-white text-center">
                    Contact Us
                </p>
            </div>
        </div>
    );
};

export default ContactBanner;
