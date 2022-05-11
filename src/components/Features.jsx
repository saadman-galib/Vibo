import React from "react";
import "./Features.scss";

function Features() {
    return (
        <>
            <div className="features-container">
                <div className="features">
                    <div className="feature-img">
                        <img src="./images/smartphone.png" alt="" />
                    </div>
                    <div className="cards-container">
                        <div className="card-row card-row-first">
                            <div className="card">
                                <img src="./images/icon.png" alt="" />
                                <h3>First 7 Days Free</h3>
                                <p>
                                    Cras ultricies ligula sed magna <br></br>
                                    dictum porta. Nulla porttitor <br></br>
                                    accumsan tincidunt. Vestibulum<br></br> ac
                                    diamdo.
                                </p>
                            </div>
                            <div className="card">
                                <img src="./images/icon 02.png" alt="" />
                                <h3>Fully Support</h3>
                                <p>
                                    Cras ultricies ligula sed magna <br></br>
                                    dictum porta. Nulla porttitor <br></br>
                                    accumsan tincidunt. Vestibulum <br></br>
                                    ac diamdo.
                                </p>
                            </div>
                        </div>
                        <div className="card-row card-row-second">
                            <div className="card">
                                <img src="./images/icon 03.png" alt="" />
                                <h3>Modern Flat Design</h3>
                                <p>
                                    Cras ultricies ligula sed magna <br></br>
                                    dictum porta. Nulla porttitor <br></br>
                                    accumsan tincidunt. Vestibulum <br></br>
                                    ac diamdo.
                                </p>
                            </div>
                            <div className="card">
                                <img src="./images/icon 04.png" alt="" />
                                <h3>User Friendly</h3>
                                <p>
                                    Cras ultricies ligula sed magna <br></br>
                                    dictum porta. Nulla porttitor <br></br>
                                    accumsan tincidunt. Vestibulum <br></br>
                                    ac diamdo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
