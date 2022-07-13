import React from "react";
import App from "./App";


function SignUp() {
    return (
        <React.Fragment >
            <div class="row ">
                <div class="col ">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    
                </div>
                <div class="col ">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your E-Mail here....."/>
                    <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
            </div>
            <label for="inputPassword5" class="form-label text-white">Password</label>
            <input type="password" id="inputPassword5" class="form-control" placeholder="password" aria-describedby="passwordHelpBlock" />
            <div id="passwordHelpBlock" class="form-text text-white">
                Your password must not contain spaces, special characters, or emoji.
            </div>


        </React.Fragment>
    )
}
export default SignUp;
