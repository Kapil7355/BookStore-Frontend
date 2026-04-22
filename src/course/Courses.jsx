import React from 'react'
import Navbar from '../Component/Navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer';

export default function Courses() {
  return (
    <div>
      <Navbar />
        <div className='min-h-screen'>
            <Course />
         </div>
         <Footer />

    </div>
  )
}
