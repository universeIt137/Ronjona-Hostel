import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/client/Footer';
import MainNavbar from '../components/client/MainNavbar';
import FloatingBtn from '../components/client/floting-button/FloatingBtn';

const MainLayout = () => {
    return (
        <div>
            <MainNavbar/>
            <Outlet></Outlet>
            <Footer />
            <FloatingBtn></FloatingBtn>
        </div>
    );
};

export default MainLayout;