import React from "react";
import { BiLogOut } from "react-icons/bi"; // Correct import

const Logout = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer hover:text-red-500 transition duration-300" />
    </div>
  );
};

export default Logout;
