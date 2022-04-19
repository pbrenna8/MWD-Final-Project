import React, { useEffect, useState } from "react";
import { getUser } from "./AuthService";
import { useHistory, Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import Parse from "parse";

const AuthLogin = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const history = useHistory();

  let userCheck = false;
  console.log(Parse.User.current());
  if(Parse.User.current() !== null){
      userCheck = true;
  }
  console.log(userCheck);

  const goBackHandler = () => {
    history.goBack();
  };

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const flag = false;

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (user && add) {
      getUser(user).then((userRead) => {
        if (userRead) {
          alert(`${userRead.get("firstName")}, you successfully logged in!`);
        }
        setAdd(false);
        history.push("/");
      });
    }
  }, [user, add, history]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setUser({
      ...user,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
    {userCheck ? (       
         <div>
        <p>You already logged in!</p> 
          <Link to="/Home"> <button>Home</button></Link>
          <button onClick={goBackHandler}>Go back.</button>
      </div>
    ) : (
      <div>
      <AuthForm
        user={user}
        flag={flag}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
    )}
  </div>
  );
};

export default AuthLogin;
