import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import { useForm } from "react-hook-form"
import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>{
    const userInfo = {
      email: data.email,
      password: data.password}
    await axios.post("http://localhost:8000/user/login",userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin SuccessFully.");
          document.getElementById('my_modal_3').close();
          setTimeout(() => {
            window.location.reload();
            
          },3000);
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        }
        
      }).catch((err) => {
        if (err.response) {
        console.log(err.res);
          toast.error("Error: " + err.response.data.message); } })
          setTimeout(() => {
          },2000);
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative bg-base-200 dark:bg-slate-800 dark:text-white shadow-lg rounded-lg p-6 w-full max-w-md ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>{document.getElementById('my_model_3').close();
           
            }}>✕</Link>

          
          <h1 className="font-bold text-lg text-center underline">Login</h1>
          <label>Email</label>

          <input type="email" placeholder="email"
           className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"
            {...register("email", { required: true })} />
               {errors.email && (
              <span className="text-red-500">
                Email is required</span>
            )}
          <label>Password</label>
          <input type="password" placeholder="password" 
          className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"
           {...register("password", { required: true })} />

            {errors.password && (
              <span className="text-red-500">
                Password required
              </span>
            )}
          <button className="btn btn-block bg-red-500 text-white hover:bg-slate-800 duration-300">Login</button>
          <div className='text-center mt-4'>Don't have an account?<Link to="/SignUp" className='text-blue-500 hover:underline'>Sign Up</Link></div>
            </form>
        </div>
      </dialog>
    </div>
  )
}
