import React from "react";

// import data and project card functions
import { getAllProjects } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";

export default function ProjectList() {
  // get data for the projects
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    return getAllProjects().then((data) => {
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
    <ul>
      {projects.map((project) =>(
          <li key={project.id}>
            <SingleProject
              project={project}
              data="Click for Status"
              onChildClick={clickStatus}
            />
          </li>
      ))}
    </ul>
  );
}
