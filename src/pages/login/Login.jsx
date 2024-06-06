import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './login.scss';
import { AuthContext } from '../../context/authContext';

export default function Login() {

  const [inputs, setInputs] = useState({
    username : "",
    password : "",
  })

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  }
  return (
    <div className='login'>
        <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sunt totam fugit temporibus, cupiditate praesentium consectetur faci</p>
          <span>Don't you have any account</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
            {error && error}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
        </div>
    </div>
  )
}
