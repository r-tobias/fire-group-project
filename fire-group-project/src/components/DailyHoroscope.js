
import fetchData from "../services/constants"
import { useState, useEffect} from 'react'

export default function DailyHoroscope({sign, timeframe}){

const [horoscope, setHoroscope] = useState('');




useEffect(  ()=>{
   const reading = async() =>{
    const zodiac = await fetchData(sign, timeframe)
        setHoroscope(zodiac)
        console.log(horoscope)
   } 
   reading()

},[sign, timeframe, horoscope])
    

    return(
        <div>
            {horoscope ? <p>Date: {horoscope.current_date}</p> :<p></p>}
            {horoscope ? <p>Date Range: {horoscope.date_range}</p> :<p></p>}
            {horoscope ? <p>Reading: {horoscope.description}</p> :<p></p>}
        <div>
            {/* <h1> Daily Horoscope</h1> */}

        {/* <header>
            <h3>Aries Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2021/04/Aries-Symbol-5.jpg" alt="Aries Logo"/>
            </div>
        </header>

        <header>
            <h3>Taurus Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2021/06/Taurus-Symbol-1.jpg" alt="Taurus Logo"/>
            </div>
        </header>

        <header>
            <h3>Gemini Daily Horoscope</h3>
            <div>
                <img src="https://secure.img1-fg.wfcdn.com/im/31474147/compr-r85/1091/109117989/linhay-gemini-horoscope-symbol-beautiful-solid-steel-wall-sign.jpg" alt="Gemini Logo"/>
            </div>
        </header>

        <header>
            <h3>Cancer Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2020/12/Pisces-Symbol-5.jpg" alt="Cancer Logo"/>
            </div>
        </header>

        <header>
            <h3>Leo Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2021/07/Leo-Symbol-1.jpg" alt="Leo Logo"/>
            </div>
        </header>

        <header>
            <h3>Virgo Daily Horoscope</h3>
            <div>
                <img src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-virgo-bold-400w.png" alt="Virgo Logo"/>
            </div>
        </header>

        <header>
            <h3>Libra Daily Horoscope</h3>
            <div>
                <img src="https://symbolikon.com/wp-content/uploads/edd/2019/09/astrology-libra-bold-400w-280x280.png" alt="Libra Logo"/>
            </div>
        </header>

        <header>
            <h3>Scorpio Daily Horoscope</h3>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Scorpius_symbol_%28bold%29.svg/800px-Scorpius_symbol_%28bold%29.svg.png" alt="Scorpio Logo"/>
            </div>
        </header>

        <header>
            <h3>Sagittarius Daily Horoscope</h3>
            <div>
                <img src="https://w7.pngwing.com/pngs/587/123/png-transparent-computer-icons-sagittarius-symbol-zodiac-horoscope-sagittarius-angle-triangle-monochrome.png" alt="Sagittarius Logo"/>
            </div>
        </header>

        <header>
            <h3>Capricon Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2020/11/Capricorn-Symbol.jpg" alt="Capricon Logo"/>
            </div>
        </header>

        <header>
            <h3>Aquarius Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2020/11/Aquarius-Symbol-4.jpg" alt="Aquarius Logo"/>
            </div>
        </header>

        <header>
            <h3>Pisces Daily Horoscope</h3>
            <div>
                <img src="https://www.pagangrimoire.com/wp-content/uploads/2020/12/Pisces-Symbol-2.jpg" alt="Pisces Logo"/>
            </div>
        </header> */}

           
        </div>
        </div>
    )
}
