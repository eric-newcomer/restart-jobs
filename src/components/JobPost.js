import React, { forwardRef } from "react";
import LaunchIcon from "@material-ui/icons/Launch";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import InfoIcon from "@material-ui/icons/Info";
import firebase from "firebase";

import "../styles/Post.css";
import InputOption from "./InputOption";
import { db } from "../firebase/firebase";

const formatDate = (date) => {
  if (!date) {
    return null;
  }
  const d_date = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  const year = d_date.getYear().toString().slice(1);
  const new_date = d_date.getMonth() + 1 + "/" + d_date.getDate() + "/" + year;
  return new_date;
};


const JobPost = forwardRef(
  (
    {
      company,
      role,
      description,
      location,
      photoUrl,
      postedDate,
      applicationLink,
      user,
    },
    ref
  ) => {
    const p_date = formatDate(postedDate);
    console.log("ref: ", ref);
    return (
      <div ref={ref} className="post">
        <div class="post__header">
          <img src={photoUrl} alt="opportunity-logo" />
          <div class="post__info">
            <h2>{role}</h2>
            <h4>{company}</h4>
            <h4>{location}</h4>
            <p>Posted On: {p_date}</p>
          </div>
        </div>
        <div class="post__body">
          <p>{description}</p>
        </div>
        <div class="post__buttons">
          {!user ? (
            <>
              <a href={applicationLink} target="_blank" rel="noreferrer">
                <InputOption Icon={LaunchIcon} title="Apply" color="gray" />
              </a>
              <InputOption Icon={InfoIcon} title="More Info" color="gray" />
            </>
          ) : (
            <>
              <a href={applicationLink} target="_blank" rel="noreferrer">
                <InputOption Icon={LaunchIcon} title="Apply" color="gray" />
              </a>
              <InputOption Icon={InfoIcon} title="More Info" color="gray" />
              <a onClick={()=>alert("hi!")}>
                <InputOption Icon={DeleteIcon} title="Delete" color="red" />
              </a>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default JobPost;
