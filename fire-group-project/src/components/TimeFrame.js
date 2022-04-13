function TimeFrame({time}){
   
    
    return(
        <div>

             Select a time frame<br/>
            
            {['yesterday','today', 'tomorrow'].map((timeframes) =>(
                <button key={timeframes} onClick={()=> time(timeframes)}>{timeframes}</button>      
            ))}
        
        </div>
    )
}

export default TimeFrame