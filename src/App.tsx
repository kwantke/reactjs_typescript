import { useReducer } from "react";
import countReducer from "./reducer/countReducer";

export default function App() {
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>리셋</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}
