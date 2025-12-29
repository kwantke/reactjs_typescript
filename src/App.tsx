import { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
    contact: {
      email: "jack@example.com",
      phone: "123-456-7890",
    },
    address: {
      home: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001",
      },
      office: {
        street: "456 Business Ave",
        city: "New York",
        zipCode: "10002",
      },
    },
  });

  const handleUpdateUserInfo = () => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      name: "mike",
      contact: {
        ...userInfo.contact,
        email: "sucoding@naver.com",
      },
      address: {
        ...userInfo.address,
        office: {
          ...userInfo.address.office,
          street: "123 Ave",
        },
      },
    }));
  };

  return (
    <>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
    </>
  );
}
