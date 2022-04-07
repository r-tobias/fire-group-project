import axios from 'axios'



async function fetchData(sign, timeframe){
    const DEFAULT_URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`
    const BASE_URL= `https://aztro.sameerkumar.website?sign=`
    // &day=${day}

    // const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']

    try{
        const response = await axios.post(DEFAULT_URL)
        console.log(response);
    
    }
    catch (error) {
        console.log(error)
    }  

}

export default fetchData