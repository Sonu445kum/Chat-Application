import React from 'react';
import { BsSend } from 'react-icons/bs'; // ✅ Correct import

const MessageInput = () => {
  return (
    <form className="px-4 my-3 relative">
      <div className="w-full relative">
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-3 flex items-center text-white hover:text-blue-400"
        >
          <BsSend className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
