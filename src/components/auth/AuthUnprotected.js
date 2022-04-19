import React from "react"; 
import Parse from "parse"; 

import UnprotectedRoute from "../../services/AppTools/UnprotectedRoute.js"; 

// blocking the user if they've registered/logged in 
export default function AuthCheck(state){
    console.log(state.location.pathname);
    let path = state.location.pathname + "Auth";
    console.log(path);
    return(
        <div> 
            <UnprotectedRoute 
                exact 
                path={path}
                flag={Parse.User.current()}
            />
        </div>
    )
}