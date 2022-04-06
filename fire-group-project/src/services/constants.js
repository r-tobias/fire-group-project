import axios from 'axios'



async function fetchData(input, day){
    const DEFAULT_URL = `https://aztro.sameerkumar.website/?sign=aries&day=today`
    const BASE_URL= `https://aztro.sameerkumar.website?sign=${input}`
    // &day=${day}

 try{
        
    if(!input){
        let response  = await axios.post(`${DEFAULT_URL}`)
        let result = response
        console.log(result)
        return result   
    }
    else{
     let response  = await axios.post(`${BASE_URL}`) 
       let result = response.data
       return result   
    }
    
}
    catch (error) {
        console.log(error)
    }  

}

export default fetchData