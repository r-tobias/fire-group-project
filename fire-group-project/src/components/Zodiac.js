
import fetchData from '../services/constants'
import { useState, useEffect} from 'react'
import Button from './Button'
import TimeFrame from './TimeFrame'



function Zodiac(){



    const [zodiacData, setZodiacData] = useState({})
    const [value, setValue] = useState('')  
    const [time, setTime] = useState('')

    const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']


        const timeButton = async (event) =>{
            setTime(event.target.value)

        }

        const searchButton = async (event) =>{
            const data = await fetchData(value);
            console.log(data)
            setZodiacData(data)

        }

    return(
        <div>
            <h1>Zodiac</h1>
            <nav>
            {signs.map((sign) =>(
                <button>{sign}</button>      
            ))}
                <Button onClick={(event) => searchButton(event)} />
            </nav>
        </div>
    )

}

export default Zodiac