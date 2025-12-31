import { useState } from "react";
import ChildC from "./ChildC";

export default function ChildB() {
  console.log("ChildB");
  const [shouldThrow] = useState(() => Math.random() < 0.5); // Math.random(): 0 이상 1 미만
  if (shouldThrow) {
    throw new Error("random number is 1");
  }
  return (
    <>
      <h1>ChildB Component</h1>
      <ChildC />
    </>
  );
}
