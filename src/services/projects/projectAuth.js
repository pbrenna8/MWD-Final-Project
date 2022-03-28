import React from "react"; 
import Parse from "parse"; 

import ProtectedRoute from "../AppTools/ProtectedRoute.js"; 
import Projects from "../../components/project-container/ProjectContainer.js"; 

export default function ProjectsAuth(){

    return(
        <div> 
            <ProtectedRoute 
                exact 
                path="/ProjectsAuth"
                flag={Parse.User.current()}
                component={Projects}
            />
        </div>

    )
}