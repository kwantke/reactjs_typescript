import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (message: string) => alert(message);
  return (
    <>
      <Button handleClick={handleClick} message={"Playing"}>
        Play Movie
      </Button>
      <Button
        handleClick={(message: string) => alert(message)}
        message={"Uploading!"}
      >
        Uploading Image
      </Button>
    </>
  );
}
