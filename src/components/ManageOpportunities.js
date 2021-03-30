import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";
import "../styles/Services.css";
import Header from "../components/Header";
import { PostRow } from "../components/PostRow";
import "../styles/ManageOpportunities.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ManageOpportunities() {
  const classes = useStyles();
  const [jobposts, setJobPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("jobposts")
        .orderBy("postedDate", "desc")
        .get();
      setJobPosts(data.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    if (!date) {
      return null;
    }
    const d_date = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
    const year = d_date.getYear().toString().slice(1);
    const new_date =
      d_date.getMonth() + 1 + "/" + d_date.getDate() + "/" + year;
    return new_date;
  };

  console.log(jobposts);
  return (
    <>
      <Header />
      <div className="manage">
        <h1>Manage Opportunities</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date Posted</TableCell>
                <TableCell align="right">Organization</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobposts.map((jp) => (
                <PostRow
                  id={jp.id}
                  company={jp.data.company}
                  role={jp.data.role}
                  location={jp.data.location}
                  postedDate={formatDate(jp.data.postedDate)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    </>
  );
}

export default ManageOpportunities;
