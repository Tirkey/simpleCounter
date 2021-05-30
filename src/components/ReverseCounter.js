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
