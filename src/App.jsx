import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import To_do from './components/To-do/To_do';

function App() {
  return (
    <div>
      <Input></Input>
      <To_do arr={mass}></To_do>
    </div>

  )
}
let mass = [
  {id:1, name: 'Убрать дома', done: false},
  {id:2, name: 'Сделать дз', done: false},
  {id:3, name: 'Помыть посуду', done: false},
]

export default App;
