import React from "react";

import JobFeed from "../components/JobFeed";
import Sidebar from "../components/Sidebar";
import "../App.css";

function JobFeedWrapper() {
  return (
    <div className="app__body">
      <Sidebar />
      <JobFeed />
      {/* <Widgets /> */}
    </div>
  );
}

export default JobFeedWrapper;
