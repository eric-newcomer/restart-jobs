import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TodayIcon from "@material-ui/icons/Today";
import ForumIcon from "@material-ui/icons/Forum";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import rp_icon_300dpi from "../img/rp_icon_300dpi.png";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();
  const bannerImg =
    "https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvYmFubmVycy9vcmlnaW5hbC8xMDU4ODY2LzE0OTkyNjcxODVfMTU0NDIyOTRfMTg0NTc4MzY0NTYzNzIwN183MjU4MDEwNjg1NjIzNDkyNDhfbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjExMjAsImhlaWdodCI6MzA0fX19";
  return (
    <div className="home">
      <h1>Welcome to Restart Jobs!</h1>
      <img src={rp_icon_300dpi} alt="banner-main" />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SearchIcon />}
        component={Link}
        to={"/opportunities"}
      >
        Search for Jobs
      </Button>
      <Button
        variant="contained"
        color="primary-light"
        size="large"
        className={classes.button}
        startIcon={<TodayIcon />}
        component={Link}
        to={"/calendar"}
      >
        View Calendar Events
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ForumIcon />}
        component={Link}
        to={"/forum"}
      >
        Community Forum
      </Button>
      <Button
        variant="contained"
        color=""
        size="large"
        className={classes.button}
        startIcon={<AccountCircleIcon />}
        component={Link}
        to={"/profile"}
      >
        Update Profile
      </Button>
    </div>
  );
}

export default Home;
