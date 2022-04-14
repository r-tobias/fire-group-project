import logo from "../images/Calendar.png"

function History(){

    return(
        <div className="history">
            <div className="imageDiv">
            <img className="image" src={logo} alt="horoscope"/>
            </div>
            <div className="textDiv">
            <h1>Horoscopia: noun</h1>
            <h3>/ˈhôrəˌskōpia/</h3>
            <h6>noun: horoscope</h6>
            <p>A concatenation of the words Horoscope and Utopia.</p>
            <p>Take a peek into a forecast of your future. Know how your starts align. Arm yourself with knowledge.</p>
            <p>For to ...<em>“To know thyself is the beginning of wisdom.”</em></p>
            <p>Socrates,<b>469-399 B.C.</b></p>     
            </div>
        </div>
    )

}

export default History