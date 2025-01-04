import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import Topbar from '../components/client/Topbar';

const MainLayout = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;