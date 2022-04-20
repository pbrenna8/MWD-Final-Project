import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 


// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ flag, ...rest }) => {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true
  return (
    <div>
      {flag ? (
        <Redirect to={rest.path} />
      ) : (
        <div>
          <p class="not-authorized">You have not been authorized. Please register or log in before
            looking for a project!</p> 
          <br></br>
          <div class="redirect-buttons"> 
            <Link to={{pathname: "/Login",state:`/LoginAuth`}}><button>Login</button></Link>
            <Link to={{pathname: "/Register",state:`/RegisterAuth`}}><button>Register</button></Link>
            <button onClick={goBackHandler}>Go back.</button>
          </div> 
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
