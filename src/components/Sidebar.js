import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div class="sidebar__recentItem">
      <span class="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div class="sidebar__top">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ef/carlsbad.jpg?w=1100&h=600&s=1"
          alt=""
        />
        <Avatar className="sidebar__avatar" >{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        <p>My name is {user.displayName} and I am interested in many things.</p>
      </div>
      <div class="sidebar__stats">
        <div class="sidebar__stat">
          <p>Interests:</p>
          <p>888</p>
        </div>
        <div class="sidebar__stat">
          <p>Who's viewed you</p>
          <p>888</p>
        </div>
        <div class="sidebar__stat">
          <p>Who's viewed you</p>
          <p>888</p>
        </div>
        <div class="sidebar__stat">
          <p>Who's viewed you</p>
          <p>888</p>
        </div>
      </div>
      {/* <div class="sidebar__bottom">
        <p>Interests</p>
        {recentItem("coding")}
        {recentItem("software")}
        {recentItem("education")}
      </div> */}
    </div>
  );
}

export default Sidebar;
