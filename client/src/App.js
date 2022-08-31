import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase } from './redux/taskSlice';
import {useEffect} from "react"

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  useEffect(()=> {

  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      Çalışıyorr
      <h1>{count}</h1>
      <h1><button onClick={()=>dispatch(increase())}>Increase</button></h1>
    </div>
  );
}

export default App;
