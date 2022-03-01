

// function that returns the html for the navigation bar with the json data
// TODO: work on the routing in feature 4 for the links in the navigation bar
export function NavBar({ options }) {
  return(
    <ul class="navigation">
      <li class="heading">Irish Consulting Club</li>
      {options.map(({option}) => (
          <li key={option} class="option">
            <Link to={`/${option}`}>{option}</Link>
          </li>
      ))}
    </ul>
  );
}
