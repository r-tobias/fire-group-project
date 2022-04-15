
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
            <div className='sign-container'>
            <h1>Choose a Zodiac</h1>
            {/* <p>Sign Selected: {selectedSign}</p> */}
            <Button handleSelectedSign={setSelectedSign}/>
            </div>
            {/* {selectedSign ?<p>Day Selected: {timeframe}</p> :<p></p>} */}
            <div className='timeframe-result-container'>
            <div className='timeframe-container'>
            {<TimeFrame time={setTimeFrame}/>}
            </div>
            <div className='result-container'>

            <DailyHoroscope sign={selectedSign}timeframe={timeframe} />
            </div>

            </div>
        </div>
    )
}

export default Zodiac