import React from "react";
import "./Credit.scss";

function Credit() {
    return (
        <div className="credit-container">
            <div className="credit-section">
                <div className="left-part">
                    <p>
                        &copy; All Rights Reserved. Template from{" "}
                        <a href="https://www.graphberry.com/" target="_blank">
                            Graphberry
                        </a>{" "}
                        Developed with ❤️ by{" "}
                        <a
                            href="https://github.com/saadman-galib"
                            target="_blank"
                        >
                            Saadman-Galib
                        </a>
                    </p>
                </div>
                <div className="right-part">
                    <div className="social-container">
                        <i class="fab fa-facebook-f facebook"></i>
                        <i class="fab fa-twitter twitter"></i>
                        <i class="fab fa-dribbble dribbble"></i>
                        <i class="fab fa-google-plus-g google"></i>
                        <i class="fab fa-youtube youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Credit;
