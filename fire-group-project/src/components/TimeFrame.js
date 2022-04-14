function TimeFrame({time}){
   
    
    return(
        <div>
             <p>Select a time frame</p><br/>
            {['yesterday','today', 'tomorrow'].map((timeframes) =>(
                <button key={timeframes} onClick={()=> time(timeframes)}>{timeframes}</button>      
            ))}
        
        </div>
    )
}

export default TimeFrame