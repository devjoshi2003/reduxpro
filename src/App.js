import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { btn } from './counter/counterslice';

function App() {

  const dispatch = useDispatch();
  const sname = useSelector((s)=>s.counter.name);
  console.log(sname)

  return (
    <div className="App">
      <h3>Name = {sname}</h3>
      <button onClick={()=>dispatch(btn('ram  '))}>change name</button>
    </div>
  );
}

export default App;
