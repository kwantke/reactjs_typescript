import React from "react";
import ChildB from "./ChildB";

export default React.memo(function ChildA({ count }: { count: number }) {
  console.log("ChildA");
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA Component: {count}</h1>
      {/* <button onClick={() => setCount((count) => count + 1)}>증가</button> */}
      <ChildB />
    </>
  );
});
