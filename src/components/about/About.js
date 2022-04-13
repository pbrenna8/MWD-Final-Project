import Parse from "parse";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 

export default function About() {
  let flag = false;
  if(Parse.User.current() !== null){
        flag = true;
  }
  console.log(flag);

  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };
  // html to export to about page on Components.js
  return (
    <div>
      {flag ? (
        <div class="about">
        <h1 class="heading">About</h1>
        <div class="option">
          <p>
            The purpose of ICC shall be to establish a contingent of Notre Dame
            students interested in and passionate about consulting through the
            coordination of engaging events and consistent development. ICC will
            do so by: A) Organizing formal and informal mentorship opportunities
            that connect Notre Dame upperclassmen with underclassmen interested in
            consulting, B) Establishing project work that allows ICC members to
            develop consulting skill sets while addressing real, meaningful
            problems, C) Educating members about the wide-ranging field of
            consulting and the steps necessary to obtain employment in this field
            through candid conversations with experienced upperclassmen.
          </p>
        </div>
        </div>
      ) : (
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
