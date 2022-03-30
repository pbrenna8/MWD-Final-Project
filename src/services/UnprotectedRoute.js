import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 


// You can pass props using the spread operator to throw them on an object if there are too many to break out
const UnprotectedRoute = ({ component: Component, flag, ...rest }) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <div>
      {flag ? (       
           <div>
          <p>You already logged in!</p> 
            <Link to="/Home"> <button>Home</button></Link>
            <button onClick={goBackHandler}>Go back.</button>
        </div>
       
      ) : (
        <Redirect to={rest.path} />
      )}
    </div>
  );
};

export default UnprotectedRoute;