import React from 'react'
import Card from './Card'
import list from '../assets/list.json';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

export default function Course(item) {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res =await axios.get("http://localhost:8000/books");
        console.log(res.data)
        setBook(res.data)

      }catch (error){
        console.log("Error")
      }
    }
    getBook();
  },[]);
  return (
    <div className='bg-red-200'>
    < div className='max-w-screen-2xl container mx-auto md:px-40 py-4'>
      <div className='mt-32 text-center justify-center'>
      <h1 className=' text-2xl md:text-4xl mb:4 '>
        We are delighted to have you <span className='text-pink-500'>Here!!</span>
      </h1>
      <p className='my-5' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsum laudantium a laborum debitis officia corrupti saepe, eligendi fugiat unde laboriosam commodi ipsam illo doloribus incidunt fuga ea delectus porro?
      Autem libero fugiat maxime reprehenderit repudiandae itaque labore repellendus. Sequi autem tempora commodi quibusdam, ullam suscipit beatae minima nulla. Voluptas quam at nemo beatae corporis labore, adipisci nam excepturi magnam!
      Deleniti accusamus doloremque, repellendus quasi ullam, voluptates soluta voluptate numquam sequi earum cupiditate aut quis fugiat non veritatis consequuntur.</p>
          <button className='bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded my-4 w-30'>
            Back
          </button>
        
   </div>
  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 gap-6'>
    {book.map((item)=>(
      <Card key={item.id} props={item}/>
    ))}
   </div>
    </div>
    </div>
  )
}
