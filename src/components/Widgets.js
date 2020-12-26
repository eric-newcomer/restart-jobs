import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "../styles/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div class="widgets__article">
      <div class="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div class="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div class="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Eric does React Tutorial", "Top news - 981 readers")}
      {newsArticle("Eric does React Tutorial", "Top news - 981 readers")}
      {newsArticle("Eric does React Tutorial", "Top news - 981 readers")}
      {newsArticle("Eric does React Tutorial", "Top news - 981 readers")}
      {newsArticle("Eric does React Tutorial", "Top news - 981 readers")}
      {newsArticle("Eric does React Tutorial", "Top news - 981 readers")}
    </div>
  );
}

export default Widgets;
