import React from 'react'
import './Login.scss'

export default function Login() {
  return (
   
    <>
    <div className='login'>
        <div className="top">
            <div className="wraper">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix-2015-logo.svg.png" alt="" className="logo" />
            </div>
        </div>
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or Phone number' />
                <input type="password" placeholder="Password" />
                <button className="loginButton">Sign In</button>
                <span>New to Netflix? <b>sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn More.</b>
                </small>
            </form>
        </div>
    </div>
    </>
  )
  
}
