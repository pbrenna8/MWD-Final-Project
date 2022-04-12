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

// CREATE operation - new project with Name
export const createProject = (newProject) => {
  console.log("Creating: ", newProject.name);
  const Project = Parse.Object.extend("Projects");
  const project = new Project();
  // using setter to UPDATE the object
  project.set("name", newProject.name);
  project.set("description", newProject.description);
  project.set("leaders", newProject.leaders);
  console.log("Project: ", newProject);
  return project.save().then((result) => {
    // returns new Project object
    return result;
  }).catch((error) => {
    alert(`Error: ${error.message}`);
  });
};