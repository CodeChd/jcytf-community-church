import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { API_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({name : "Bras"});
  const [error, setError] = useState(null);

  //reguser
  const register = async (user) => {
    console.log(user);
  };

  //loguser
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  //logout
  const logout = async (user) => {
    console.log("Logout");
  };

  //if login
  const checkUserLoggedIn = async (user) => {
    console.log("Check");
  };

  return (
    <AuthContext.Provider value={{ user,error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;
