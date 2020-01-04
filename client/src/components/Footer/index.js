import React from "react";
import "./style.css";

function Footer({ children }) {
  return (
    <footer className="footer mt-auto py-3 wow" id="footer">
        <div className="container">
            <div className="container">
                <div className="row">
                    {/* First footer column */}
                    <div className="col-md-6">
                        <h2>Where to Find Us</h2>
                        <ul id="footer-list">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    {/* Second Footer Column */}
                    <div className="col-md-6">
                        <h2>About EcoChef</h2>
                        <ul id="footer-list">
                            <li>What is EcoChef?</li>
                            <li>Meet the Team</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    

  );
}

export default Footer;
