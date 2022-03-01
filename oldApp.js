

// import functions needed
import { getOptions } from "./src/services/options/options.js.js";
import { navBar } from "./components/nav-bar/navBar.js";
import { ProjectContainer } from "./components/project-container/ProjectContainer.js";
import { LogIn } from "./components/login/login.js";
import { Register } from "./components/register/register.js";
import { About } from "./components/about/about.js";

export function App() {
  // get data
  const [options, setOptions] = useState([]);

  useEffect(() => {
    return getOptions().then((data) => {
      setOptions(data);
    });
  }, []);

  // return html for the page separated by navigation bar,
  // the list of projects, about the club, the login feature,
  // and the register feature
  return (<div>
    <div><${navBar} options="${options}" /></div>
    <div><${ProjectContainer} /></div>
    <div><${About} /></div>
    <div><${LogIn} /></div>
    <div><${Register} /></div>
    </div> );
}

// render the page
render(html`<${App} />`, document.getElementById("app"));
