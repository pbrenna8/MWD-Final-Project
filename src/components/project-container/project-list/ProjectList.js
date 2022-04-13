import React from "react";
import {Link} from "react-router-dom";

// import data and project card functions
import { getProjectsByUser, removeProject } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";

export default function ProjectList() {
  // get data for the projects
  const [projects, setProjects] = React.useState([]);

  // TODO: Create feature that does not need a hard coded user ID/many to many relation
  React.useEffect(() => {
    return getProjectsByUser("5XYZvZpPQv").then((data) => {
      setProjects(data);
    });
  }, []);

  const [remove, setRemove] = React.useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  React.useEffect(() => {
    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old lessons list to take out selected lesson
      const newProjects = projects.filter((project) => project.id !== remove);
      setProjects(newProjects);

      removeProject(remove).then(() => {
        console.log("Removed lesson with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [projects, remove]);

  // button alert for each project
  // TODO: find another mixed functionality for this
  function clickStatus() {
    alert("This project is in process!");
  }

  // return the project cards
  return(
    <div>
    <ul>
      {projects.map((project) =>(
        <div>
          <li key={project.id}>
            {project.get("user").get("username") }
            <SingleProject
              project={project}
              data="Click for Status"
              onChildClick={clickStatus}
            />
          </li>
          <button
          onClick={(e) => {
            // Set remove variable and trigger re-render
            setRemove(project.id);
          }}
          >
          Delete
          </button>
          </div>
      ))}
    </ul>
    <hr></hr>
    <Link to="/ProjectCreate"><button>Create a Project</button></Link>
    </div>
  );
}
