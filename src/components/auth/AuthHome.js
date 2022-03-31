import React from "react"; 
import Parse from "parse"; 

import ProtectedRoute from "../../services/AppTools/ProtectedRoute.js"; 

// checks authentication for about and projects component
export default function Auth(state){
    console.log(state.location.state);
    return(
        <div> 
            <ProtectedRoute 
                exact 
                path={state.location.state}
                flag={Parse.User.current()}
            />
        </div>

    )
}