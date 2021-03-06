import React, { useEffect, useState } from "react";
import { getUser } from "./AuthService";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm";

const AuthLogin = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const history = useHistory();

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
      <h1 class="about-heading">Log In:</h1>
      <AuthForm
        user={user}
        flag={flag}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthLogin;