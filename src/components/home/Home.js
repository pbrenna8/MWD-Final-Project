import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../services/AppTools/ProtectedRoute";
import Projects from "../project-container/ProjectContainer";
import Parse from "parse";

export default function Home() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const currentUser = await Parse.User.currentAsync();
      if (!currentUser) {
        alert("You need to be logged in to access this page");
        setFlag(false);
      } else {
        setFlag(true);
      }
    }
    checkUser();
  }, []);

  // html to export to about page on Components.js
  return (<div class="about">
      <h1 class="heading">Welcome to the Irish Consulting Club!</h1>
      <div>
      <ProtectedRoute exact path="/Projects" flag={flag} component={Projects} />
      </div>
    </div>);
}
