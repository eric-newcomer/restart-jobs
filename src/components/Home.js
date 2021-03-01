import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TodayIcon from "@material-ui/icons/Today";
import ForumIcon from "@material-ui/icons/Forum";
import GroupIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import Header from "../components/Header";
import rp_icon_300dpi from "../img/rp_icon_300dpi.png";
import rp_300dpi from "../img/rp_300dpi.png";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    height: "30vh",
    width: "30vw",
  },
}));

function Home() {
  const classes = useStyles();
  const bannerImg =
    "https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvYmFubmVycy9vcmlnaW5hbC8xMDU4ODY2LzE0OTkyNjcxODVfMTU0NDIyOTRfMTg0NTc4MzY0NTYzNzIwN183MjU4MDEwNjg1NjIzNDkyNDhfbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjExMjAsImhlaWdodCI6MzA0fX19";
  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome to Restart Jobs!</h1>
        <img src={rp_icon_300dpi} alt="banner-main" />
        <div className="home__row">
          <Link to="/opportunities" style={{ textDecoration: "none" }}>
            <div className="home__button">
              <SearchIcon className="home__button_icon" />
              <h3>Search for Jobs</h3>
            </div>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <div className="home__button">
              <TodayIcon className="home__button_icon" />
              <h3>View Calendar Events</h3>
            </div>
          </Link>
        </div>
        <div className="home__row">
          <Link to="/forum" style={{ textDecoration: "none" }}>
            <div className="home__button">
              <ForumIcon className="home__button_icon" />
              <h3>Community Forum</h3>
            </div>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <div className="home__button">
              <GroupIcon className="home__button_icon" />
              <h3>Services Page</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
