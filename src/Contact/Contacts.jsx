import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Contacts() {
     const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-yellow-100 ">
       <div className=' flex h-screen items-center justify-center'>
          <div className=" relative  dark:text-white shadow-lg rounded-lg p-8 w-full max-w-md ">
            <form  onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h1 className="font-bold text-3xl ">Contact-Us</h1>
            <div className='mt-3'>
            < label>Name</label>
            <br />
            <input type="text" placeholder="name" 
            className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"
             {...register("Name", { required: true })}
             />
             {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
            <br/>

            <label>Email</label>
            <br />
            <input type="email" placeholder="email" 
            className="input input-bordered w-full my-2 hover:bg-gray-200 hover:cursor-pointer hover:py-2"
             {...register("email", { required: true })}
             />
              {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}

            <br/>
            <label>Messege</label>
            <br/>
            
            <textarea className='col-32 row-20 w-full border-1 p-2'></textarea>
            </div>
            </form>
          </div>
        </div>

    </div>
  )
}
