// import React from "react";

// function About() {
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       <p>Put the bio in here</p>
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//     </div>
//   );
// }

// export default About;


import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {<h3>I made this!</h3>}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/" />
    </div>
  );
}

export default About;
