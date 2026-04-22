import React from 'react'
import list from '../assets/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
import { useState,useEffect } from 'react';



export default function Freebook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res =await axios.get("http://localhost:8000/books");
      const FilterData =res.data.filter((data)=>data.category==="Free");
      console.log(FilterData)
        setBook(FilterData)

      }catch (error){
        console.log("Error")
      }
    }
    getBook();
  },[]);


 
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-40 px-4'>
      <h1 className='font-semibold text-xl pb-2'> Free Offered Course</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum laboriosam accusamus debitis quasi cum reiciendis, dicta doloribus praesentium voluptatibus officiis delectus odio suscipit repellat nulla natus consectetur et maxime corporis.
      Deserunt ut recusandae inventore sint a.</p>

    <div className='md:py-6 my-5 mx-auto max-w-screen-2xl container px-4 '>
     <Slider {...settings}>
        {book.map((item)=>
        <Card props={item}/>
        )}
      </Slider>
    </div>
    </div>
    </>
  )
}
