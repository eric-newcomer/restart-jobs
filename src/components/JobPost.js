import React, { forwardRef } from "react";
import LaunchIcon from '@material-ui/icons/Launch';
import GradeIcon from '@material-ui/icons/Grade';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import "../styles/Post.css";
import InputOption from "./InputOption";

const JobPost = forwardRef(({ company, role, description, location, photoUrl, deadlineDate, postedDate, salary }, ref) => {
  return (
    <div ref={ref} className="post">
      <div class="post__header">
        {/* TODO: use photoUrl */}
        <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="google-logo"/>
        <div class="post__info">
          <h2>{role}</h2>
          <h3>{company}</h3>
          <h4>{location}</h4>
        </div>
      </div>
      <div class="post__body">
        <p>{description}</p>
      </div>
      <div class="post__buttons">
        <InputOption Icon={LaunchIcon} title="Apply" color="gray" />
        <InputOption Icon={GradeIcon} title="Save" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
      </div>
    </div>
  );
})

export default JobPost;
