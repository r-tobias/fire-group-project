import { NavLink } from 'react-router-dom'

function Home () {
    return (
        <div>
            <h1>Welcome to the Astrology Hub!</h1> 
            <nav>
                <ul>
                    <NavLink to='/about'>
                        <li>About Us</li>
                    </NavLink>

                    <NavLink to='/birthday'>
                    <li>Birthday</li>
                    </NavLink>

                    <NavLink to='/horoscope'>
                    <li>Daily Horoscope</li>
                    </NavLink>

                    <NavLink to='/zodiac'>
                    <li>Zodiac</li>
                    </NavLink>
                    
                    <NavLink to='/search'>
                    <li>Search</li>
                    </NavLink>
                </ul>
            </nav>
           
        </div>
    )
}

export default Home