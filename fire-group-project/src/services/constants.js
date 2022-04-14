import axios from 'axios'

export const getSigns = async () => {
    return await axios.get("http://sandipbgt.com/theastrologer/api/sunsigns/").then((response) => response.data)
  }


async function fetchData(sign, timeframe){
    const DEFAULT_URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`

    const BASE_URL= `https://aztro.sameerkumar.website?sign=`

  

    try{
        const response = await axios.post(DEFAULT_URL)
        console.log(response.data.description);
        
        return response.data
    
    }
    catch (error) {
        console.log(error)
    }  

}

export default fetchData