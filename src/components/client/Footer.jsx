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
                                <li className='flex gap-2 py-2'>
                                    <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1736053908/Ronjona/xzbrgqzomenlw5t6n7qo.png" alt="Phone" />
                                    <Link to="#">88 0 1 7 7 7 1 7 7 7 7 1
                                    </Link>
                                </li>
                                <li className='flex gap-2 py-2'>
                                    <img src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1736054078/Ronjona/p5lot1ryu8zqhh2hream.png" alt="Email" />
                                    <Link to="#">ronjonawomenshostel@gmail.com</Link>
                                </li>
                                <li className='py-2'>
                                    <Link Link to="#" className=''>
                                        405, 4th Floor, The Summit Business Bay, Near WEH Metro Station, Gundavali, Andheri-Kurla Road, Andheri East, Mumbai - 400 093, Maharashtra, India.
                                    </Link>
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
                                <li><Link  to="/all-packages">All Hostels</Link></li>
                                <li><Link  to="/testmonial">Testimonials</Link></li>
                                <li><Link  to="/image-gallery">Gallery</Link></li>
                                <li><Link  to="/faq">FAQ</Link></li>
                                <li><Link  to="#">Blog</Link></li>
                                <li><Link to="#">Site Map</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <ul>
                                <li><Link  to="#">Hive Luxe</Link></li>
                                <li><Link  to="#">Hive Connect</Link></li>
                                <li><Link  to="#">Careers</Link></li>
                                <li><Link  to="#">Partner with Us</Link></li>
                                <li><Link  to="#">Investors</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className='' >
                            <ul>
                                <li><NavLink to="#">Investors</NavLink></li>
                                <li><NavLink to="/term&condicton">Terms & Condition</NavLink></li>
                                <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                                <li><NavLink to="/refund">Refund Policy</NavLink></li>
                                <li><Link to={"/admin-login"}>Admin Login</Link></li>
                                <li><Link to={"/admin-register"}>Admin Register</Link></li>
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