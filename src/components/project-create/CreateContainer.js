import React, { useState } from "react";
import {createProject} from "../../services/projects/projects";
import ProjectCreate from "./ProjectCreate";
import { useHistory } from "react-router-dom";

export default function CreateContainer() {
    // Flags in the state to watch for add updates
  // Variables in the state to hold data
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: "",
    description: "",
    leaders: ""
  });
  const [add, setAdd] = useState(false);

  const history = useHistory();

  // UseEffect that runs when changes
  // are made to the state variables/flags
  React.useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (project && add) {
      console.log("in add", project);
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
    history.goBack();
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log("in change Handler",e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setProject({
      ...project,
      [name]: newValue
    });

  };

  return <div><ProjectCreate onClickHandler={onClickHandler} onChangeHandler={onChangeHandler}/></div>;
}