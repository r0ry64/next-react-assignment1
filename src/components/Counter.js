"use client";

import { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <br></br>
      <h2>Counter: {count}</h2>
      <br></br>
      <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="button" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;