import { useState } from "react"

function Input({arr}){
    const [state, setState] = useState()
    
    return( 
    <>
    <input onChange={(e)=>{setState(e.target.value)}} type="text" id="input"></input>
    <button onClick={()=>{addEvent}}>add</button>
    </>)
}
export default Input