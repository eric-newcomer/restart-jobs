import React from "react";

import Feed from "../components/Feed";
import JobFeed from "../components/JobFeed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
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
