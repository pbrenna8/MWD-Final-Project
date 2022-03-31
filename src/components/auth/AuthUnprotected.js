import React from "react"; 
import Parse from "parse"; 

import UnprotectedRoute from "../../services/AppTools/UnprotectedRoute.js"; 

// blocking the user if they've registered/logged in 
export default function AuthCheck(state){
    console.log(state);
    return(
        <div> 
            <UnprotectedRoute 
                exact 
                path={state.location.state}
                flag={Parse.User.current()}
            />
        </div>
    )
}