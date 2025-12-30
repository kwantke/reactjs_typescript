
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function CountOutside() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <>
      <h1>CountOutside: {count}</h1>
    </>
  );
}
