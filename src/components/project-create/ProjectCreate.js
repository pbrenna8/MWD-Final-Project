import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 
import Parse from "parse";

export default function ProjectCreate({onClickHandler, onChangeHandler}) {
    let flag = false;
    if(Parse.User.current() !== null){
            flag = true;
    }
    console.log(flag);

    const history = useHistory();
    const goBackHandler = () => {
        history.goBack();
    };

    return(
        <div>
        {flag ? (
            <div>
                <form>
                Project Name:
                <input text="test" name="name" onChange={onChangeHandler} />
                Project Description:
                <input text="test" name="description" onChange={onChangeHandler} />
                Project Leaders:
                <input text="test" name="leaders" onChange={onChangeHandler} />
                <button type="submit" onClick={onClickHandler}>
                Submit
                </button>
                </form>
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