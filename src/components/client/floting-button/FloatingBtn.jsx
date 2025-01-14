import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';

const FloatingBtn = () => {
    const phoneNumber = "01777177771"; // Define phone number once to reuse

    return (
        <div className="fixed bottom-4 left-9 flex gap-4 w-11/12 mx-auto justify-between">
            {/* Phone Call Button */}
            <a
                href={`tel:+88${phoneNumber}`}
                className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
                <FaPhone size={24} />
            </a>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/+88${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
                <BsWhatsapp size={24} />
            </a>
        </div>
    );
};

export default FloatingBtn;
