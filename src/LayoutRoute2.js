import React from "react";
import { Route } from "react-router-dom";

function LayoutRoute2(props){
    return(
        <React.Fragment>
                <Route path={props.path} exact={true} component={props.component}/>
        </React.Fragment>
    )
}
export default LayoutRoute2