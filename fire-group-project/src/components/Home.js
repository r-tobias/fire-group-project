import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
// import fetchData from '../services/constants'
// import { useState, useEffect} from 'react'
// import Button from './Button'




function Home () {
    return(
        <div className="home">
        <div className="logoDiv">
            <img className="image" src={logo} alt="logo img"/>
        </div>
        <div className="homeText">
        <h1>Welcome to Horoscopia!</h1>
            <p>
             In Horoscopia, you can get customized reading for yesterday, today, and tomorrow with a few simple clicks. </p>
             <p><NavLink to="/zodiac" className="clickHere"><b>Find out</b></NavLink> what's in store for you today.</p>
             <div className="footer">
        </div>
        </div>
        </div>
        
    )
}

export default Home