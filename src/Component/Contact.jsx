import React from 'react'
import Contacts  from '../Contact/Contacts'
import Navbar from './Navbar'
import Footer from './Footer'



export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>

      <Contacts />

    </div>
    <Footer />
    </>
  )
}
