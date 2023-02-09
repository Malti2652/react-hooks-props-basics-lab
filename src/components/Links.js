import React from "react";

function Links(props) {
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={props.github}>Github</a>
      <a href={props.linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;
