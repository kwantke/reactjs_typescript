import { useDispatch } from "react-redux";
import {
  decrement,
  incrementAsync,
  reset,
} from "../../store/features/counter/counterSlice";
import type { AppDispatch } from "../../store/store";

export default function CountButton() {
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      {/* <button onClick={() => dispatch(increment(5))}>증가</button> */}
      {/* <button onClick={() => dispatch(increment({ num1: 5, num2: 3 }))}> */}
      <button onClick={() => dispatch(incrementAsync(10))}>증가</button>
    </>
  );
}
