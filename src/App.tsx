export default function App() {
  const fruits = ["apple", "banana", "orange"];
  return (
    <>
      <p>Fruits Lists</p>
      <ul>
        {fruits.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
