import React from "react";
import "./Landing.css"



function LandingPage() {  
const container = document.querySelector(".container");
     return (
        < React.Fragment >
       
        <div class="container">
            <div class="form-container">
                <div class="signin-signup">
                    <form action="" class="sign-in-form">
                        <h2 class="title" onClick={()=>{
                            container.classList.remove("sign-up-mode")
                            }}>SIGN IN</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="password" />
                        </div>
                        <input type="submit" value="login" class="btn solid" />

                    </form>

                    <form action="" class="sign-up-form">
                        <h2 class="title" onClick={()=>{
                            container.classList.add("sign-up-mode");
                            }}>SIGN UP</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="password" />
                        </div>
                        <input type="submit" value="sign up" class="btn solid" />

                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here?</h3>
                        <p>
                            are you looking for a laptop?
                        </p>
                        <button class="btn transparent" id="sign-up-btn">sign up</button>
                    </div>
                    <img src="log.svg" class="image" alt="" />
                </div>

                <div class="panel right-panel">
                    <div class="content">
                        <h3>one of us?</h3>
                        <p>
                            are you looking for a laptop?
                        </p>
                        <button class="btn transparent" id="sign-in-btn">sign in</button>
                    </div>
                    <img src="register.svg" class="image" alt="" />
                </div>
            </div>
        </div>
        </React.Fragment >
    )
}
export default LandingPage;