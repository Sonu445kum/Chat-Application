import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify"; // Corrected import

const useLogout = () => {  // Removed async here
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext(); // Ensure this is defined

    const logout = async () => {
        console.log("Logout function called");
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            console.log("Response data:", data);
            if (data.error) {
                throw new Error(data.error);
            }

            // Remove user from localStorage and update context
            localStorage.removeItem("chat-user");
            setAuthUser(null);

            // Show success message
            toast.success("Logged out successfully!");

        } catch (error) {
            toast.error(error.message); // Fixed toast usage
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
