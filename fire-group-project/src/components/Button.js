import TimeFrame from "./TimeFrame"
import { useState, useEffect} from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import { getSigns } from '../services/constants'


function Button({handleSelectedSign}){

    const [signs, setSigns] = useState([])  
    // const sign = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']
   
    useEffect(()=>{
        getSigns().then(setSigns)
    },[])

    return(
        <div>
          
            
            <nav>
            {signs.map((sign) =>(
                <button to='/time' key={sign} onClick={()=> handleSelectedSign(sign)}>{sign}<br/></button>      
            ))}
            </nav>

        </div>

    )

}

export default Button