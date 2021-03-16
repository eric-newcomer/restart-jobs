import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";
import "../styles/Services.css";
import Header from "../components/Header";

export const PostRow = ({ id, company, role, location, postedDate }) => {
  return (
    <>
      <tr>
         {/* <td>{id}</td> */}
        <td>{postedDate}</td>
        <td>{company}</td>
        <td>{role}</td>
        <td>{location}</td>
      </tr>
    </>
  );
};
