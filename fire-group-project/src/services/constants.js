import axios from 'axios'



async function fetchData(input,day){
    const DEFAULT_URL = `https://aztro.sameerkumar.website/?sign=aries&day=today`
    const BASE_URL= `https://aztro.sameerkumar.website?sign=${input}&day=${day}`

 try{
        
        let response  = await axios.post(`${DEFAULT_URL}`)
        let result = response.data
        console.log(result)
        return result   
  
}
    catch (error) {
        console.log(error)
    }  

}



export default fetchData