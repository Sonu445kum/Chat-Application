import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { useAuthContext } from '../Context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
const {setAuthUser} =useAuthContext();
  const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });

    if (!success) return;

    // Show toast when form validation passes
    toast.success("Form filled correctly! Submitting...", { position: "top-right" });

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      toast.success(data.message || "Signup successful!", { position: "top-right" });
      //localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message || "Something went wrong", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields", { position: "top-right" });
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match", { position: "top-right" });
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long", { position: "top-right" });
    return false;
  }

  return true; // Validation passed
}
