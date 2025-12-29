export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return (
    <>
      <button onClick={(e) => handleClick("Hello", e)}>클릭</button>
    </>
  );
}
