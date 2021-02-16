import React from "react";

import JobFeed from "../components/JobFeed";
import "../App.css";

function JobFeedWrapper() {
  return (
    <div className="app__body">
      {/* <Sidebar /> */}
      <JobFeed />
    </div>
  );
}

export default JobFeedWrapper;
