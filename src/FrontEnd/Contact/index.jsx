import React, { useState } from 'react'
import '../login/index.css'

const Login = () => {
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
  }
  return (
    <div className="container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form fm" onSubmit={handleLoginForm}>
          <h2 className="title">Contact Us</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Name" name="username" data-validate = "Name is required" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Email" name="email" data-validate = "Valid email is required: ex@abc.xyz" />
          </div>
          <div className="input-field">
            <i className="fas fa-book"></i>
            <input type="text" placeholder="Subject" name="subject" data-validate = "Subject is required" />
          </div>
          <div className="input-field">
            <i className="fas fa-comment"></i>
            <input type="text" placeholder="Massage" name="massage" data-validate = "Message is required" />
          </div>
          <button classNameName="btn solid"> Send Email </button>
          <p className="social-text">Or Contact us with our social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <img src="Images/contact.png" classNameName="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login