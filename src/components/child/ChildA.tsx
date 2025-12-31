import React from "react";


export default React.memo(function ChildA() {
  console.log("ChildA");
  // const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA Component</h1>
    </>
  );
});
