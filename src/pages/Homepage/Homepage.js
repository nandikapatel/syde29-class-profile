import React from "react";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage-bg">
            <nav className="homepage-navbar">
                <ul>
                    <li><a href="#demographics">Demographics</a></li>
                    <li><a href="#highschool">High School</a></li>
                    <li><a href="#academics">Academics</a></li>
                    <li><a href="#coop">Co-op</a></li>
                    <li><a href="#lifestyle">Lifestyle</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
            <div className="star star-purple"></div>
            <div className="star star-green"></div>
            <div className="homepage-content">
                <div className="homepage-title">
                    <div className="row">
                        <span className="look">THIS IS</span>
                        <span className="syde">SYDE '29</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage; 