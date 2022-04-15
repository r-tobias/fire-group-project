function TimeFrame({time}){
   
    
    return(
        <div className="timeframes-container">
             <h1>Choose a Time Frame</h1><br/>
            {['yesterday','today', 'tomorrow'].map((timeframes) =>(
                <button className={timeframes} key={timeframes} onClick={()=> time(timeframes)}>{timeframes}</button>      
            ))}
        
        </div>
    )
}

export default TimeFrame