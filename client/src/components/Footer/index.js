import React from "react";
import "./style.css";

function Footer({ children }) {
  return (
    <footer className="footer mt-auto py-3" id="footer">
        <div className="container">
            <h2>Where to Find Us</h2>
            <ul id="footer-list">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
            </ul>
        </div>
    </footer>
    

  );
}

export default Footer;
