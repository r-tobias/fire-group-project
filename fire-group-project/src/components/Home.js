
import { NavLink } from 'react-router-dom'
// import fetchData from '../services/constants'
// import { useState, useEffect} from 'react'
// import Button from './Button'


function Home () {
    return(
        <div>
            <h1>Welcome to Horoscopia!</h1>
            <p>
                In Horoscopia, you can get customized reading for yesterday, today, and tomorrow with a few simple clicks. <NavLink to="/zodiac">Click Here </NavLink> to find out what's in store for you today.
            </p>
            
        </div>
    )
}

export default Home