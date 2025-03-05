import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { username, password });
  };

  return (
    <div className="flex items-center justify-center  bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="w-full max-w-md p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg text-white">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Welcome to <span className="text-yellow-300">ChatApp</span>
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="text-lg font-medium text-white">Username</label>
            <div className="flex items-center bg-white/20 rounded-lg mt-2 p-3">
              <FaUser className="text-gray-300 mx-2" />
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent text-lg outline-none border-none text-white placeholder-gray-300"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="text-lg font-medium text-white">Password</label>
            <div className="flex items-center bg-white/20 rounded-lg mt-2 p-3">
              <FaLock className="text-gray-300 mx-2" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-lg outline-none border-none text-white placeholder-gray-300"
                required
              />
            </div>
          </div>

            {/* Register Link */}
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-yellow-300 hover:underline">
              Sign Up
            </Link>
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
          >
            Login
          </button>

          
        </form>
      </div>
    </div>
  );
};

export default Login;
