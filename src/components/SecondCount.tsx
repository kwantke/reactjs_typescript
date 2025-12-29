export default function SecondCount({
  count,
  handleIncrement,
}: {
  count: number;
  handleIncrement: () => void;
}) {
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
