
import { NavLink } from 'react-router-dom'


function Home () {
    return(
        <div>
            <h1>Welcome to Astrology Hub!</h1>
            <nav>
                <ul>
                    <NavLink to="/about">
                    <li>About us</li>
                    </NavLink>

                    <NavLink to="/birthday">
                    <li>Birthday Analyzer</li>
                    </NavLink>

                    <NavLink to="/horoscope">
                    <li>Daily Horoscope</li>
                    </NavLink>
                    
                    <NavLink to="/zodiac">
                    <li>Zodiac</li>
                    </NavLink>

                    <input type="text" placeholder="Zodiac Signs" />
                    <input type="button" value="Click"/>
 
                </ul>
            </nav>
        </div>
    )
}

export default Home