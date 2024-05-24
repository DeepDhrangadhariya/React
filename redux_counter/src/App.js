import './App.css';
import { inFunc,decFunc } from './redux/actions';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter</h1><hr/>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch(inFunc())}}>Plus</button>
      <button onClick={()=>{dispatch(decFunc())}}>Minus</button>
    </div>
  );
}

export default App;
