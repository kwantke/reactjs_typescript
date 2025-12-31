import React from "react";
import ChildB from "./ChildB";

export default React.memo(function ChildA({
  increment,
}: {
  increment: () => void;
}) {
  console.log("ChildA");
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA Component</h1>
      <button onClick={increment}>증가</button>
      <ChildB />
    </>
  );
});
