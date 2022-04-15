import Calendar from "../images/Calendar.png"

function History(){

    return(
        <div className="history">
            <div className="imageDiv">
            <img className="zodiacImage" src={Calendar} alt="horoscope"/>
            </div>
            <div className="textDiv">
            <h1>Horoscopia: noun</h1>
            <hr></hr>
            <h3>/ˈhôrəˌskōpia/</h3>
            {/* <h6>noun: horoscope</h6> */}
            <p>A concatenation of the words Horoscope and Utopia.</p>
            <p>Take a peek into a forecast of your future. Know how your starts align. Arm yourself with knowledge.</p>
            <p>For... <em><b>“To know thyself is the beginning of wisdom.”</b></em></p>
            <p><b>Socrates</b> 469-399 B.C.</p>  

            <h1>History</h1>
            <hr></hr>
            <p>Astrology originated in Mesopotamia (c. 3rd millennium BC) and spread to India, but it developed its Western form in Greek civilization during the Hellenistic period. Astrology entered Islamic culture as part of the Greek tradition and was returned to European culture through Arabic learning during the Middle Ages.</p>



            </div>
        </div>
    )

}

export default History