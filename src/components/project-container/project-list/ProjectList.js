import React from 'react';
import {Link} from "react-router-dom";
import Parse from "parse";

// import data and project card functions
import { getProjectsByUser, removeProject, getAllProjects, getProjectsNotByUser } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";

var select;


export default function ProjectList() {
  // get data for the projects
  const [projects, setProjects] = React.useState([]);
  const [All, setAll] = React.useState([]);
  const [Other, setOther] = React.useState([]);
  const [filter, setFilter] = React.useState({
    track1: false, 
    track2: false, 
    track3: false
  }); 
  
  React.useEffect(() => {
      // if equal to mine 
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
      //Filter the old projects lists to take out selected project
      const newProjects1 = projects.filter((project) => project.id !== remove);
      setProjects(newProjects1);
      const newProjects2 = Other.filter((project) => project.id !== remove);
      setOther(newProjects2);
      const newProjects3 = All.filter((project) => project.id !== remove);
      setAll(newProjects3);

      removeProject(remove).then(() => {
        console.log("Removed lesson with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [projects, remove, All, Other, setProjects, setAll, setOther]);


// initiliazes state variable, runs when select is changed
  const [add, setAdd] = React.useState(false);

// runs anytime add is changed
  React.useEffect(() => {
      setAdd(false)
  }, [add]);

  // button alert for each project assuming if a project is created then it
  // is in progress
  function clickStatus() {
    alert("This project is in process!");
  }


  // get values from filter object
  function getSelectedValue() {
      select = document.getElementById("project-select").value;
      console.log(projects);
      // nullifies options not selected
      filter.track1 = false;
      filter.track2 = false;
      filter.track3 = false;
      
      // checks the value and sets it accordingly
      if (select === "Mine"){
        console.log("inside Mine");
        filter.track1 = true;
        console.log(filter.track1)
        
      }
      if (select === "Other"){
        console.log("inside Other");
        filter.track2 = true;
        console.log(filter.track2)
        
      }
      if (select === "All"){
        console.log("inside All");
        filter.track3 = true;
        console.log(filter.track3)
        
      }
      setAdd(true); // triggers use effect that re-renders page according to what user selected
      console.log(projects);
  }


  
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
    <hr></hr>
    <div>
    </div>


    {filter.track1 &&
    <div class="each-project"> 
          {projects.map((project) =>(
            <div>
              <div class key={project.id}>
                <div class="project-content"> </div>
                <SingleProject
                  project={project}
                  data="Click for Status"
                  onChildClick={clickStatus}
                />
              </div>
              <div class="fancy-button"> <button
              onClick={(e) => {
                // Set remove variable and trigger re-render
                setRemove(project.id);
              }}
              >
              Delete
              </button></div>
              </div>
          ))}
          
      
      </div> 
    }
        
    {filter.track3 &&
    <div class="each-project"> 
          {All.map((project) =>(
            <div>
              <div class="project-content" key={project.id}>
              <SingleProject
                project={project}
                data="Click for Status"
                onChildClick={clickStatus}
              />
              </div>
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
    </div>
    }
      
    {filter.track2 &&
      <div class="each-project">
          {Other.map((project) =>(
            <div>
              <div class="other-projects" key={project.id}>
              <SingleProject 
                project={project}
                data="Click for Status"
                onChildClick={clickStatus}
              />
              </div>
              <button
              onClick={(e) => {
                // Set remove variable and trigger re-render
                setRemove(project.id);
              }}
              >
              Delete
              </button>
              <br></br>
              </div>
          ))}
        </div>
    }
        
      <h2 class="about-heading">Create a New Project: </h2>
        <hr></hr>
        <div class="new-project-description">Add a new project to your portfolio!</div>
        <div class="fancy-button">
        <Link to="/ProjectCreate"><button class="create-button">Create a Project</button></Link></div> 
        <br></br>
        </div>        
  );
}
