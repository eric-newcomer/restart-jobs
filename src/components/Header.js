import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from '@material-ui/icons/Forum';
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import EventIcon from '@material-ui/icons/Event';
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
        <h2>Restart Jobs 🌳</h2>
        {/* <img
          src="https://avatars0.githubusercontent.com/u/70076380?s=200&v=4"
          alt=""
        /> */}
        
        <Link to="/" style={{ textDecoration: 'none' }}><HeaderOptions Icon={HomeIcon} title="Home" /></Link>
        <Link to="/opportunities" style={{ textDecoration: 'none' }}><HeaderOptions Icon={BusinessCenterIcon} title="Opportunities" /></Link>
        <Link to="/calendar" style={{ textDecoration: 'none' }}><HeaderOptions Icon={EventIcon} title="Calendar" /></Link>
        <Link to="/forum" style={{ textDecoration: 'none' }}><HeaderOptions Icon={ForumIcon} title="Forum" /></Link>
      </div>

      <div className="header__right">
        
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
