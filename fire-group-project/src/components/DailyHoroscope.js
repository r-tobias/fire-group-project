import fetchData from "../services/constants"
import { useState, useEffect} from 'react'

function DailyHoroscope({sign, timeframe}){

const [horoscope, setHoroscope] = useState('');





useEffect(  ()=>{
   const reading = async() =>{
    const zodiac = await fetchData(sign, timeframe)
        setHoroscope(zodiac)
        console.log(horoscope)
   } 
   reading()

},[sign, timeframe])
    

    return(
        <div>
            {horoscope ? <p>reading: {horoscope.description}</p> :<p></p>}

            {horoscope ? <p>date range: {horoscope.date_range}</p> :<p></p>}
        </div>
    )

}

export default DailyHoroscope