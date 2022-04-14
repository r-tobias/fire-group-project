
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Zodiac from './components/Zodiac';
import TimeFrame from './components/TimeFrame';




function App() {
  return (
    <div className="container">
      <header>
      <h1 className='logo'>Horoscopia</h1>
      <nav className="navbar">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/zodiac">Zodiac</NavLink></li>
            <li> <NavLink to="/about">About Us</NavLink></li>
          </ul>
      </nav>

      </header>


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
