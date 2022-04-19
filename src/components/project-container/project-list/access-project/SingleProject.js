
// import the functions that call the projects
import { ProjectName } from "./project-details/ProjectName.js";
import { ProjectDescription } from "./project-details/ProjectDescription.js";
import { ProjectLeaders } from "./project-details/ProjectLeaders.js";

// return a project card with the status button
export const SingleProject = ({ project, data, onChildClick }) => {
  return(
    <div>
      <ProjectName projectName={project.get("name")} />
      <ProjectDescription projectDescription={project.get("description")} />
      <ProjectLeaders projectLeaders={project.get("leaders")} />
      <button onClick={onChildClick}>{data}</button>
    </div>
  );
}
