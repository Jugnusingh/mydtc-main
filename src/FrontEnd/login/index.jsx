import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../login/index.css'

const Login = () => {
  const navigate=useNavigate
  const [inputValue, setInputValue] = useState({
    username: "",
    password: ""
  })
  const handleValue = (e) => {
    const value = e.target.value
    const name = e.target.name
    setInputValue({
      ...inputValue, [name]: value
    })
  }
  const handleLoginForm = (e) => {
    navigate='/Dashboard'
  }
  return (
    <div class="container">
      <div class="signin-signup">
        <form action="#" class="sign-in-form fm" onSubmit={handleLoginForm}>
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" name="username" onChange={handleValue} />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="password" onChange={handleValue} />
          </div>
          <button className="btn solid"> Login </button>
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <img src="Images/login_img.png" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login