import PrintValue from "./components/PrintValue";

export default function App() {
  const numberValue = 42;
  const stringValue = "Hello World";
  const booleanValue = true;
  const arrayValue = [1, 2, 3, 4];
  const objectValue = { name: "John Doe", age: 30 };
  const handleClick = () => alert("버튼이 클릭되었습니다!");

  return (
    <>
      <PrintValue
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />
    </>
  );
}
