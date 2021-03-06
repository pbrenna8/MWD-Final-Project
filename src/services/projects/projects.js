import Parse from "parse";
// READ operation - get all lessons in Parse class Projects

export const getProjectsByUser = (userID) => {
  const User = Parse.Object.extend("_User");
  const userQuery = new Parse.Query(User);
  return userQuery.get(userID).then((user) => {
    console.log("user", user); 
    return user;
  }).then((result) => {
    const Projects = Parse.Object.extend("Projects");
    const query = new Parse.Query(Projects);

    query.equalTo("user",result);
    query.include("user"); 
    return query.find().then((results) => {
    // returns array of Project objects for the specified user
    console.log("projects", results); 
    return results;
  });
  });

  
};



export const getProjectsNotByUser = (userID) => {
  const User = Parse.Object.extend("_User");
  const userQuery = new Parse.Query(User);
  return userQuery.get(userID).then((user) => {
    console.log("user", user); 
    return user;
  }).then((result) => {
    const Projects = Parse.Object.extend("Projects");
    const query = new Parse.Query(Projects);

    query.notEqualTo("user",result);
    query.include("user"); 
    return query.find().then((results) => {
    // returns array of Project objects for the specified user
    console.log("projects", results); 
    return results;
  });
  });

  
};


// CREATE operation - new project with Name
export const createProject = (newProject) => {
  console.log("Creating: ", newProject.name);
  const Project = Parse.Object.extend("Projects");
  const project = new Project();
  var userPointer = {
    __type: 'Pointer',
    className: '_User',
    objectId: Parse.User.current().id
  }

  // using setter to UPDATE the object
  project.set("name", newProject.name);
  project.set("description", newProject.description);
  project.set("leaders", newProject.leaders);
  project.set("user", userPointer);
  console.log("Project: ", newProject);
  return project.save().then((result) => {
    // returns new Project object
    return result;
  }).catch((error) => {
    alert(`Error: ${error.message}`);
  });
};

// DELETE operation - remove lesson by ID
export const removeProject = (id) => {
  const Project = Parse.Object.extend("Projects");
  const query = new Parse.Query(Project);
  return query.get(id).then((project) => {
    project.destroy();
  });
};

export const getAllProjects = () => {
  const Project = Parse.Object.extend("Projects");
  const query = new Parse.Query(Project);
  console.log("getting all");
  return query.find().then((result) => {
    return result;
  });
};
