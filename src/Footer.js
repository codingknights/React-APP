import React from "react";
import { FaReacteurope } from "react-icons/fa";
import { Link as ReactLink} from "react-router-dom"

function Footer() {
    return (
        <React.Fragment>
            <footer className="py-3 ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 container">
                    <li  className="nav-item "><ReactLink to="/" className="nav-link px-2 text-secondary">Home</ReactLink></li>
                    <li className="nav-item "><ReactLink to="/about" className="nav-link px-2 text-white">About Us</ReactLink></li>
                    <div className="nav-item nav-link col-md-5 offset-md-1 mb-3 float-right">
                        <form>  
                            <h5 className="text-white">Subscribe to get the latest update of the laptops</h5>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                    <button className="btn btn-warning text-white" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </ul>
                <p className="text-center text-secondary">© 2022 Company, Inc</p>
            </footer>
        </React.Fragment>
    )

}
export default Footer;