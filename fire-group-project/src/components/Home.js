import Footer from './Footer'
import { NavLink } from 'react-router-dom'
// import fetchData from '../services/constants'
// import { useState, useEffect} from 'react'
// import Button from './Button'




function Home () {
    return(
        <div className="homePage">
            {/* <img src= "https://pngset.com/images/purple-moon-freetoedit-purple-moon-no-background-outer-space-night-astronomy-outdoors-transparent-png-2770410.png" alt="crystal ball gif"/> */}
            <h1>Welcome to Horoscopia!</h1>
            <p>
             In Horoscopia, you can get customized reading for yesterday, today, and tomorrow with a few simple clicks. </p>
             <p><NavLink to="/zodiac" className="clickHere"><b>Find out</b></NavLink> what's in store for you today.</p>
             <div className="footer">
            
            </div>
        </div>
        
    )
}

export default Home