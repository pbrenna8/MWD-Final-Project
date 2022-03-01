import React from "react";

// import functions needed
import  getOptions  from "./src/services/options/options.js";
import  NavBar  from "./components/nav-bar/NavBar.js";
import  ProjectContainer  from "./components/project-container/ProjectContainer.js";
import  LogIn  from "./components/login/LogIn.js";
import  Register  from "./components/register/Register.js";
import  About  from "./components/about/About.js";
import  Home  from "./components/home/Home.js";

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
    return getOptions().then((data) => {
      setOptions(data);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={ProjectContainer} />
        <Route path="/Login" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Redirect to="/" />
      </Switch>
      <div><NavBar options={options} /></div>
    </Router>
  );
}
