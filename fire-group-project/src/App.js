
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Zodiac from './components/Zodiac';
import TimeFrame from './components/TimeFrame';




function App() {
  return (
    <div className="App">
      
      <nav className="buttons">
          <NavLink to="/about">About us </NavLink>     
          <NavLink to="/zodiac">Zodiac</NavLink>
          <NavLink to="/">Home</NavLink>
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
