import { useState, useEffect } from 'react';
import { Navbar, Drawer, Button } from "flowbite-react";
import { FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const MainNavbar = () => {
    // window.scrollTo(0, 0)
    const [isOpen, setIsOpen] = useState(false); // Drawer visibility state
    const [isScrolled, setIsScrolled] = useState(false); // Scroll state
    const [showGetInTouchDropdown, setShowGetInTouchDropdown] = useState(false); // Get In Touch dropdown visibility
    const [showGalleryDropdown, setShowGalleryDropdown] = useState(false); // Gallery dropdown visibility
    const { pathname } = useLocation();


    // Function to handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : 'bg-white opacity-100 shadow-lg '}`}>
            {!isScrolled && (
                <div className="flex flex-col lg:flex-row items-center lg:gap-4 py-2 lg:py-0 bg-black text-white justify-center">
                    <p className='text-xs md:text-md lg:text-md'>
                        10000+ students have experienced the Luxurious Hive Life.
                    </p>
                    <FaAngleRight className='text-center m-o md:m-2'></FaAngleRight>
                    <div>
                        <p> Call : 01777177771</p>
                    </div>
                </div>
            )}

            <div className=' ' >
                {/* Navbar */}
                <Navbar className={`${isScrolled ? 'bg-black bg-opacity-50' : 'bg-white opacity-100'} transition-all duration-300 `} fluid rounded>
                    {/* Brand */}
                    <NavLink className='h-14 md:h-10' to="/">
                        <img
                            src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735990482/Ronjona/fcxyldbbg3gtm0ung8kt.png"
                            className="mr-2  h-8 md:h-9 rounded-lg"
                            alt="Logo"
                        />
                    </NavLink>

                    {/* Large screen navigation */}
                    <div className="hidden md:flex  md:space-x-6 lg:mr-32   ">
                        <NavLink
                            to="/"
                            className="relative text-lg font-medium hover:text-main-color"
                        >
                            Home
                            {pathname === "/" && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493] "></span>
                            )}
                        </NavLink>

                        {/* Get In Touch dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowGetInTouchDropdown(true)}
                            onMouseLeave={() => setShowGetInTouchDropdown(false)}
                        >
                            <p
                                className={`relative text-lg font-medium cursor-pointer ${isScrolled ? 'text-white' : 'text-black'}`}
                            >
                                Get In Touch
                                {(pathname === "/about" || pathname === "/vission" || pathname === "/management-info" || pathname === "/border-review") && (
                                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                                )}
                            </p>

                            {showGetInTouchDropdown && (
                                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200">
                                    <NavLink
                                        to="/about"
                                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200 ${pathname === "/about" ? "font-semibold" : ""}`}
                                    >
                                        About Us
                                    </NavLink>
                                    <NavLink
                                        to="/vission"
                                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200 ${pathname === "/vission" ? "font-semibold" : ""}`}
                                    >
                                        Vision & Mission
                                    </NavLink>
                                    <NavLink
                                        to="/management-info"
                                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200 ${pathname === "/management-info" ? "font-semibold" : ""}`}
                                    >
                                        Management Speech
                                    </NavLink>
                                    <NavLink
                                        to="/border-review"
                                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200 ${pathname === "/border-review" ? "font-semibold" : ""}`}
                                    >
                                        Review
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/all-packages"
                            className={`relative text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'} `}
                        >
                            Our Packages
                            {pathname === "/all-packages" && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                            )}
                        </NavLink>
                        <NavLink
                            to="/our-facility"
                            className={`relative text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'} `}
                        >
                            Our Facility
                            {pathname === "/our-facility" && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/faq"
                            className={`relative text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'}`}
                        >
                            FAQ
                            {pathname === "/faq" && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                            )}
                        </NavLink>

                        <NavLink
                            to="/our-branch"
                            className={`relative text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'}`}
                        >
                            Our Branches
                            {pathname === "/our-branch" && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                            )}
                        </NavLink>

                        {/* Gallery dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setShowGalleryDropdown(true)}
                            onMouseLeave={() => setShowGalleryDropdown(false)}
                        >
                            <p
                                className={`relative text-lg font-medium cursor-pointer ${isScrolled ? 'text-white' : 'text-black'}`}
                            >
                                Gallery
                                {(pathname === "/image-gallery" || pathname === "/video-gallery") && (
                                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                                )}
                            </p>

                            {showGalleryDropdown && (
                                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200">
                                    <NavLink
                                        to="/image-gallery"
                                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200 ${pathname === "/image-gallery" ? "font-semibold" : ""}`}
                                    >
                                        Image Gallery
                                    </NavLink>
                                    <NavLink
                                        to="/video-gallery"
                                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200 ${pathname === "/video-gallery" ? "font-semibold" : ""}`}
                                    >
                                        Video Gallery
                                    </NavLink>
                                </div>
                            )}
                        </div>




                        <NavLink
                            to="/contact-us"
                            className={`relative text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'}`}
                        >
                            Contact Us
                            {pathname === "/contact-us" && (
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#853493]"></span>
                            )}
                        </NavLink>


                    </div>

                    {/* Drawer toggle for mobile */}
                    <div className="flex md:hidden">
                        <Button className="bg-main-color text-white" onClick={() => setIsOpen(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </Button>
                    </div>
                </Navbar>
            </div>

            {/* Drawer for mobile */}
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <Drawer.Header>
                    <h2>Menu</h2>
                </Drawer.Header>
                <Drawer.Items>
                    <NavLink
                        to="/"
                        className="block text-lg font-medium text-gray-700 hover:underline py-2"
                        onClick={() => setIsOpen(false)} // Close drawer on click
                    >
                        Home
                    </NavLink>

                    {/* Get In Touch dropdown */}
                    <div className="py-2">
                        <button
                            onClick={() => setShowGetInTouchDropdown(!showGetInTouchDropdown)}
                            className="block text-lg font-medium text-gray-700 w-full text-left"
                        >
                            Get In Touch
                            {showGetInTouchDropdown ? <FaAngleUp className="inline ml-2" /> : <FaAngleRight className="inline ml-2" />}
                        </button>
                        {showGetInTouchDropdown && (
                            <div className="pl-4">
                                <NavLink
                                    to="/about"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)} // Close drawer on click
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/mission"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)} // Close drawer on click
                                >
                                    Mission & Vision
                                </NavLink>
                                <NavLink
                                    to="/management-info"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)} // Close drawer on click
                                >
                                    Management Speech
                                </NavLink>
                                <NavLink
                                    to="/border-review"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)} // Close drawer on click
                                >
                                    Review
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/all-packages"
                        className="block text-lg font-medium text-gray-700 hover:underline py-2"
                        onClick={() => setIsOpen(false)} // Close drawer on click
                    >
                        Our Packages
                    </NavLink>

                    <NavLink
                        to="/our-facility"
                        className="block text-lg font-medium text-gray-700 hover:underline py-2"
                        onClick={() => setIsOpen(false)} // Close drawer on click
                    >
                        Our Facility
                    </NavLink>
                    <NavLink
                        to="/faq"
                        className="block text-lg font-medium text-gray-700 hover:underline py-2"
                        onClick={() => setIsOpen(false)} // Close drawer on click
                    >
                        FAQ
                    </NavLink>




                    {/* Gallery dropdown */}
                    <div className="py-2">
                        <button
                            onClick={() => setShowGalleryDropdown(!showGalleryDropdown)}
                            className="block text-lg font-medium text-gray-700 w-full text-left"
                        >
                            Gallery
                            {showGalleryDropdown ? <FaAngleUp className="inline ml-2" /> : <FaAngleRight className="inline ml-2" />}
                        </button>
                        {showGalleryDropdown && (
                            <div className="pl-4">
                                <NavLink
                                    to="/image-gallery"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)} // Close drawer on click
                                >
                                    Image Gallery
                                </NavLink>
                                <NavLink
                                    to="/video-gallery"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)} // Close drawer on click
                                >
                                    Video Gallery
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/our-branch"
                        className="block text-lg font-medium text-gray-700 hover:underline py-2"
                        onClick={() => setIsOpen(false)} // Close drawer on click
                    >
                        Our Branches
                    </NavLink>

                    <NavLink
                        to="/contact-us"
                        className="block text-lg font-medium text-gray-700 hover:underline py-2"
                        onClick={() => setIsOpen(false)} // Close drawer on click
                    >
                        Contact Us
                    </NavLink>
                </Drawer.Items>
            </Drawer>


        </div>
    );
};

export default MainNavbar;

