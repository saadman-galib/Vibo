import React from "react";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-section">
                <button className="contact-btn">GET THE APP TODAY</button>
                
                <div className="contact-items-container">
                    <div className="contact-item">
                        <h3>Company</h3>
                        <p>Home</p>
                        <p>Jobs</p>
                        <p>Press</p>
                    </div>
                    <div className="contact-item">
                        <h3>Development</h3>
                        <p>iOS</p>
                        <p>Android</p>
                    </div>
                    <div className="contact-item">
                        <h3>Community</h3>
                        <p>Social</p>
                        <p>Forum</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                    </div>
                    <div className="contact-item">
                        <h3>Info</h3>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

                <div className="subscribe-container">
                    <div className="subscribe-title">
                        <h2>Get In Touch</h2>
                        <p>Subscribe to our newsletter and get notification for upcoming cool sutff.</p>
                    </div>
                    <div className="subscribe-input">
                        <input type="text" />
                        <button className="subscribe-btn">COUNT ME IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
