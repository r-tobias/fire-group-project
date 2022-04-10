import { useState, useEffect} from 'react'
import sign from './Button'
function TimeFrame(){
   
    const [timeframe, setTimeFrame] = useState(null)
    const days = ['yesterday','today', 'tomorrow']
    
    return(
        <div>

             Select a time frame<br/>
             {timeframe}
             <nav>
            {days.map((timeframes) =>(
                <button key={timeframes} onClick={()=> setTimeFrame(timeframes)}>{timeframes}</button>      
            ))}
            </nav>
        </div>
    )
}

export default TimeFrame