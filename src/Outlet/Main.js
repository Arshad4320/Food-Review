import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import NavbarItem from './../Sheard/Navbar/NavbarItem';



const Main = () => {
    return (
        <div>
            <NavbarItem></NavbarItem>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;