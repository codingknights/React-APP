import React from "react";
function SignIn() {
    return (
        <React.Fragment>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your E-Mail here....." aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
            </div>
            <label for="inputPassword5" class="form-label text-white">Password</label>
            <input type="password" placeholder="Password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
            <div id="passwordHelpBlock" class="form-text text-white">
            </div>
        </React.Fragment>
    )
}
export default SignIn;