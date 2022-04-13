
import fetchData from '../services/constants'
import { useState, useEffect} from 'react'
import Button from './Button'
import TimeFrame from './TimeFrame'



function Zodiac(){

    const [selectedSign, setSelectedSign] = useState(null)
    const [timeframe, setTimeFrame] = useState(null)



    return(
        <div>
            <h1>Zodiac</h1>
            <Button handleSelectedSign={setSelectedSign}/>
            
        </div>
    )
}

export default Zodiac