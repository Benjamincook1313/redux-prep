import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Color() {

  const dispatch = useDispatch();
  const color = useSelector(state => state.color);

  const handleFaveColor = (e) => {
    e.preventDefault();
    const payload = e.target.color.value;
    dispatch({type: "UPDATE_COLOR", payload});
    e.target.color.value = "";
  }

  return (
  <form style={{color}} onSubmit={handleFaveColor}>
    <label htmlFor="color">favorite Color: </label>
    <input type="text" id='color'/>
    <button>save</button>
  </form>
  )
}
