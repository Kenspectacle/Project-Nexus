import React from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import WelcomeMessage from "./WelcomeMessage";
import IntroductionSection from "./IntroductionSection";

const Homepage = () => {
    return(
        <>
            <NavBar />
            <WelcomeMessage />
            <IntroductionSection />
            <Footer />
        </>
    )
};

export default Homepage;