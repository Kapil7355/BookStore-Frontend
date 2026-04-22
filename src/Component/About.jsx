import React from 'react'
import Aboutus  from '../About/Aboutus'
import Navbar from './Navbar'
import Footer from './Footer'
export default function About() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
      <Aboutus />
      </div>
      <Footer />

    </div>
  )
}
