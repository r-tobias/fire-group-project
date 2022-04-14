
import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Zodiac from './components/Zodiac';
import TimeFrame from './components/TimeFrame';
import History from './components/History';
import Footer from './components/Footer';

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
    <div className="App">
      <nav className="navbar">
          <h1>Horoscopia</h1>
          
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/zodiac"> Zodiac </NavLink>
          <NavLink to="/about"> About Us </NavLink>
          <NavLink to="/history"> History </NavLink>
          <button className = 'toggleDarkModeButton' onClick={() => setDarkMode(!darkMode)}></button> 
      </nav>    

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Footer />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/time" element={<TimeFrame />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;