import React from 'react';
import CalculatorBody from './CalculatorBody';
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";

function CalculatorApp() {
    return (
    <>
        <NavBar />
        <CalculatorBody />
        <Footer />
    </>
    )
}

export default CalculatorApp;