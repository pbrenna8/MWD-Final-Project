import Parse from "parse";

// READ operation - get all lessons in Parse class Options
export const getAllOptions = () => {
  const Options = Parse.Object.extend("Options");
  const query = new Parse.Query(Options);
  return query.find().then((results) => {
    // returns array of Option objects
    return results;
  });
};

export default getAllOptions;