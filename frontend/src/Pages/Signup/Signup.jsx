import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";
import { ToastContainer } from 'react-toastify';
const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender:"",
  });

  const {loading,signup} =useSignup();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Signing Up:", formData);
    await signup(formData);
  };
// handleCheckBox
const handleCheckBox = (gender)=>{
    setFormData({ ...formData, gender: gender });
}
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="w-full max-w-md p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg text-white">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="text-lg font-medium text-white">fullName</label>
            <div className="flex items-center bg-white/20 rounded-lg mt-2 p-3">
              <FaUser className="text-gray-300 mx-2" />
              <input
                type="text"
                name="fullName"
                placeholder="Enter your username"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent text-lg outline-none border-none text-white placeholder-gray-300"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="text-lg font-medium text-white">userName</label>
            <div className="flex items-center bg-white/20 rounded-lg mt-2 p-3">
              <FaEnvelope className="text-gray-300 mx-2" />
              <input
                type="email"
                name="userName"
                placeholder="Enter your email"
                value={formData.userName}
                onChange={handleChange}
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
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent text-lg outline-none border-none text-white placeholder-gray-300"
                required
              />
            </div>
          </div>

           {/* Confirm Password Field */}
           <div>
            <label className="text-lg font-medium text-white">Confirm Password</label>
            <div className="flex items-center bg-white/20 rounded-lg mt-2 p-3">
              <FaLock className="text-gray-300 mx-2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter your Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent text-lg outline-none border-none text-white placeholder-gray-300"
                required
              />
            </div>
          </div>

          {/* Gender Checkbox */}
          <div className="mt-4">
            <GenderCheckbox  onCheckBoxChange={handleCheckBox} selectedGender={formData.gender}/>
          </div>

          {/* Already have an account? */}
          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to={"/login"} className="text-yellow-300 hover:underline">
              Login
            </Link>
          </p>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 mt-4"
            disabled={loading}
          >
           {loading ? <span className="loading loading-spinner"></span>: "Sign Up"}
          </button>
          <ToastContainer position="top-right" autoClose={3000} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
