import React from 'react';
import './Counter.css';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from './action';

const Counter = () =>{
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch();

    return (
        <div className='counter-container'>
            <h2>Count: {count}</h2>
            <div className='button-group'>
                <button onClick={()=> dispatch(increment())}>INCREMENT</button>
                <button onClick={()=> dispatch(decrement())}>DECREMENT</button>
                <button onClick={()=> dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}
export default Counter;

