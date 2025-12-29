import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.innerText = message;
  };
  return (
    <>
      <Button handleClick={handleClick}></Button>
    </>
  );
}
