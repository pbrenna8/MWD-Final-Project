import Parse from "parse";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"; 

export default function About() {
  //check manual URL typing authorization
  let flag = false;
  if(Parse.User.current() !== null){
        flag = true;
  }
  console.log(flag);

  const history = useHistory();
  const goBackHandler = () => {
    history.goBack();
  };


  // html to export to about page on Components.js
  return (
    <div>
      {flag ? (
        <div>
        
        <h1 class="about-heading">Mission Statement</h1>
        <div class="about-content">
        <div class="option">
        <div class="mission-statement">
        <p>The purpose of ICC shall be to establish a contingent of Notre Dame
            students with interest and passion in consulting through the
            coordination of engaging events and consistent development. ICC will
            do so by: </p>
            <ul> A) Organizing formal and informal mentorship opportunities
            that connect Notre Dame upperclassmen with underclassmen interested in
            consulting </ul>
            <ul> B) Establishing project work that allows ICC members to
            develop consulting skill sets while addressing real, meaningful
            problems </ul> 
            <ul> C) Educating members about the wide-ranging field of
            consulting and the steps necessary to obtain employment in this field
            through candid conversations with experienced upperclassmen</ul>
          <hr></hr>
        </div>
        <h1 class="events-heading">Upcoming Events</h1>
        <div class="event-container"> 
        <div class="item">
        <iframe src="https://calendar.google.com/calendar/embed?src=c_ha2abs70gllj6jodib6cmahab4%40group.calendar.google.com" width="100%" height="600" ></iframe>           
        </div>
        <div class="item"> 
        <div class="item-text"> 
          <h3 class="recurring-events">Recurring events: </h3>
          <ul>
          <div class="indent">General Meeting: </div> 
          
            <li class="indented-bullets">Second Tuesday of Every Month</li>
            <br></br>
            <div class="indent">Project Meetings: </div> 
            <li class="indented-bullets">South Bend Cubs: Mondays at 6PM</li> 
            
            <li class="indented-bullets">Ironhand Wine Bar: Wednesdays at 4 PM</li> 
            <li class="indented-bullets">Glamping: Thursdays at 5:15PM</li> 
          </ul>

        </div> 
        </div> 
        </div> 
          
        </div>
        </div>
      </div> 

      ) : (
        <div >
          <p class="not-authorized">You have not been authorized. Please register or log in before
            looking for a project!</p> 
            <Link to={{pathname: "/Login",state:`/LoginAuth`}}><button>Login</button></Link>
            <Link to={{pathname: "/Register",state:`/RegisterAuth`}}><button>Register</button></Link>
            <button onClick={goBackHandler}>Go back.</button>
        </div>
      )}
    </div>
  );
}
