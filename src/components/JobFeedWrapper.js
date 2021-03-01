import React from "react";

import JobFeed from "../components/JobFeed";
import Header from "../components/Header";
import "../App.css";

function JobFeedWrapper() {
  return (
    <>
      <Header />
      <div className="app__body">
        {/* <Sidebar /> */}
        <JobFeed />
      </div>
    </>
  );
}

export default JobFeedWrapper;
