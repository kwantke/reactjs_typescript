import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount를 여러번 작성해도 +1씩 증가한다.
    // (React는 배치 형태로 한꺼번에 모아서 처리하기때문)
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // 함수형을 사용하면 (배치에 영향받지 않고) 항상 최신값 기준으로 업데이트
    setCount((count) => count + 1); 
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
