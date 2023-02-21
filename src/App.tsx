import React from 'react';
import {useAmount, useAmountActions} from "./store/useStore";

function App() {
  const amount = useAmount();
  const {increment , decrement} = useAmountActions();

  return (
    <div>
      <h1>{amount}</h1>
        <button onClick={increment}>추가</button>
        <button onClick={decrement}>추가</button>
    </div>
  );
}

export default App;
