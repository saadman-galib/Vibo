import React from "react";
import Available from "../Available";
import Code from "../Code";
import Credit from "../Credit";
import HeroSection from "../HeroSection";
import Service from "../Service";
// import Navbar from "../Navbar";


function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <HeroSection />
            <Service />
            <Code />
            <Available />
            <Credit />
        </>
    );
}

export default Home;
