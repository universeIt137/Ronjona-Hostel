import React from 'react';
import { FaAngleRight, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#212121]'>
                {/* Footer Top Section */}
                <div className='container mx-auto px-4 md:px-10 text-white'>
                    {/* Logo and Description */}
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-36 justify-between py-10'>
                        <img className='rounded-xl w-32 lg:w-auto' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735990482/Ronjona/fcxyldbbg3gtm0ung8kt.png" alt="Logo" />
                        <p className='text-sm md:text-base leading-relaxed'>
                            At Hive, we are proud, passionate, and relentless to create the greatest holistic experiences that enable you to unleash
                            your greatest potential. We provide you with the finest lifestyle, community, resources, and opportunities to make it happen.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className='border border-gray-500'></div>

                    {/* Footer Links Section */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-12 md:gap=6 py-8 text-sm md:text-base  '>
                        {/* Column 1 */}
                        <div className='' >
                            <ul>
                                <li className='flex gap-2 py-4'>
                                    <Link to={"https://www.facebook.com/share/1AHRqtswiV/"}><FaSquareFacebook className='text-3xl hover:text-[#812F8C] transition duration-500 ' /></Link>
                                    <FaInstagramSquare className='text-3xl hover:text-[#812F8C] transition duration-500 ' />
                                    <FaLinkedin className='text-3xl hover:text-[#812F8C] transition duration-500 ' />
                                </li>
                                <li className='flex gap-2 py-2'>
                                    <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1736053908/Ronjona/xzbrgqzomenlw5t6n7qo.png" alt="Phone" />
                                    <Link className='hover:text-[#812F8C] transition duration-500' to="#">88 0 1 7 7 7 1 7 7 7 7 1
                                    </Link>
                                </li>
                                <li className='flex gap-2 py-2'>
                                    <img className='hover:text-[#812F8C] transition duration-500' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1736054078/Ronjona/p5lot1ryu8zqhh2hream.png" alt="Email" />
                                    <Link className='hover:text-[#812F8C] transition duration-500' to="#">info@ronjonabd.com</Link>
                                </li>



                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <ul>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/about">About Us</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/vission">Vission & Mission</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/management-info">Management Speech</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/border-review">Review</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/privacy">Privace Policy</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/refund">Refund Policy</Link>
                                    </span>
                                </li>

                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <ul>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/all-packages">Our Our Packages</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/our-facility">Our Facility</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/faq">FAQ</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/our-branch">Our Branches</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/image-gallery">Image Gallery</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/video-gallery">Video Gallery</Link>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <Link to="/contact-us">Contact Us</Link>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className='' >
                            <ul>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <NavLink to="/booking-froms">Booking From</NavLink>
                                    </span>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <NavLink to="/hotline">Hotline</NavLink>
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-[#853493] rounded-full"></span>
                                    <span className="hover:text-[#853493] transition duration-300">
                                        <NavLink to="/address">Address</NavLink>
                                    </span>
                                </li>

                                <li className='py-2'>
                                    <Link Link to="#" className='hover:text-[#812F8C] transition duration-500'>
                                        Branch 1 : House No # 44, Road No # 13, Sector # 12 Uttara, Dhaka-1230
                                    </Link>
                                </li>
                                <li className='py-2'>
                                    <Link Link to="#" className='hover:text-[#812F8C] transition duration-500'>
                                        Branch 2 : Farmgate – 29, Purbo Raja Bazar (Near the Metro Rail Station), Dhaka-1255
                                    </Link>
                                </li>
                                {/* <li><NavLink to="/term&condicton">Terms & Condition</NavLink></li> */}
                                {/* <li><NavLink to="/privacy">Privacy Policy</NavLink></li> */}
                                {/* <li><NavLink to="/refund">Refund Policy</NavLink></li> */}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-4 px-2 text-xs md:text-sm">
                    <p>10000+ students have experienced the Luxurious Hive Life. See what makes us stand out.</p>
                    <FaAngleRight className='text-lg mt-2 md:mt-0' />
                </div>
            </footer>

        </div>
    );
};

export default Footer;


// export default function Footer() {
//     const items = [
//         "Assure Development & Design Ltd",
//         "Assure Builders Ltd",
//         "Assure Properties Ltd",
//         "Assure Tourism (Dera Resort)",
//         "Assure Tours and Travels",
//         "Assure General Hospital Ltd",
//         "Assure Agro Complex Ltd",
//         "Bangla Version",
//     ];

//     return (
//         <div className="bg-black text-white p-6">
//             <ul className="space-y-2">
//                 {items.map((item, index) => (
//                     <li key={index} className="flex items-center space-x-2">
//                         <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                         <span className="hover:text-[#853493] transition duration-300">{item}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
