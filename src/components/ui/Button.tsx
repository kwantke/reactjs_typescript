export default function Button({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) {
  const handleClick = () => alert(message);
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
