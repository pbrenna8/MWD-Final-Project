import React from "react"; 
import Parse from "parse"; 

import ProtectedRoute from "../AppTools/ProtectedRoute.js"; 
import About from "../../components/about/About.js"; 

export default function AboutAuth(){

    return(
        <div> 
            <ProtectedRoute 
                exact 
                path="/AboutAuth"
                flag={Parse.User.current()}
                component={About}
            />
        </div>

    )
}