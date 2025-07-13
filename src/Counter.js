import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Increase </button>
      <button onClick={() => setCount(count -1)}> Decrease</button>
       <button onClick={() => setCount(0)}> reset</button>
    </div>
  );
}

export default Counter;
