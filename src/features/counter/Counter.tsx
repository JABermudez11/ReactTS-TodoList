import React from 'react';
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { Button } from '@mui/material';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div id="counter">
            <h1>Counter Component</h1>
            <div aria-label="value">
                <span>{count}</span>
            </div>
            <div>
                <Button
                 aria-label='Increment Value'
                 onClick={() => dispatch(increment())}
                 variant="outlined"
                >
                    Increment
                </Button>                
                <Button
                 aria-label='Decrement Value'
                 onClick={() => dispatch(decrement())}
                 variant="outlined"
                >
                    Decrement
                </Button>
            </div>
        </div>
    )
}