import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";

import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";
import "../styles/Services.css";
import Header from "../components/Header";
import { Button } from "@material-ui/core";

export const PostRow = ({ id, company, role, location, postedDate }) => {
  const history = useHistory();

  const goToEdit = (e) => {
    e.preventDefault();
    console.log("ID: ", id);
    const jobpost = db
      .collection("jobposts")
      .doc(id.toString())
      .get()
      .then((jp) => {
        console.log(jp.data());
      })
      .catch((err) => {
        console.log("ERROR");
      });
    history.push(`/edit/${id}`);
  };

  return (
    <>
      <TableRow key={id}>
        <TableCell component="th" scope="row">
          {postedDate}
        </TableCell>
        <TableCell align="right">{company}</TableCell>
        <TableCell align="right">{role}</TableCell>
        <TableCell align="right">{location}</TableCell>
        <TableCell align="right">
          <Button onClick={goToEdit}>Edit</Button>
          <Button>Delete</Button>
        </TableCell>
      </TableRow>
    </>
  );
};
