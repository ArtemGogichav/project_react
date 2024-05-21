function To_do ({arr}){
    console.log(arr[0].name) 
    return arr.map(el =>  (<p>{el.name}</p>))
}
export default To_do