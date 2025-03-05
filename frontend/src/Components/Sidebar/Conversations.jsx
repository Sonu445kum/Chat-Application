import React from "react";
import Conversation from "./Conversation";

const conversationsData = [
  { name: "Sonu Kumar", avatar: "https://randomuser.me/api/portraits/men/1.jpg", lastMessage: "😘" },
  { name: "Priya Sharma", avatar: "https://randomuser.me/api/portraits/women/2.jpg", lastMessage: "Hey! 😊" },
  { name: "Amit Verma", avatar: "https://randomuser.me/api/portraits/men/3.jpg", lastMessage: "Let's meet!" },
  { name: "Sneha Gupta", avatar: "https://randomuser.me/api/portraits/women/4.jpg", lastMessage: "Call me 📞" },
  { name: "Rahul Singh", avatar: "https://randomuser.me/api/portraits/men/5.jpg", lastMessage: "😂😂😂" },
];

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversationsData.map((user, index) => (
        <Conversation 
          key={index} 
          name={user.name} 
          avatar={user.avatar} 
          lastMessage={user.lastMessage} 
        />
      ))}
    </div>
  );
};

export default Conversations;
