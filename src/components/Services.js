import React from "react";

import "../styles/Services.css";

function Services() {
  const src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  return (
    <div className="services">
      <h1>Restorative Partners Reentry Resources</h1>
      <img src={src} />
      <p>
        The following resources come from Restorative Partners' reentry
        resources page. 
      </p>
      
    </div>
  );
}

export default Services;
