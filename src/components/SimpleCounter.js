import React, { useState } from "react";

function SimpleCounter() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
    /**Learning:  even if this code above is repeated multiple times, the counter will increase only by 1.*/
  };
  const decrementCount = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <p>Simple Counter</p>
      <div className="counter-count">{counter}</div>
      <button className="btn plus" onClick={() => incrementCount()}>
        +
      </button>
      <button className="btn minus" onClick={() => decrementCount()}>
        -
      </button>
    </div>
  );
}

export default SimpleCounter;
