export default function Button() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(message);
    console.log(event);
  };
  const handleClick2 = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={(event) => handleClick("click", event)}>클릭</button>
      <button onClick={handleClick2}>클릭</button>
    </>
  );
}
