import React from 'react';
import { useLogin } from "./context/LoginContext";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  return (
    <div>
      <p>{isLoggedIn ? "Hello Cláudio" : "Please Login"}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default App;
