import React from "react";
import "./Home.css";
import Star from "../../components/Stars";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-logo">syde 2027</div>
        <ul className="navbar-links">
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/webring">Webring</Link></li>
          <li><Link to="/demographics">Demographics</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="content main-content">
        <h1>A Look Into SYDE</h1>
        <Link className="profile-link" to="/profile">go to profile <span role="img" aria-label="arrow"></span></Link>
      </div>
      <Star />
    </div>
  );
};

export default Home;
