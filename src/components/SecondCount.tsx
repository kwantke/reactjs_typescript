import { type Dispatch, type SetStateAction } from "react";

export default function SecondCount({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) {

  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  );
}
