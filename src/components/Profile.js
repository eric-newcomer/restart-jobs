import React from "react";

import "../styles/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";


function Profile() {
   const user = useSelector(selectUser);
  const src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  return (
    <div className="forum">
      <h1>Profile</h1>
      <h2>Name: {user.displayName}</h2>
      <p>
        The Restart Jobs Community Forum is a place for clients of Restorative
        Partners to connect, give advice, and share opportunities that others
        might find helpful. The forum comes in the form of a Facebook group that
        can be found at the link below:
      </p>
      <p>
      <a href="https://www.facebook.com/" target="_blank">
        Link to Community Forum
      </a>
      </p>
    </div>
  );
}

export default Profile;
