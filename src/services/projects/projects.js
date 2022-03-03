import Parse from "parse";
// READ operation - get all lessons in Parse class Projects
export const getAllProjects = () => {
  const Projects = Parse.Object.extend("Projects");
  const query = new Parse.Query(Projects);
  return query.find().then((results) => {
    // returns array of Project objects
    return results;
  });
};