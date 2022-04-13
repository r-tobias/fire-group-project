
import fetchData from '../services/constants'
import { useState, useEffect} from 'react'
import Button from './Button'
import TimeFrame from './TimeFrame'
import DailyHoroscope from './DailyHoroscope'



function Zodiac(){

    
    const [selectedSign, setSelectedSign] = useState(null)
    const [timeframe, setTimeFrame] = useState(null)

    return(
        <div>
            <h1>Zodiac</h1>
            Sign Selected: {selectedSign}<br/>
            Day Selected: {timeframe}


            <Button handleSelectedSign={setSelectedSign}/>
            <TimeFrame time={setTimeFrame}/>
            <DailyHoroscope sign={selectedSign}timeframe={timeframe} />
            
        </div>
    )
}

export default Zodiac