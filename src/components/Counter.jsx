import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/counterSlice';

function Counter() {
    let data = useSelector(state=> state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <div>{data}</div>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter