import { Link } from "react-router-dom";

// function that returns the html for the navigation bar with the json data
// TODO: work on the routing in feature 4 for the links in the navigation bar
export default function NavBar({ options }) {
  return(
    <ul class="navigation">
      <li class="heading">Irish Consulting Club</li>
      {options.map((option) => (
          <li key={option.id} class="option">
            <Link to={`/${option.get("option")}`}>{option.get("option")}</Link>
          </li>
      ))}
    </ul>
  );
}
