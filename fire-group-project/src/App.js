
import './App.css';
import fetchData from './services/constants';
import {NavLink, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Birthday from './components/Birthday';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Zodiac from './components/Zodiac';




function App() {

fetchData()
const [userInput, setUserInput] = useState('')


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/birthday" element={<Birthday/>} />
        {/* <Route path="/Zodiac/" element={<Zodiac />} /> */}
      </Routes>

    </div>
  );
}

export default App;
