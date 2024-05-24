import './App.css';
import { incFunc,decFunc } from './redux/actions';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Product Storage</h1><hr/>
      <h2>Product's Quantity: {count}</h2>
      <button onClick={()=>{dispatch(incFunc())}} className='btn btn-success'>Bye</button>
      <button onClick={()=>{dispatch(decFunc())}} className='btn btn-danger'>Sell</button>
    </div>
  );
}

export default App;
