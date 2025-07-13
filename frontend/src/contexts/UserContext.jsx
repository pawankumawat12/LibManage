import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      AlternateNumber: "",
      Address: "",
      Location: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User context updated:", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
