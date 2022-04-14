
import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Zodiac from './components/Zodiac';
import TimeFrame from './components/TimeFrame';


function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div className="container">
      {/* <header> */}
      {/* <h1 className='logo'>Horoscopia</h1>
      <nav className="navbar">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/zodiac">Zodiac</NavLink></li>
            <li> <NavLink to="/about">About Us</NavLink></li>
          </ul>
      </nav> */}

      {/* </header> */}
      
      <h1 className='logo'>Horoscopia</h1>
        <nav className="navbar">
          <ul>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/zodiac"> Zodiac </NavLink></li>
            <li><NavLink to="/about"> About Us </NavLink></li>
            <li><button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button></li>     
          </ul>
      </nav>    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/time" element={<TimeFrame />} />
      </Routes>
    </div>
  );
}

export default App;
