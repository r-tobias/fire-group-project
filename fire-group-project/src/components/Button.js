import TimeFrame from "./TimeFrame"
import { useState, useEffect} from 'react'


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
                <button to='/time' key={sign} onClick={()=> handleSelectedSign(sign)}>{sign}<br/></button>      
            ))}
            </nav>
           

        </div>

    )

}

export default Button