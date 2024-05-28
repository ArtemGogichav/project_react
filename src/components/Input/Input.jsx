
function Input({setState, state, setToDoState}){

    
    return( 
    <>
    <input onChange={(e)=>{setState(e.target.value)}} type="text" id="input"  value={state}></input>
    <button onClick={()=>{setToDoState(prev => [...prev, state])
        setState('')
    }}>add</button>
    </>)
}
export default Input