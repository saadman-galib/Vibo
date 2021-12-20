import React from "react";
import "./Service.scss";

function Service() {
    return (
        <>
            <div className="service-container">
                <div className="service-section">
                    <div className="left-part">
                        <div className="service-title">
                            <h2>Stable and Ready</h2>
                            <p>
                                Cras ultricies ligula sed magna dictum porta.
                                Nulla porttitor accumsan tincidunt. Vestibulum
                                ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Curabitur aliquet quam id dui posuere
                                blandit. Curabitur aliquet quam id dui posuere
                                blandit. Vestibulum ac diam sit amet quam.
                            </p>
                            <button className="service-btn">
                                Download Free
                            </button>
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="service-card-container">
                            <div className="service-card">
                                <img
                                    src="./images/vector.png"
                                    alt=""
                                    className="vector-img-1"
                                />
                                <div className="service-card-text">
                                    <h2>Made With Love</h2>
                                    <p  className="service-card-text-paragraph">
                                        Cras ultricies ligula sed magna dictum
                                        porta. Nulla porttitor <br></br>accumsan
                                        tincidunt. Vestibulum ac diam.
                                    </p>
                                </div>
                            </div>
                            <div className="service-card">
                                <img
                                    src="./images/vector 02.png"
                                    alt=""
                                    className="vector-img-2"
                                />
                                <div className="service-card-text">
                                    <h2>Free of Use</h2>
                                    <p  className="service-card-text-paragraph">
                                        Cras ultricies ligula sed magna dictum
                                        porta. Nulla porttitor <br></br>accumsan
                                        tincidunt. Vestibulum ac diam.
                                    </p>
                                </div>
                            </div>
                            <div className="service-card">
                                <img
                                    src="./images/vector 03.png"
                                    alt=""
                                    className="vector-img-3"
                                />
                                <div className="service-card-text">
                                    <h2>Fully Support Available</h2>
                                    <p  className="service-card-text-paragraph">
                                        Cras ultricies ligula sed magna dictum
                                        porta. Nulla porttitor <br></br>accumsan
                                        tincidunt. Vestibulum ac diam.
                                    </p>
                                </div>
                            </div>
                            <div className="service-card">
                                <img
                                    src="./images/vector 04.png"
                                    alt=""
                                    className="vector-img-4"
                                />
                                <div className="service-card-text">
                                    <h2>Flat and Modern Ui & Ux</h2>
                                    <p  className="service-card-text-paragraph">
                                        Cras ultricies ligula sed magna dictum
                                        porta. Nulla porttitor <br></br>accumsan
                                        tincidunt. Vestibulum ac diam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
