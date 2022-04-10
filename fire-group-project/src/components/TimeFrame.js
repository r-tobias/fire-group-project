import { useState, useEffect} from 'react'
import sign from './Button'
function TimeFrame({time}){
   
    const days = ['yesterday','today', 'tomorrow']
    
    return(
        <div>

             Select a time frame<br/>
            
            {days.map((timeframes) =>(
                <button key={timeframes} onClick={()=> time(timeframes)}>{timeframes}</button>      
            ))}
        
        </div>
    )
}

export default TimeFrame