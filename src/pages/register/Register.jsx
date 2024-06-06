import React, { useState } from 'react'
import './register.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Register() {

  const [inputs, setInputs] = useState({
    username : "",
    email : "",
    password : "",
    name : "",

  })

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", inputs)
    } catch (error) {
      setError(error.response.data);
    }
  }
  

  return (
    <div className='register'>
        <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt totam fugit temporibus, cupiditate praesentium consectetur faci</p>
          <span>Do you have any account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input type="email" placeholder='email' name='email' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
            <input type="text" placeholder='name' name='name' onChange={handleChange}/>
              {error && error}
              <button onClick={handleClick}>Register</button>
            
          </form>
        </div>
        </div>
    </div>
  )
}
