import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Homepage from './pages/Homepage/Homepage';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <header className="App-header">
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/homepage" element={<Homepage />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
