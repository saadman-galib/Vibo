import React from "react";
import './Code.scss'

function Code() {
    return (
        <div className="code-container">
            <div className="code-section">
                <div className="left-part">
                    <img src="./images/code.png" alt="code"></img>
                </div>
                <div className="right-part">
                    <h2>Everything You Need</h2>
                    <div className="os-row">
                        <i class="fas fa-check-circle"></i><span> Android</span>
                    </div>
                    <div className="os-row">
                        <i class="fas fa-check-circle"></i><span> iPhone</span>
                    </div>
                    <p>Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam.</p>
                </div>
            </div>
        </div>
    );
}

export default Code;
