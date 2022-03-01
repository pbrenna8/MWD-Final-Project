
// import the functions that call the projects
import { ProjectName } from "./project-details/ProjectName.js";
import { ProjectDescription } from "./project-details/ProjectDescription.js";
import { ProjectLeaders } from "./project-details/ProjectLeaders.js";

// return a project card with the status button
export function SingleProject({ project, data, onChildClick }) {
  return(
    <div class="single-project">
      <ProjectName projectName={project.name} />
      <ProjectDescription projectDescription={project.description} />
      <ProjectLeaders projectLeaders={project.leaders} />
      <button onClick={onChildClick}>{data}</button>
    </div>
  );
}
