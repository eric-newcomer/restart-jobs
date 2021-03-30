import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";
import "../styles/Services.css";
import Header from "../components/Header";
import { Button } from "@material-ui/core";

export const PostRow = ({ id, company, role, location, postedDate }) => {
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
          <Button>Edit</Button>
          <Button>Delete</Button>
        </TableCell>
      </TableRow>
      
    </>
  );
};
