function InputBox({value,onChange}){
    return(
        <input type="text"
         placeholder = "type something here...."
         value={value} 
         onChange={(e) => onChange(e.target.value)}/>
    )
}

export default InputBox;