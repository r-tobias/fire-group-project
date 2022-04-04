
import './App.css';
import fetchData from './services/constants';
import {NavLink, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Input from './components/Input';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Zodiac from './components/Zodiac';




function App() {

fetchData()


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/Zodiac/" element={<Zodiac />} /> */}
      </Routes>

    </div>
  );
}

export default App;
