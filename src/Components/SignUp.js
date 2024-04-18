import React, { useState } from 'react'
import './signup.css';

export default function SignUp() {
    const [name, setName] = useState("");
    const [mobilenum, setNumber] = useState("");
    const [emailsignup, setEmail] = useState("");
    const [password, setPasswordsignup] = useState("");
    const[message1,setNewMessage1] = useState("")
    const[message2,setNewMessage2] = useState("")
    const[message3,setNewMessage3] = useState("")
    const[message4,setNewMessage4] = useState("")
    const EnterName = () => {
        if (name == "") {
            alert("Your Name is Required")
            setNewMessage1("Your Name is Required");
        }
        else if (name.length <= 5) {
            setNewMessage1("Enter Valid Name")

        }
        else {
            setNewMessage1("")
        }
    }
    const EnterNumber = () => {
        if (mobilenum == "") {
            alert("Your mobile number is Required")
            setNewMessage2("Your mobile number is Required");
        }
        else if (mobilenum.length < 10 || mobilenum.length > 10) {
            setNewMessage2("Enter Valid Number")

        }
        else {
            setNewMessage2("")
        }

    }
    const Enteremail = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(emailsignup)) {
            setNewMessage3("");
        }
        else if (emailsignup == "") {
            alert("Email is required")
            setNewMessage3("Email is required ");
        }
        else if (!regEx.test(emailsignup)) {
            setNewMessage3("Email is not Valid");
        }
        else {
            setNewMessage3("");
        }

    }
    const passwordValidation = () => {
        if (password == "") {
            alert("password is required")
            setNewMessage4("password is required")
        }
        else if (password.length <= 7) {
            setNewMessage4("Enter Correct Password")

        }
        else {
            setNewMessage4("")
        }
    }
    const handlePasswordChnage = (e) => {
        setPasswordsignup(e.target.value);
    }
    const handleOnChange = (e) => {
        setName(e.target.value);
    }
    const handleonmobileChange = (e) => {
        setNumber(e.target.value)
    }
    const CorrectEmial = (e) => {
        setEmail(e.target.value)
    }
    const onbtnclick = () => {
        EnterName();
        EnterNumber();
        Enteremail();
        passwordValidation();
    }
    return (
        <>
            <div className="signup ">
                <div className="heading">
                    <p>Create an account</p>
                </div>
                <div className="name detail box">
                    <p>Enter your Name</p>
                    <input type="text" className="inputbox" placeholder="Enter your Name" value={name} onChange={handleOnChange} />
                    {message1}
                </div>
                <div className="phone detail box">
                    <p>Enter your mobile number </p>
                    <input type="number" className="inputbox" name="number" id="number" value={mobilenum} placeholder="enter your phone number" onChange={handleonmobileChange} />
                    {/* {submit?mobilenum:""} */}
                    {message2}
                </div>

                <div className="email detail box">
                    <p>Enter your Email Id </p>
                    <input type="email" className="inputbox" name="email" id="email" value={emailsignup} placeholder="enter your Email" onChange={CorrectEmial} />
                    {/* {submit?emailsignup:""} */}
                    {message3}
                </div>
                <div className="pass detail box">
                    <p>password</p>
                    <input type="text" className="inputbox" name="password" id="password" value={password} placeholder="Create a password"  onChange={handlePasswordChnage} />
                    {message4}
                </div>
                <div className="gender">
                    <p>Gender</p>
                    <p>Male <input type="radio" name="gender" value="male" checked /></p>
                    <p>Female<input type="radio" name="gender" value="female" checked /> </p>
                    <p>Other<input type="radio" name="gender" value="other" checked /></p>
                </div>
                <div>
                    <button onClick={onbtnclick} >submit</button>
                </div>
            </div>
        </>
    )
}
