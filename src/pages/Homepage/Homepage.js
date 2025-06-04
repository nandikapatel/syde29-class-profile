import React from "react";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage-bg">
            <div className="star star-purple"></div>
            <div className="star star-green"></div>
            <div className="homepage-content">
                <div className="homepage-title">
                    <div className="row">
                        <span className="look">THIS</span>
                    </div>
                    <div className="row">
                        <span className="in">IN</span>
                        <span className="syde">SYDE</span>
                    </div>
                    <div className="row">
                        <span className="classof">CLASS OF '29!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage; 