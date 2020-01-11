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
                    </div>
                    {/* Second Footer Column */}
                    <div className="col-md-6">
                        <h2>About EcoChef</h2>
                    </div>
                </div>
                <div className="row">
                    {/* First footer column */}
                    <div className="col-md-6">
                        <ul className="footer-list">
                            <li><a class="fab fa-instagram footer-icon" ></a></li>
                            <li><a class="fab fa-facebook footer-icon"></a></li>
                        </ul>
                    </div>
                    {/* Second Footer Column */}
                    <div className="col-md-6">
                        <ul className="footer-list">
                            <li><a href="/mission">Our Mission</a></li>
                            <li><a>Comming Soon: Cooking Resources</a></li>
                            <li><a>Comming Soon: Grocery Store Resources</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    

  );
}

export default Footer;
