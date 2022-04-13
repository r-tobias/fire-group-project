import TimeFrame from "./TimeFrame"
import { useState, useEffect} from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import { getSigns } from '../services/constants'


function Button({handleSelectedSign}){

    const [signs, setSigns] = useState([])  
   
    useEffect(()=>{
        getSigns().then(setSigns)
    },[])

    return(
        <div>
          
            
            <nav>
            {signs.map((sign) =>(
                <button className="sign" to='/time' key={sign} onClick={()=> handleSelectedSign(sign)}>{sign}<br/></button>      
            ))}
            </nav>

        </div>

    )

}

export default Button