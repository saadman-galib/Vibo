import React from "react";
import "./Available.scss";
import Contact from "./Contact";

function Available() {
    return (
        <>
            <div className="available-container">
                <div className="available-section">
                    <div className="left-part">
                        <img
                            src="./images/smartphone.png"
                            alt="smartphone"
                        ></img>
                    </div>
                    <div className="right-part">
                        <div className="available-text">
                            <h2>Now Available</h2>
                            <p>
                                Cras ultricies ligula sed magna dictum porta.
                                Nulla porttitor accumsan tincidunt. Vestibulum
                                ac diam sit amet quam vehicula elementum sed sit
                                amet dui. quam vehicula elementum sed sit
                                ametsuada.
                            </p>
                        </div>
                        <div className="store-img-container">
                            <img
                                src="./images/ios.png"
                                className="apple-store store-img"
                                alt=""
                            />
                            <img
                                src="./images/google.png"
                                className="google-store store-img"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
}

export default Available;
