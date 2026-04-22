import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Login from './Login';
  import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
export default function SignUp() {
  const location =useLocation();
  const navigate=useNavigate();
  const from =location.state?.from?.pathname||"/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password}
    await axios.post("http://localhost:8000/user/creatUser",userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup SuccessFully.");
          navigate(from,{replace:true});
          setTimeout(() => {
            window.location.reload();
          },2000);
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err) => {
        if (err.response) {
        console.log(err.res);
          toast.error("Error: " + err.response.data.message); } })
  }
  return ( <>
      <div className="bg-gray-100">
        <div className=' flex h-screen items-center justify-center '>
          <div className='border-2 border-gray-300 rounded-lg p-6 w-full max-w-md '>
            <div className="model-box relative bg-base-200 dark:bg-slate-800 dark:text-white shadow-lg rounded-lg p-6 w-full max-w-md ">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                <h1 className="font-bold text-lg text-center underline">Sign-Up</h1>
                < label>Fullname</label>
                <br />
                <input type="text" placeholder="name"
                  className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"{...register("fullname", { required: true })} />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                <br />

                <label>Email</label>
                <br />
                <input type="email" placeholder="email"
                  className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}

                <br />
                <label>Password</label>
                <br />
                <input type="password" placeholder="password"
                  className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
                <button className="btn btn-block bg-red-500 text-white hover:bg-slate-800 duration-300">Sign-Up</button>
                <div className='text-center mt-4'>Don't have an account?{" "}
                  <button
                    className='text-blue-500 hover:underline'
                    onClick={() => {
                      const modal = document.getElementById('my_modal_3');
                      modal.showModal();
                    }}>
                    Login
                  </button>
                  <Login />
                  {" "}
                </div></form>  </div> </div></div> </div></>
  )
}      