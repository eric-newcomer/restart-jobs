import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import "../styles/Header.css";
import HeaderOptions from "./HeaderOptions";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase/firebase";
import { ExitToApp } from "@material-ui/icons";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        {/* <h2>Restart Jobs</h2> */}
        <img
          src="https://avatars0.githubusercontent.com/u/70076380?s=200&v=4"
          alt=""
        />
        <div class="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <Link to="/" style={{ textDecoration: 'none' }}><HeaderOptions Icon={HomeIcon} title="Home" /></Link>
        <Link to="/network" style={{ textDecoration: 'none' }}><HeaderOptions Icon={SupervisorAccountIcon} title="My Network" /></Link>
        <Link to="/jobs" style={{ textDecoration: 'none' }}><HeaderOptions Icon={BusinessCenterIcon} title="Jobs" /></Link>
        <Link to="messages" style={{ textDecoration: 'none' }}><HeaderOptions Icon={ChatIcon} title="Messaging" /></Link>
        <Link to="/notifications" style={{ textDecoration: 'none' }}><HeaderOptions Icon={NotificationsIcon} title="Notifications" /></Link>
        <Link to="profile" style={{ textDecoration: 'none' }}><HeaderOptions
          avatar="https://avatars2.githubusercontent.com/u/20120289?s=460&u=bd9cc7c182ebfd45566b8f5e5b6025980a5fb8d1&v=4"
          title="Profile"
        /></Link>
        <HeaderOptions
          Icon={ExitToApp}
          title="Logout"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
