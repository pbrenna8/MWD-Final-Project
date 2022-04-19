import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService";
import { useHistory, Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import Parse from "parse";

const AuthRegister = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const history = useHistory();

  let userCheck = false;
  if(Parse.User.current() !== null){
        userCheck = true;
  }
  console.log(userCheck);

  const goBackHandler = () => {
    history.goBack();
  };

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const flag = true;

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }
        // TODO: redirect user to main app
        setAdd(false);
        history.push("/");
      });
    }
  }, [newUser, add, history]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    var currentUser = Parse.User.current();
    if (currentUser) {
        // do stuff with the user
        Parse.User.logOut();
    } 
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
    {userCheck ? (       
         <div>
        <p>You already registered!</p> 
          <Link to="/Home"> <button>Home</button></Link>
          <button onClick={goBackHandler}>Go back.</button>
      </div>
    ) : (
      <div>
      <AuthForm
        user={newUser}
        flag={flag}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
    )}
  </div>
  );
};

export default AuthRegister;
