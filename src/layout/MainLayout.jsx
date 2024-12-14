import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)] w-10/12 mx-auto py-10">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;