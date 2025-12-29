import { useState } from "react";

export default function App() {
  const [name, setName] = useState<string>("Jack");
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<"male" | "female">("male");

  const handleUpdateProfile = () => {
    setName("Mike");
    setAge(30);
    setGender("female");
  };
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </>
  );
}
