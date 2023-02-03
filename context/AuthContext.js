import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import { NEXT_URL } from "@/config/index";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  //reguser
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setUser(data);
      toast.success("Successfully Registered")
      setTimeout(() =>{
        router.push("/account/dashboard");

      },2800)
    } else {
      toast.error(data.message); //temporary
    }
  };

  //loguser
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });

    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) { 
      setUser(data);
      router.push("/account/dashboard");
    } else {
      toast.error(data.message); //temporary
    }
  };

  //logout
  const logout = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      //terminate cookie to logout
      setUser(null);
      router.push("/");
    }
  };

  //if login
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
