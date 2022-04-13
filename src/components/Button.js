import TimeFrame from "./TimeFrame"
import { useState, useEffect} from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'

function Button({handleSelectedSign}){

    const [signs, setSigns] = useState([])  
    const sign = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']
   
    useEffect(()=>{
        setSigns(sign)
    },[])



    return(
        <div>
          
            <nav>
            {signs.map((sign) =>(
                <NavLink to='/time' key={sign} onClick={()=> handleSelectedSign(sign)}>{sign}<br/></NavLink>      
            ))}
            </nav>
           

        </div>

    )

}

export default Button