import React, { createContext, useState, useContext } from "react";

interface ILoginContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<boolean>;
}

interface IContextProvider {
  children: React.ReactNode;
}

export const LoginContext = createContext({} as ILoginContext);

export default function LoginProvider({ children }: IContextProvider) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>;
}

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used within an LoginProvider.");
  const { isLoggedIn, setIsLoggedIn } = context;

  return { isLoggedIn, setIsLoggedIn };
}
