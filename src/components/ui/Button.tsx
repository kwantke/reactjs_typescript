export default function Button() {
  const handleClick = () => alert("click!");
  return (
    <>
      <button onClick={() => alert("click")}>클릭</button>
      <button onClick={handleClick}>클릭2</button>{/*매개변수가 없을경우 */}
      <button onClick={() => handleClick()}>클릭3</button>{/*매개변수가 있을경우 */}
    </>
  );
}
