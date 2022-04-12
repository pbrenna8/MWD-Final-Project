import React, { useState } from "react";
// import the function that lists projects
import ProjectList from "./project-list/ProjectList.js";
import {createProject} from "../../services/projects/projects";

// container for the project cards
export default function ProjectContainer() {

  // Flags in the state to watch for add updates
  // Variables in the state to hold data
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: "",
    description: "",
    leaders: ""
  });
  const [add, setAdd] = useState(false);

  // UseEffect that runs when changes
  // are made to the state variables/flags
  React.useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (project && add) {
      createProject(project).then((projectCreated) => {
        if (projectCreated) {
          alert(
            `You successfully created a new project titled: ${projectCreated.get("name")}!`
          );
        }
        setAdd(false);
        setProjects([...projects, projectCreated]);
      });
    }
  }, [project, projects, add]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create lesson and
    // re-render list with new lesson
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { val, value: newValue } = e.target;
    console.log(newValue);

    setProject({
      ...project,
      [val]: newValue
    });

  };

  return <div><ProjectList onClickHandler={onClickHandler} onChangeHandler={onChangeHandler}/></div>;
}
