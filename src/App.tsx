export default function App() {
  // 참조 자료형 예제
  const referenceArray = [1, 2, 3, 4];
  const referenceObject = { name: "John", age: 30 };
  const referenceFunction = () => "함수의 리턴 값";
  const referenceDate = new Date();
  const referenceRegExp = /react/i;
  const referenceMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  const referenceSet = new Set([1, 2, 3, 4]);

  return (
    <>
      <h2>참조 자료형 출력</h2>
      <p>배열: {referenceArray}</p>
      <p>객체: {JSON.stringify(referenceObject)}</p>
      <p>함수: {referenceFunction.toString()}</p>
      <p>Date 객체: {referenceDate.toString()}</p>
      <p>정규식: {referenceRegExp.toString()}</p>
      <p>Map: {JSON.stringify(Array.from(referenceMap))}</p>
      <p>Set: {JSON.stringify(Array.from(referenceSet))}</p>
    </>
  );
}
