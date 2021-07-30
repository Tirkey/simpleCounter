import React, { useState, useEffect } from "react";

function ReverseCounter() {
  const [rcounter, setRcounter] = useState(10);

  const stopwatch = () => {
    if (rcounter === 0) return;
    setRcounter(rcounter - 1);
  };

  useEffect(() => {
    console.log("This is called post DOM render.");
    setTimeout(stopwatch, 1000);
  });

  return (
    <div>
      <p>Reverse Counter</p>
      {rcounter}
    </div>
  );
}

export default ReverseCounter;

/*
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  // setTimeout(() => {
  //   console.log("Hello");
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }, 2000);

  useEffect(() => {
    if (!count) {
      setCount(10);
    }
    let interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);
  return <div>::{count}::</div>;
};

export default Counter;

*/
