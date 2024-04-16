import React from 'react'
import './signup.css';

export default function SignUp() {
    return (
        <>
            <div className="signup ">
                <div className="heading">
                    <p>Create an account</p>
                </div>
                <div className="name detail box">
                    <p>Enter your Name</p>
                    <input type="text" placeholder="Enter your Name" />
                </div>
                <div className="phone detail box">
                    <p>Enter your mobile number </p>
                    <input type="text" name="number" id="number" placeholder="enter your phone number" />
                </div>

                <div className="email detail box">
                    <p>Enter your Email Id </p>
                    <input type="text" name="email" id="email" placeholder="enter your Email" />
                </div>
                <div className="pass detail box">
                    <p>password</p>
                    <input type="text" name="password" id="password" placeholder="Create a password" />
                </div>
                <div className="gender">
                    <label for="text">Gender</label> <br />
                    <input type="radio" name="gender" value="male" checked /> male <br />
                    <input type="radio" name="gender" value="female" checked /> female <br />
                    <input type="radio" name="gender" value="other" checked /> other <br />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </div>
        </>
    )
}
