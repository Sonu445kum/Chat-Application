import React, { useState } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const useLogin = () => {
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();


  const login =async({userName,password})=>{
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/auth/login",{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({userName,password})
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        // localstorage
        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);
        toast.success("Login successful");
      } catch (error) {
        toast.error(error.message);
      }finally{
        setLoading(false);
      }
  };
  return {loading,login};
}

export default useLogin
