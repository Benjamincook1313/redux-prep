import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import IncrementBy from './components/IncrementBy';
import Color from './components/Color';
import Animal from './components/Animal';
import { allAnimals } from './components/async';

function App() {
  const score = useSelector(state => state.score);
  const color = useSelector(state => state.color);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{color: color}}>Redux</h1>
      <span>
        <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
      </span>
      <br />
      <h2>{score}</h2>
      <br />
      <IncrementBy/>
      <br />
      <Color/>
      <br />
      <button onClick={() => dispatch(allAnimals)}>Get Animals</button>
      <Animal />
    </div>
  )
}

export default App
