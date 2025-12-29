import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(message);
    console.log(event);
  };
  return (
    <>
      <Button handleClick={handleClick}></Button>
    </>
  );
}
