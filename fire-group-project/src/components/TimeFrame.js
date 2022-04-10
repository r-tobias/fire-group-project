

function TimeFrame({selectTime}){

    const days = ['yesterday','today', 'tomorrow']

    
    return(
        <div>
             Select a time frame
             <nav>
            {days.map((timeframes) =>(
                <button key={timeframes} onClick={()=> selectTime(timeframes)}>{timeframes}</button>      
            ))}
            </nav>
        </div>
    )
}

export default TimeFrame