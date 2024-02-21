import { useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
} from './counterslice.ts';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { Button } from 'semantic-ui-react';


export function Counter() {
  const {data} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div style={{ display:"flex", width: "75%", justifyContent: "space-around", marginInline: "auto" }}>
        <Button
          color='green'
          content='Increment'
          label="+"
          labelPosition='right'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        />
        
        <span style={{ fontSize: "1.8rem" }}>{data}</span>

        <Button
          color='orange'
          content="Decrement"
          label="-"
          labelPosition='right'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        />
       
      </div>
      <div style={{ display: "flex", flexDirection:"column", width: "25%", justifyContent: "space-around", marginInline: "auto", marginBlock: "2rem" }}>
        <input
          style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button
          color='teal'
          content='increment by amount'
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        />
       
      </div>
    </div>
  );
}