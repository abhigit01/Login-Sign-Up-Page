import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css';
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [message1, setMessage1] = useState("");
    const[password, setPassword] = useState("")
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(email)) {
            setMessage("");
        }
        else if (email =="") {
            alert("please enter a valid email")
            setMessage("Email is required ");
        }
        else if (!regEx.test(email)) {
            setMessage("Email is not Valid");
        }
        else {
            setMessage("");
        }
    }
    const passwordValidation =() =>{
        const pass = password;
        if(password ==""){
            alert("Please Enter a Valid Password")
            setMessage1("password is required")
        }
        else if(password.length <=7){
            setMessage1("Enter Correct Password")

        }
        else{
            setMessage1("")
        }
    }
    const onbtnclick =()=>{
        emailValidation();
        passwordValidation();

    }
    
    
    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChnage = (e) =>{
        setPassword(e.target.value);
    }
    return (
        <>
            <div id="form-login">
                <div id="header">
                    <p id="title">Login</p>
                    <p id="subtitle"> Welcome Back. Enter your credentials to access your account</p>

                </div>
                <div className="main" id="emailmain">
                    <label className="label" for="emlplc">Email Address</label>
                    <input id="emlplc" type="email" name="email" className="input" placeholder="hello@example.gmail.com" value={email} onChange={handleOnChange} />
                    {message}
                </div>
                <div id="inputbox" className='mainpassword'>
                    <div className="forlabel">
                        <label for="plc" className="label">Password</label>
                    </div>
                    <input className="input" type="password" name="password" id="plc" placeholder="Enter Your Password" onChange={handlePasswordChnage}/>
                    {message1}
                    <p id="fp">forgot password</p>
                </div>
                <div id="checkbox" className='checkboxclass'>
                    <input type="checkbox" name="" id="chck" />
                    <label for="chck" id="keepsign">Keep me Sign in </label>
                </div>
                <div id="CTA">
                    <button id="btn" type="button" value="Continue" name="Continue" onClick={onbtnclick}> CONTINUE</button>
                </div>
                <div id="bottom">
                    <div className="bottomlogo">
                        <p className="para"> or sign up with</p>
                        <div id="bottomlogo">
                            <div className="company" id="glogo">
                                <a href="https://google.com"><img src="./Assets/logo googleg 48dp.svg" alt="" /></a>
                                <p>Google</p>


                            </div>
                            <div className="company">
                                <a href="https://apple.com"><img src="./Assets/Frame 39905.svg" alt="" /></a>
                                <p>Apple</p>

                            </div>
                            <div className="company">
                                <a href="https://facebook.com"><img src="./Assets/Facebook Logo.svg" alt="" /></a>
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
