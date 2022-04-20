import React from "react";
import {Link} from "react-router-dom";
import Parse from "parse";

// import data and project card functions
import { getProjectsByUser, removeProject } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";

export const MyProject = ({projects}) => {
  // get data for the projects
  // TODO: Create feature that does not need a hard coded user ID/many to many relation
  function clickStatus() {
    alert("This project is in process!");
  }
  //{project.get("user").get("username") }
  // return the project cards
  return(
    <div>
    <ul>
      {projects.map((project) =>(
        <div>
          <li key={project.id}>
            
            <SingleProject
              project={project}
              data="Click for Status"
              onChildClick={clickStatus}
            />
          </li>
          
          </div>
      ))}
      
    </ul>
    <hr></hr>
    </div>
  );
}
