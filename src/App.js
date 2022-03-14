import './App.css';
import React from "react";
import * as Env from "./environments.js";
import Parse from "parse";
import Components from "./components/Components";

// initialize parse
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// call components
function App() {
  return (
      <Components />
  );
}

export default App;
