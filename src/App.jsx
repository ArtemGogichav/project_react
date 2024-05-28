import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import To_do from './components/To-do/To_do';
import { useState } from "react"

function App() {
  const [state, setState] = useState()
  const [toDoState, setToDoState] = useState([])
  return (
    <div>
      <Input state={state} setState={setState} setToDoState={setToDoState}></Input>
      <To_do state={state} toDoState={toDoState}></To_do>
    </div>

  )
}

export default App;
