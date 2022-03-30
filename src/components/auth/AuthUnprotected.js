import React from "react"; 
import Parse from "parse"; 

import UnprotectedRoute from "../../services/UnprotectedRoute.js"; 
import Login from "./AuthLogin.js"; 

export default function Auth(state){
    console.log(state.location.state);
    return(
        <div> 
            <UnprotectedRoute 
                exact 
                path={state.location.state}
                flag={Parse.User.current()}
                component={Login}
            />
        </div>

    )
}