import React, { useState } from 'react';
import { Navbar, Drawer, Button, Dropdown } from "flowbite-react";

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Drawer visibility state

    const handleClose = () => setIsOpen(false); // Close Drawer

    return (
        <div>
            {/* Navbar */}
            <Navbar fluid rounded>
                {/* Brand */}
                <Navbar.Brand href="#">
                    <img
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735990482/Ronjona/fcxyldbbg3gtm0ung8kt.png"
                        className="mr-2 h-8 sm:h-9"
                        alt="Flowbite React Logo"
                    />
                </Navbar.Brand>

                {/* Large screen navigation */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <a href="#" className="text-lg font-medium text-gray-700 hover:underline dark:text-gray-300">
                        Home
                    </a>
                    <Dropdown arrowIcon={true} inline label={<p className='text-lg font-medium text-gray-700 hover:underline dark:text-gray-300'>Get In Touch</p>}>
                        {/* <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header> */}
                        <Dropdown.Item>About Us</Dropdown.Item>
                        <Dropdown.Item>Mission</Dropdown.Item>
                        <Dropdown.Item>Vission</Dropdown.Item>
                        <Dropdown.Item>Management Info</Dropdown.Item>
                        {/* <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item> */}
                    </Dropdown>
                    <Dropdown arrowIcon={true} inline label={<p className='text-lg font-medium text-gray-700 hover:underline dark:text-gray-300'>Gallery</p>}>
                        <Dropdown.Item>Image Gallery</Dropdown.Item>
                        <Dropdown.Item>Video Gallery</Dropdown.Item>
                    </Dropdown>

                    <a href="#" className="text-lg font-medium text-gray-700 hover:underline dark:text-gray-300">
                        Our Branches
                    </a>
                    <a href="#" className="text-lg font-medium text-gray-700 hover:underline dark:text-gray-300">
                        Our Packages
                    </a>

                </div>
                {/* Drawer toggle for mobile */}
                <div className="flex md:hidden">
                    <Button className="bg-white hover:bg-blue-600 text-gray-700" onClick={() => setIsOpen(true)}>
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

            {/* Drawer for mobile */}
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header>
                    <h2>Menu</h2>
                </Drawer.Header>
                <Drawer.Items>
                    <a href="#" className="block text-lg font-medium text-gray-700 hover:underline dark:text-gray-300">
                        Home
                    </a>
                    <Dropdown arrowIcon={true} inline label={<p className='text-lg font-medium text-gray-700 hover:underline dark:text-gray-300'>Get In Touch</p>}>
                        {/* <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header> */}
                        <Dropdown.Item>About Us</Dropdown.Item>
                        <Dropdown.Item>Mission</Dropdown.Item>
                        <Dropdown.Item>Vission</Dropdown.Item>
                        <Dropdown.Item>Management Info</Dropdown.Item>
                        {/* <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item> */}
                    </Dropdown>
                    <Dropdown arrowIcon={true} inline label={<p className='text-lg font-medium text-gray-700 hover:underline dark:text-gray-300'>Gallery</p>}>
                        <Dropdown.Item>Image Gallery</Dropdown.Item>
                        <Dropdown.Item>Video Gallery</Dropdown.Item>
                    </Dropdown>
                    <a href="#" className=" block text-lg font-medium text-gray-700 hover:underline dark:text-gray-300">
                        Our Branches
                    </a>
                    <a href="#" className=" block text-lg font-medium text-gray-700 hover:underline dark:text-gray-300">
                        Our Packages
                    </a>
                </Drawer.Items>
            </Drawer>
        </div>
    );
};

export default MainNavbar;
