import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function IncrementBy() {
  const dispatch = useDispatch();

  const color = useSelector(state => state.color);

  const handleIncrementBy = (e) => {
    e.preventDefault();
    const payload = e.target.incrementBy.value;
    dispatch({type: "INCREMENT_BY", payload});
    e.target.incrementBy.value = "";
  };

  return (
    <form style={{color}} onSubmit={handleIncrementBy}>
        <label htmlFor="incrementBy">increment by: </label>
        <input type="number" id="incrementBy"/>
        <button>submit</button>
      </form>
  )
}
