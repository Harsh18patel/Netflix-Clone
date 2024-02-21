import React, { useRef, useState } from 'react'
import './Register.scss'

export default function Register() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <>
    <div className='register'>
        <div className="top">
            <div className="wraper">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix-2015-logo.svg.png" alt="" className="logo" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch Anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership</p>

            {
                !email ? (

            <div className="input">
                <input type="email" placeholder='email address' ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
                )
                :   
                (
                    <form className="input">
                    <input type="password" placeholder='password' ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start MemberShip</button>
                </form>
                )   
            
            }

        </div>
    </div>
    </>
  )
}
