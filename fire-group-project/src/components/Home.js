
import { NavLink } from 'react-router-dom'
import fetchData from '../services/constants'
import { useState, useEffect} from 'react'
import Button from './Button'


function Home () {

    const [zodiacData, setZodiacData] = useState({})
    const [value, setValue] = useState('')

        const handleChange = async (event) =>{
            setValue(event.target.value)
        }

        const searchButton = async (event) =>{
            const data = await fetchData(value);
           console.log(data)
            setZodiacData(data)

        }

    return(
        <div>
            <h1>Welcome to Astrology Hub!</h1>
            <nav>
                <ul>
                
                    <Button onChange={(event) => handleChange(event)} onClick={(event) => searchButton(event)} />
                </ul>
            </nav>
        </div>
    )
}

export default Home