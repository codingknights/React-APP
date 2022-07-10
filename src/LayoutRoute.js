import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Route } from "react-router-dom";

function LayoutRoute(props){
    return(
        <React.Fragment>
            <NavBar/>
                <Route path={props.path} exact={true} component={props.component}/>
            <Footer/>
        </React.Fragment>
    )
}
export default LayoutRoute