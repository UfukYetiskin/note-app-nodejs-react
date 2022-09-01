import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase } from './redux/taskSlice';
import {useEffect} from "react"
import styled from "styled-components"
import Task from './components/Task';

const App = () => {
  const count = useSelector(state => state.tasks.count);
  const dispatch = useDispatch();

  const items = useSelector(state => state.tasks.items)

  useEffect(()=> {

  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header">
      Çalışıyorra
      <h1>{count}</h1>
      <h1><button onClick={()=>dispatch(increase())}>Increase</button></h1>
      <div>
        {items && items.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h1>{item.text}</h1>
          </div>
        ))}
      </div>
      
      </header>
      <Task></Task>
      
    </div>
  );
}

export default App;
