import React from "react";
import ChildB from "./ChildB";

export default React.memo(function ChildA() {
  console.log("ChildA");
  return (
    <>
      <h1>ChildA Component</h1>
      <ChildB />
    </>
  );
});
