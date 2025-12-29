export default function Button() {
  const handleClick = (value: string) => alert(value);
  return (
    <>
      <button onClick={() => handleClick("Hello")}>button</button>
      <button onClick={() => alert("world")}>button</button>
    </>
  );
}
