import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={increment} className="Button">Increment</button>
      <button onClick={reset} className="Button">Reset</button>
    </div>
  );
}

export default Counter;
