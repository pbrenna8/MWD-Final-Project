import React from "react"; 
import Parse from "parse"; 

import ProtectedRoute from "../../services/AppTools/ProtectedRoute.js"; 

// checks authentication for about and projects component
export default function Auth(state){
    let flag = false;
    if(Parse.User.current() !== null){
        flag = true;
    }
    console.log(flag);
    return(
        <div> 
            <ProtectedRoute 
                exact 
                path={state.location.state}
                flag={flag}
            />
        </div>

    )
}