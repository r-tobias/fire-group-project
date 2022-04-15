import avatar from '../images/avatar.png'

function AboutUs(){

    return(
        <div className="aboutUs">
            <img className="avatar" src={avatar} alt="avatar"/>
        <div className="thisIsUs">
        {/* <h2>About Us: </h2> */}
        <h1>Rebecca, Charlton, Demmy and Anne</h1>
        <p>The greatest team known alive has come together to create a website that reveals your horoscope using Aztro (a horoscope API)</p>
        </div>
        <hr className="hr"></hr>
        <div className="ourSite">
        <h2>About Horoscopia!</h2>
        <p>Our Horoscope Website is designed to tell you your daily horoscope needs. Missed a day? Not to worry as we will have all horoscope readings saved for past (yesterday), present (today), and future (tomorrow). Need to know your crushes horoscope? Do not fret my little stalker, we have added filtering out specific horoscopes so you can check them all and no one will judge. 😉</p>
        </div>
        </div>
    )
}

export default AboutUs