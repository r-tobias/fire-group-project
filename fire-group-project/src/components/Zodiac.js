
// import fetchData from '../services/constants'
import { useState} from 'react'
import Button from './Button'
import TimeFrame from './TimeFrame'
import DailyHoroscope from './DailyHoroscope'



function Zodiac(){

    
    const [selectedSign, setSelectedSign] = useState(null)
    const [timeframe, setTimeFrame] = useState(null)
    return(
        <div className='zodiac-container'>
            <h1>Choose a Zodiac</h1>
            <p>Sign Selected: {selectedSign}</p>
            <p>Day Selected: {timeframe}</p>

            <Button handleSelectedSign={setSelectedSign}/>
            <TimeFrame time={setTimeFrame}/>
            <DailyHoroscope sign={selectedSign}timeframe={timeframe} />
            
        </div>
    )
}

export default Zodiac