import { useState } from "react";
import LoginStatus from "./components/login/LoginStatus";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogIn = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  return (
    <>
      <LoginStatus
        isLoggedIn={isLoggedIn}
        handleLogIn={handleLogIn}
        handleLogout={handleLogout}
      />
    </>
  );
}
