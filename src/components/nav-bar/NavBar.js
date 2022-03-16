import React from "react"; 
import { Link } from "react-router-dom";

// function that returns the html for the navigation bar with the json data
export default function NavBar({ options }) {
  return(
    <div>
    <ul className="navigation">
      <li className="heading">Irish Consulting Club</li>
      {options.map((option) => (
          <li key={option.id} className="option">
            <Link to={`/${option.get("option")}`}>{option.get("option")}</Link>
          </li>
      ))}
    </ul>
    </div>
  );
}
