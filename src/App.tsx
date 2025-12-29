import { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const handleAddFruit = () => {
    //setFruits((fruits) => ["melon", ...fruits]);
    // setFruits((fruits) =>
    //   fruits.map((fruit) => (fruit === "apple" ? "grape" : fruit))
    // );
    //...fruits.slice(0, 1) : 배열 fruits의 0번 인덱스부터 1개를 잘라서
    setFruits((fruits) => [...fruits.slice(0, 1), "grape", ...fruits.slice(1)]);
  };
  return (
    <>
      <p>{fruits.join(", ")}</p>
      <button onClick={handleAddFruit}>Add Fruit</button>
    </>
  );
}
