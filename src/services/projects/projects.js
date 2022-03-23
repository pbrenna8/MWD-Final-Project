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