import React from "react";

// import functions needed
import  getAllOptions  from "../services/options/options.js";
import  NavBar  from "./nav-bar/NavBar.js";
import  ProjectContainer  from "./project-container/ProjectContainer.js";
import  Auth from "./auth/AuthHome.js";
import  LogIn  from "./auth/AuthLogin";
import  Register  from "./auth/AuthRegister";
import  About  from "./about/About.js";
import  Home  from "./home/Home.js";
import  LogOut from "./auth/AuthLogout";
import loginCheck from "./auth/AuthUnprotected";

// import router functions
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";


export default function Components() {

  // get data
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    getAllOptions().then((data) => {
      setOptions(data);
    });
  }, []);

  // set up the MPA with routing to call NavBar
  // All auth/check routes are for authentication
  return (
    <div>
    <Router>
      <div><NavBar options={options} /></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={Auth} />
        <Route path="/AboutAuth" component={About}/>
        <Route path="/Projects" component={Auth} />
        <Route path="/ProjectsAuth" component={ProjectContainer} />
        <Route path="/Login" component={loginCheck} />
        <Route path="/LoginAuth" component={LogIn} />
        <Route path="/Register" component={loginCheck} />       
        <Route path="/RegisterAuth" component={Register} />
        <Route path="/Logout" component={LogOut} />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  );
}
