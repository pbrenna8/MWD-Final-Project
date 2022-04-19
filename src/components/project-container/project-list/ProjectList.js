import React from "react";
import {Link} from "react-router-dom";
import Parse from "parse";

// import data and project card functions
import { getProjectsByUser, removeProject, getAllProjects, getProjectsNotByUser } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";
import { MyProject } from "./Mine.js";

var select;
var track1;
var track2;
var track3;


export default function ProjectList() {
  // get data for the projects
  const [projects, setProjects] = React.useState([]);
  const [All, setAll] = React.useState([]);
  const [Other, setOther] = React.useState([]);


  // TODO: Create feature that does not need a hard coded user ID/many to many relation
  React.useEffect(() => {
      getAllProjects().then((data) => {
      setAll(data)
      });

      getProjectsNotByUser(Parse.User.current().id).then((data) => {
        setOther(data)
        });

      getProjectsByUser(Parse.User.current().id).then((data) => {
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



  function getSelectedValue() {
      select = document.getElementById("project-select").value;
      console.log(select); 
      track1 = false;
      track2 = false;
      track3 = false;

      if (select === "Mine"){
        console.log("inside Mine");
        track1 = true;
        console.log(track1)
        
      }
      if (select === "Other"){
        console.log("inside Other");
        track2 = true;
        console.log(track2)
        
      }
      if (select === "All"){
        console.log("inside All");
        track3 = true;
        console.log(track3)
        
      }
  }


  //{project.get("user").get("username") }
  // return the project cards
  return(
    <div>
    <h1 class="about-heading">Current Projects</h1> 
    <br></br>
      <label class="project-select" for="project-select">Choose an Option: </label>

<select name="projects" id="project-select" onChange={getSelectedValue}>
    <option value="">--Please choose an option--</option>
    <option value="Mine">My Projects</option>
    <option value="Other">Other Projects</option>
    <option value="All">All Projects</option>
</select> 
<div>

{track1 && (
  <MyProject
  projects={projects}

  />)}

</div>



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

    <ul>
      {All.map((project) =>(
        <div>
          <li key={project.id}>
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

    <ul>
      {Other.map((project) =>(
        <div>
          <li key={project.id}>
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
