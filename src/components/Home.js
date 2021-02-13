import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import TodayIcon from '@material-ui/icons/Today';
import ForumIcon from '@material-ui/icons/Forum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

import "../styles/Home.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className="home">
      <h1>Welcome to Restart Jobs!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
        laoreet quam. Phasellus nec ipsum congue, laoreet ex et, suscipit
        tellus. Nulla facilisi. Aliquam sed eros nec felis aliquam euismod eget
        vel nisi. Donec aliquet dignissim mauris pellentesque facilisis.
        Maecenas tincidunt odio vitae tortor dapibus tristique. Suspendisse
        potenti. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Mauris tincidunt mi eget turpis semper,
        in vulputate neque fringilla. Ut tellus arcu, suscipit vel ultrices
        vitae, sollicitudin at lectus. Integer sed posuere justo.
      </p>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SearchIcon />}
        component={Link} to={'/opportunities'}
      >
        Search for Jobs
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<TodayIcon />}
        component={Link} to={'/calendar'}
      >
        View Calendar Events
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ForumIcon />}
        component={Link} to={'/forum'}
      >
        Community Forum
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<AccountCircleIcon />}
        component={Link} to={'/profile'}
      >
        Update Profile
      </Button>
    </div>
  );
}

export default Home;
