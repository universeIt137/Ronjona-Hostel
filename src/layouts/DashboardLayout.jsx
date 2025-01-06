import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

const DashboardLayout = () => {
    return (
        <div>
            <div className="flex">
                <div className="border">
                    <AdminSidebar />
                </div>
                <div className="border w-full">
                    
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;