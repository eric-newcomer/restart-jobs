import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import AddIcon from "@material-ui/icons/Add";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "../styles/Header.css";
import rp_300dpi from "../img/rp_300dpi.png";
import HeaderOptions from "./HeaderOptions";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase/firebase";
import { ExitToApp } from "@material-ui/icons";

function Header() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const loginToApp = () => history.push("/login");

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <>
      {!user ? (
        <>
          <div className="header">
            <div className="header__left">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img src={rp_300dpi} alt="logo_main" className="header__img" />
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={HomeIcon} title="Home" />
              </Link>
              <Link to="/opportunities" style={{ textDecoration: "none" }}>
                <HeaderOptions
                  Icon={BusinessCenterIcon}
                  title="Opportunities"
                />
              </Link>
              <Link to="/calendar" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={EventIcon} title="Calendar" />
              </Link>
              <Link to="/forum" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={ForumIcon} title="Forum" />
              </Link>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={GroupIcon} title="Services" />
              </Link>
              {/* {user.isAdmin === true ? <h1>user is admin</h1> : <p>{user.isAdmin}</p>} */}
            </div>

            <div className="header__right">
              <HeaderOptions
                avatar="https://avatars2.githubusercontent.com/u/20120289?s=460&u=bd9cc7c182ebfd45566b8f5e5b6025980a5fb8d1&v=4"
                title="Admin Login"
                onClick={loginToApp}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header">
            <div className="header__left">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img src={rp_300dpi} alt="logo_main" className="header__img" />
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={HomeIcon} title="Home" />
              </Link>
              <Link to="/opportunities" style={{ textDecoration: "none" }}>
                <HeaderOptions
                  Icon={BusinessCenterIcon}
                  title="Opportunities"
                />
              </Link>
              <Link to="/calendar" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={EventIcon} title="Calendar" />
              </Link>
              <Link to="/forum" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={ForumIcon} title="Forum" />
              </Link>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={GroupIcon} title="Services" />
              </Link>
              <Link to="/manage" style={{ textDecoration: "none" }}>
                <HeaderOptions
                  Icon={AssignmentIcon}
                  title="Manage Opportunities"
                />
              </Link>
              <Link to="/add-opportunity" style={{ textDecoration: "none" }}>
                <HeaderOptions Icon={AddIcon} title="Add Opportunity" />
              </Link>
              {/* {user.isAdmin === true ? <h1>user is admin</h1> : <p>{user.isAdmin}</p>} */}
            </div>

            <div className="header__right">
              {/* <Link to="profile" style={{ textDecoration: "none" }}>
                <HeaderOptions
                  avatar="https://avatars2.githubusercontent.com/u/20120289?s=460&u=bd9cc7c182ebfd45566b8f5e5b6025980a5fb8d1&v=4"
                  title="Profile"
                />
              </Link> */}
              <HeaderOptions
                Icon={ExitToApp}
                title="Logout"
                onClick={logoutOfApp}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
