import { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
  });
  const handleUpdateUserInfo = () => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      name: "Mike",
    }));
    // 또는
    setUserInfo({
      name: "Mike",
      age: 30,
      gender: "female",
    });
  };
  return (
    <>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
    </>
  );
}
