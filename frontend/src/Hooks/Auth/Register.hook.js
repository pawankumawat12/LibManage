import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authRegister = async (adminData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminData),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Something went wrong");

      toast.success("User registered successfully!");
      navigate("/Library/login");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, authRegister };
};

export default AuthHook;
