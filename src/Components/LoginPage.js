import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';
export default function LoginPage() {
  return (
    <>
    <div id="form-login">
        <div id="headlogo">
            <img src="./Assets/Black and White Collection 15.svg" alt=""/>
            <p id="headpara">AcmeSystem</p>
        </div>


        <div id="header">
            <p id="title">Admin Login</p>
            <p id="subtitle"> Welcome Back. Enter your credentials to access your account</p>

        </div>
        <div className="main" id="emailmain">
            <label className="label" for="emlplc">Email Address</label>
            <input id="emlplc" type="email" name="email" className="input" placeholder="hello@example.cl"/>
        </div>
            <div id="inputbox" className='mainpassword'>
                <div className="forlabel">
                    <label for="plc" className="label">Password</label>
                </div>
                <input className="input" type="password" name="password" id="plc" placeholder="Enter Your Password"/>
                <p id="fp">forgot password</p>
            </div>
        <div id="checkbox" className='checkboxclass'>
            <input type="checkbox" name="" id="chck"/>
            <label for="chck" id="keepsign">Keep me Sign in </label>
        </div>
        <div id="CTA">
            <input id="btn" type="button" value="Continue" name="Continue"/>
        </div>
        <div id="bottom">
            <div className="bottomlogo">
                <p className="para"> or sign up with</p>
                <div id="bottomlogo">
                    <div className="company" id="glogo">
                        <a href="https://google.com"><img src="./Assets/logo googleg 48dp.svg" alt=""/></a>
                        <p>Google</p>
    
    
                    </div>
                    <div className="company">
                        <a href="https://apple.com"><img src="./Assets/Frame 39905.svg" alt=""/></a>
                        <p>Apple</p>
    
                    </div>
                    <div className="company">
                        <a href="https://facebook.com"><img src="./Assets/Facebook Logo.svg" alt=""/></a>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
            
            <p id="para">
                don't have account ? <Link to='/signup' >Signup Here</Link>
            </p>

        </div>

    </div>

    
    </>
      
    
  )
}
