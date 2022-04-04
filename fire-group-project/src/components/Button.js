function Button({onClick, onChange}){

    return(
        <div>

        <input type="text" placeholder="Enter Horoscope" onChange={onChange}/>
        <button type="submit" onClick={onClick} >Search</button>

        </div>
    )

}

export default Button