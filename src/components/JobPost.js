import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import "../styles/Post.css";
import InputOption from "./InputOption";

const JobPost = forwardRef(({ company, role, description, deadlineDate, postedDate, salary, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div class="post__header">
        <Avatar src={photoUrl}>Job</Avatar>
        <div class="post__info">
          <h2>{role}</h2>
          <h3>{company}</h3>
          <h4>location</h4>
        </div>
      </div>
      <div class="post__body">
        <p>{description}</p>
      </div>
      <div class="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
})

export default JobPost;
