import { useState } from "react";

const LoginHook = () => {
  const [isLoading, setIsLoading] = useState(false);

  const authLogin = async (loginData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);

      return { success: true, message: "Login successful" };
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, authLogin };
};

export default LoginHook;
