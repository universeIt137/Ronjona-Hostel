import React from 'react';
import { FaAngleRight, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';

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
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap=6 py-8 text-sm md:text-base'>
                        {/* Column 1 */}
                        <div>
                            <ul>
                                <li className='flex gap-2 py-2'>
                                    <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1736053908/Ronjona/xzbrgqzomenlw5t6n7qo.png" alt="Phone" />
                                    <a href="#">1800-572-0709</a>
                                </li>
                                <li className='flex gap-2 py-2'>
                                    <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1736054078/Ronjona/p5lot1ryu8zqhh2hream.png" alt="Email" />
                                    <a href="#">hello@thehivehostels.com</a>
                                </li>
                                <li className='py-2'>
                                    <a href="#" className='text-yellow-400'>
                                        405, 4th Floor, The Summit Business Bay, Near WEH Metro Station, Gundavali, Andheri-Kurla Road, Andheri East, Mumbai - 400 093, Maharashtra, India.
                                    </a>
                                </li>
                                <li className='py-2'>CIN: U55209MH2019PTC325971</li>
                                <li className='flex gap-2 py-4'>
                                    <FaSquareFacebook className='text-2xl' />
                                    <FaInstagramSquare className='text-2xl' />
                                    <FaLinkedin className='text-2xl' />
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <ul>
                                <li><a href="#">All Hostels</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Site Map</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <ul>
                                <li><a href="#">Hive Luxe</a></li>
                                <li><a href="#">Hive Connect</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Partner with Us</a></li>
                                <li><a href="#">Investors</a></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <ul>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                            </ul>
                        </div>

                        {/* Column 5 */}
                        <div>
                            <ul>
                                <li><a href="#">PG in Delhi</a></li>
                                <li><a href="#">PG in Mumbai</a></li>
                                <li><a href="#">PG in Indore</a></li>
                                <li><a href="#">PG in Dehradun</a></li>
                                <li><a href="#">PG in Bangalore</a></li>
                                <li><a href="#">PG in Noida</a></li>
                                <li><a href="#">PG in Greater Noida</a></li>
                                <li><a href="#">PG in Ahmedabad</a></li>
                                <li><a href="#">PG in Jaipur</a></li>
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