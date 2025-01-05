import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/client/Footer';
import MainNavbar from '../components/client/MainNavbar';

const MainLayout = () => {
    return (
        <div>
            <MainNavbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;