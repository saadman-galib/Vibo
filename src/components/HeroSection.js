import React from "react";
import Navbar from "./Navbar";
import "./HeroSection.scss";
import Features from "./Features";

function HeroSection() {
    return (
        <>
            <div className="herosection-container">
                <Navbar />
                <div className="herosection">
                    <div className="hero-title">
                        <h2>
                            Choose a better way to <br></br>
                            represent your app
                        </h2>
                        <p>
                            Vestibulum ac diam sit amet quam vehicula elementum.
                        </p>
                    </div>
                    <div className="hero-btn-container">
                        <button className="btn-white hero-btn">
                            Download Free
                        </button>
                        <button className="btn-transparent hero-btn">
                            Contact Us
                        </button>
                    </div>
                    <div className="hero-img">
                        <img src="./images/smartphone.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="wave-container">
                <div className="wave">
                    <img src="./images/wave.png" alt="" />
                </div>
                <Features />
            </div>
        </>
    );
}

export default HeroSection;
