import React from "react";

import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import "../App.css";

function Home() {
  return (
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Home;
