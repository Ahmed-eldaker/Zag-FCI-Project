import React, { useEffect, useState } from "react";

export function Counter() {
  const [timer, setTimer] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const increment1 = () => setCount1(count1 + 1);

  // const [count2, setCount2] = useState(0);
  // const increment2 = () => setCount2(count2 + 1);
  // clearInterval;
  useEffect(() => {
    const incrementTimer = () => {
      // setTimer(timer + 1);
    };
    const interval = setInterval(incrementTimer, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  // useEffect(() => {
  //   console.log("useEffect");
  // });
  console.log("render");

  return (
    <>
      <h1>Timer:{timer}</h1>
      {/* <button onClick={() => setTimer(timer + 1)}>+</button> */}
      {/* <h1>Count :{count1}</h1>
      <button onClick={increment1}>+</button>
      <h1>Count :{count2}</h1>
      <button onClick={increment2}>+</button> */}
    </>
  );
}
