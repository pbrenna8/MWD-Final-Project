// import the function that lists projects
import ProjectList from "./project-list/ProjectList.js";
import Parse from "parse";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 

// container for the project cards
export default function ProjectContainer() {
  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };
  let flag = false;
  if(Parse.User.current() !== null){
        flag = true;
  }
  console.log(flag);

  return(
    <div>
      {flag ? ( <div><ProjectList/></div>) : (
        <div>
          <p>You have not been authorized. Please Register or Log In before
            looking for a project!</p> 
            <Link to={{pathname: "/Login",state:`/LoginAuth`}}><button>Login</button></Link>
            <Link to={{pathname: "/Register",state:`/RegisterAuth`}}><button>Register</button></Link>
            <button onClick={goBackHandler}>Go back.</button>
        </div>
      )}
    </div>
  );
}
