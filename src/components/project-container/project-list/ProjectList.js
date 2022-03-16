import React from "react";

// import data and project card functions
import { getProjectsByUser } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";

export default function ProjectList() {
  // get data for the projects
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    return getProjectsByUser("5XYZvZpPQv").then((data) => { // hard coded one user
      setProjects(data);
    });
  }, []);

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
          <li key={project.id}>
            {project.get("user").get("username") }
            <SingleProject
              project={project}
              data="Click for Status"
              onChildClick={clickStatus}
            />
          </li>
      ))}
    </ul>
    </div>
  );
}
