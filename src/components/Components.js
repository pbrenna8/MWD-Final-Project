import React from "react";

// import functions needed
import  getAllOptions  from "../services/options/options.js";
import  NavBar  from "./nav-bar/NavBar.js";
import  ProjectContainer  from "./project-container/ProjectContainer.js";
import  LogIn  from "./login/LogIn.js";
import  Register  from "./register/Register.js";
import  About  from "./about/About.js";
import  Home  from "./home/Home.js";

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
      console.log(data);
      setOptions(data);
    });
  }, []);

  // set up the MPA with routing to call NavBar

  return (
    <div>
    <Router>
      <div><NavBar options={options} /></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={ProjectContainer} />
        <Route path="/Login" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
    </div>
  );
}
