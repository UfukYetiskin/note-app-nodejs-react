import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, removeNote } from './redux/taskSlice';
import {useEffect} from "react"
import styled from "styled-components"
import Task from './components/Task';

const App = () => {
  const count = useSelector(state => state.tasks.count);
  const dispatch = useDispatch();

  const items = useSelector(state => state.tasks.items)

  useEffect(()=> {

  }, [dispatch])

  const Header = styled.h1`
    color : white;

  `
  const Ul = styled.ul`
    text-align : start;
    margin : 2%;
  `
  const Li  = styled.li`
    list-style-type : none;
    color : white;
    padding : 2%;
    width : 90%;
    border : 1px solid white;
    margin-bottom : 2%;
    border-radius  : 10px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
  `

  return (
    <div className="App">
      <header className="App-header">
      {/* Çalışıyorra
      <h1>{count}</h1>
      <h1><button onClick={()=>dispatch(increase())}>Increase</button></h1> */}
        <Header>
          <i>Note App</i>
        </Header>
      
      </header>
      <Task className="task"></Task>
      <Ul>
        {items && items.map(item => (
          <Li key={item.id}>
            <div style={{width : "90%"}}>
              <h2>{item.title}</h2>
              <hr></hr>
              <h3>{item.text}</h3>
            </div>
            <div style={{width : "5%", margin : "auto 0"}}>
              <button onClick={() => dispatch(removeNote(item.id))}>X</button>
            </div>
          </Li>
        ))}
      </Ul>
      
    </div>
  );
}

export default App;
