import React from "react";
import { Route } from "react-router-dom";
import Navbar2 from "./Navbar2";

function LayoutRoute2(props){
    return(
        <React.Fragment>
                <Navbar2/>
                <Route path={props.path} exact={true} component={props.component}/>
        </React.Fragment>
    )
}
export default LayoutRoute2