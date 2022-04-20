import { useHistory } from "react-router-dom";
import Parse from "parse";

// give the user the option to log out
const AuthLogout = () => {
    const history = useHistory();
    const onClickHandler = () => {
        var currentUser = Parse.User.current();
        if (currentUser) {
            Parse.User.logOut();
        } 
        history.push("/");
    }
    return (
        <div>
            <button onClick ={onClickHandler}>Are you sure?</button>
        </div>
    );
};

export default AuthLogout;