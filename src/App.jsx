import { useState } from 'react'
import './App.css'
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";

function App() {
  const [action, setAction] = useState('')
  const registerLink = () =>{
    setAction('active')
  }
  const loginLink = () =>{
    setAction('active')
  }
  return (
    <>
    <div>Login Registration form</div>
    <div className={`wrapper${action}`}>
      <div className='form-box login'>
        <form action=''>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='password' required/>
           <FaLock className='icon'/>
          </div>
          <div className='remember-forgot'>
            <label><input type="checkbox" />Remember me</label>
            <a href='#'>Forgot password</a>
          </div>
          <button type='submit'>Login</button>
           <div className='register-link'>
            <p>Don't have an account..?<a href="#" onClick={registerLink}>register</a></p>
           </div>
        </form>
      </div>
      <div className='form-box register'>
        <form action=''>
          <h1>Registration</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type='email' placeholder='email' required/>
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='password' required/>
           <FaLock className='icon'/>
          </div>
          <div className='remember-forgot'>
            <label><input type="checkbox" />I agree to the terms and conditions</label>
           
          </div>
          <button type='submit'>Register</button>
           <div className='register-link'>
            <p>Already have an account..?<a href="#" onClick={loginLink}>Login</a></p>
           </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default App
