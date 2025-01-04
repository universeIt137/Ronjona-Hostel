import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/client/Footer';
import Topbar from '../components/client/Topbar';
import MainNavbar from '../components/client/MainNavbar';

const MainLayout = () => {
    return (
        <div>
            <Topbar/>
            <MainNavbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;