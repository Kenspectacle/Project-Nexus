import React from "react";
import NavBar from "../Navbar/NavBar.tsx";
import Footer from "../Footer/Footer.tsx";
import WelcomeMessage from "./WelcomeMessage.tsx";
import IntroductionSection from "./IntroductionSection.tsx";

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