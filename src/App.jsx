
import './App.css'
import {Navigate, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Courses from './course/Courses'
import SignUp from './Component/SignUp'
import Login from './Component/Login';
  import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from './Context/AuthProvider'

function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Course'
         element={authUser ? <Courses /> : <Navigate to ="/SignUp" />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <ToastContainer />
       
    </div>
  )
}

export default App;
