import React from "react";

import "../styles/Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Header from "../components/Header";

function Profile() {
  const user = useSelector(selectUser);
  const src =
    "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
  return (
    <>
      <Header />
      <div className="profile">
        <h1>Profile</h1>
        <h2>Name: {user.displayName}</h2>
        <img src={src} alt="profilePicture" />
      </div>
    </>
  );
}

export default Profile;
