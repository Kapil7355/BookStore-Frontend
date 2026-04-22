import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { toast } from 'react-toastify';

export default function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            });
            localStorage.removeItem('Users');
            toast.success("Logged-Out Successfully.");
            
            setTimeout(() => {
                window.location.reload();
            },3000);
            
        }catch(error){
            toast.error("Error",error.massage);
            setTimeout(() => { 
            },3000);

        }
    }
  return (
    <div>
      <button className='bg-red-500 cursor-pointer px-3 py-2 rounded-sm font-bold ' onClick={handleLogout}>Logout</button>
    </div>
  )
}
