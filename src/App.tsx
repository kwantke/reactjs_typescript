import { useState } from "react";
import ChildA from "./components/child/ChildA";

export default function App() {
  const [count, setCount] = useState(0);
  console.log("App");
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <ChildA />
    </>
  );
}
