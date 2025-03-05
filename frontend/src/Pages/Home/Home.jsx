import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MessageContainer from "../../Components/Message/MessageContainer";

const Home = () => {
  return (
    <div
      className="flex sm:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Chat / Message Area */}
      <MessageContainer/>
    </div>
  );
};

export default Home;
