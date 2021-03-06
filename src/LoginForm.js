import React, { useState, useContext } from 'react';
// Connect to the context (i.e, global state)
import { UserContext } from './UserContext';
import{Link as ReactLink} from "react-router-dom"

// RegEx (Regular Expressions)
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function LoginForm() {

    // "initial", "sending", "successful", "unsuccessful"
    const [state, setState] = useState("initial");
    const { updateUser } = useContext(UserContext);
    
    // Declare undefined variables for later assignment (ref props)
    let emailField;
    let passwordField;

    // To instantiate a FormData object
    const formData = new FormData();

    const login = () => {

        const errors = [];

        // 1. Validate the fields
        if(emailField.value.length === 0) {
            errors.push("Please enter a valid email address");
        }
        if(passwordField.value.length === 0) {
            errors.push("Please enter a valid password");
        }

        // 1.1 If there are errors, set the state to "validation error"
        if(errors.length > 0) {
            setState("validation error");
        }
        // 1.2 If there are no errors, set the state to "sending"
        else {
            setState("sending");

            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);

            fetch(`${process.env.REACT_APP_BACKEND}/user/create`, {
                method: 'POST',
                // headers: {"Content-Type": "application/json"},
                body: formData
            })
            // 2.1 If the submission is successful, set the state "successful"
            .then((backendResponse)=> backendResponse.json())
            .then((theJson)=>{
                console.log(theJson);

                updateUser(
                    {
                        jsonwebtoken: theJson.jsonwebtoken,
                        firstName: theJson.firstName,
                        lastName: theJson.lastName,
                        email: theJson.email,
                        avatar: theJson.avatar
                    }
                )
                setState("successful");
            })
            // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
            .catch((error)=>{
                console.log(error);
                setState("unsuccessful");
            });
        }
    }

    return (
        <div className="container" style={{maxWidth: 600, minHeight: 'calc(100vh - 112px)'}}>

            <center><h1 className="py-5 text-white">Login</h1></center>

            <div className="mb-3">
                <label for="email" className="form-label text-white">Email address</label>
                <input ref={ (elem)=>emailField = elem } type="email" className="form-control" id="email" placeholder="Enter Your E-Mail here....." aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="password" className="form-label text-white">Password</label>
                <input ref={ (elem)=>passwordField = elem } type="password" className="form-control" id="password" placeholder="Enter Your Password here....." aria-describedby="password" />
            </div>
            

            {
                state !== "sending" && state !== "successful" &&
                <button 
                onClick={login}
                className="btn btn-danger mb-3" type="button">Submit</button>
            }

            { 
                state === "validation error" &&
                <div className="alert alert-danger" role="alert">
                    Incorrect email or password.
                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success" role="alert">
                    You have registered successfully!
                </div>
            }

            {
                state === "unsuccessful" &&
                <div className="alert alert-danger" role="alert">
                    Internal error. Please try again later.
                </div>
            }

            {
                state === "sending" &&
                <p>Loading...</p>
            }
            <ReactLink style={{"margin-left":"290px"}} to="/signup">New here?Create an Account.</ReactLink>
        </div>
    )
}

export default LoginForm;