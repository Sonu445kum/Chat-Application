import React from "react";
import { BiLogOut } from "react-icons/bi"; // Correct import
import useLogout from "../../Hooks/useLogout";

const Logout = () => {
    const { loading, logout } = useLogout();

    return (
      <div className="mt-auto">
        {!loading ? (
          <BiLogOut 
          onClick={() => {
            console.log("Logout button clicked");
            logout();
          }}   // Ensure function is called correctly
            className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition duration-300"
          />
        ) : (
          <span className="loading loading-spinner text-white"></span>
        )}
      </div>
    );
};

export default Logout;
