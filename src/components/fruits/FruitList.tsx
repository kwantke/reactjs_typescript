import { useState } from "react";

export default function FruitList() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);
  const handleAddItem = () => {
    setItems((items) => [...items, "포도"]);
  };

  const isGrapeAdded = items.includes("포도");
  return (
    <>
      <h1>FruitList Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem} disabled={isGrapeAdded}>
        과일 추가
      </button>
    </>
  );
}
