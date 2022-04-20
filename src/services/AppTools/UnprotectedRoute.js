import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 


// You can pass props using the spread operator to throw them on an object if there are too many to break out
const UnprotectedRoute = ({ flag, ...rest }) => {
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
          <h1 class="about-heading">You already logged in!</h1> 
            <div class="logged-in-buttons">
            <Link to="/Home"> <button >Home</button></Link>
            <button onClick={goBackHandler}>Go back.</button>
            </div>
        </div>
       
      ) : (
        <Redirect to={rest.path} />
      )}
    </div>
  );
};

export default UnprotectedRoute;