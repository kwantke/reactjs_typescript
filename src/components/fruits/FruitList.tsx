import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function FruitList() {
  const items = ["사과", "바나나", "오렌지"];
  const [fruits, setfFruits] = useState(() =>
    items.map((item) => ({ id: uuidv4(), value: item }))
  );
  const handleAddItem = () => {
    setfFruits((fruits) => [{ id: uuidv4(), value: "grape" }, ...fruits]);
  };

  const isGrapeAdded = fruits.some((fruit) => fruit.value === "grape");
  return (
    <>
      <h1>FruitList Component</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {/* {fruit.value} */}
            <input type="text" placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem} disabled={isGrapeAdded}>
        과일 추가
      </button>
    </>
  );
}
