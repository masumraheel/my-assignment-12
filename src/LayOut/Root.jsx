import React from 'react';
import NavBar from '../Components/NavBar/NavBar.Jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer.jsx'

const Root = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;