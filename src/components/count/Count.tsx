import { useReducer } from "react";
import countReducer from "../../reducer/countReducer";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";



export default function Count() {
  const [count, countDispatch] = useReducer(countReducer, 0);
  return (
    <>
      <CountDisplay count={count} />
      <CountButton countDispatch={countDispatch}
      />
    </>
  );
}
