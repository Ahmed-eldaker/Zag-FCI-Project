import React, { useState } from "react";

export function Counter() {
  const [state, setState] = useState({ count: 0, name: "ahmed" });
  const increment = () => setState({ ...state, count: state.count + 1 });

  return (
    <>
      <h2>Name :{state.name}</h2>
      <h1>Count :{state.count}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}
