import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Creators from './pages/Creators/Creators';
import './App.css';

// Placeholder components for new routes
const Blogs = () => <div><h1>Blogs</h1><p>Blog content coming soon.</p></div>;
const Webring = () => <div><h1>Webring</h1><p>Webring content coming soon.</p></div>;
const Demographics = () => <div><h1>Demographics</h1><p>Demographics content coming soon.</p></div>;
const About = () => <div><h1>About</h1><p>About page coming soon.</p></div>;
const Profile = () => <div><h1>Profile</h1><p>Profile content coming soon.</p></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/creators" element={<Creators />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/webring" element={<Webring />} />
              <Route path="/demographics" element={<Demographics />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>

        </header>


      </div>
    </Router>
  );
}

export default App;
