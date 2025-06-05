import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage-logo" onClick={() => navigate("/")}>SYDE</div>
    );
};

export default Logo; 