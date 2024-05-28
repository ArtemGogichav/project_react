function To_do ({toDoState}){
    return toDoState.map((el, i) =>  {
        return(
            <>
                <p key={i}>{el}</p>
                <button onClick={()=>{toDoState.splice(i, 1); toDoState.map(el)}}>delete</button>
            </>)})
}
export default To_do