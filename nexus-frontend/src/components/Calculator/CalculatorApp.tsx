import React from 'react';
import CalculatorBody from './CalculatorBody.tsx';
import NavBar from "../Navbar/NavBar.tsx";
import Footer from "../Footer/Footer.tsx";

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