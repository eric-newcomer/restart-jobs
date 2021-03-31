import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";

import rp_300dpi from "../img/rp_300dpi.png";
import "../styles/DeleteOpportunity.css";
import Header from "../components/Header";
import { db } from "../firebase/firebase";

function DeleteOpportunity() {
  const history = useHistory();

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [postedDate, setPostedDate] = useState("");
  const [applicationLink, setApplicationLink] = useState("");

  const op_id = history.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      const jobpost = db
        .collection("jobposts")
        .doc(op_id)
        .get()
        .then((jp) => {
          console.log("here: ", jp.data());
          setRole(jp.data().role);
          setCompany(jp.data().company);
          setLocation(jp.data().location);
          setDescription(jp.data().description);
          setPhotoUrl(jp.data().photoUrl);
          setPostedDate(jp.data().postedDate);
          setApplicationLink(jp.data().applicationLink);
          setPostedDate(jp.data().postedDate);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    };
    fetchData();
  }, []);

  
  const deleteOp = (e) => {
    e.preventDefault();
    db.collection("jobposts")
      .doc(op_id)
      .delete()
      .then(() => {
        console.log(`Document with ID=${op_id} successfully deleted`);
        alert("Opportunity was successfully deleted.");
      })
      .catch((err) => {
        console.error("Error deleting document: ", err);
      });

    history.push("/manage");
  };

  return (
    <>
      <Header />
      <div className="delete_opportunity">
        <img src={rp_300dpi} alt="main_logo" />
        <h2>Delete Opportunity</h2>
        <form action="">
          <h4>Opportunity Title:</h4>
          <p>{role}</p>
          
          <h4>Organization Name:</h4>
          <p>{company}</p>

          <h4>Organization Logo URL:</h4>
          <p>{photoUrl}</p>

          <h4>Location:</h4>
          <p>{location}</p>

          <h4>Application Link:</h4>
          <p>{applicationLink}</p>

          <h4>Description:</h4>
          <p>{description}</p>

          <button type="submit" onClick={deleteOp}>
            Delete Opportunity?
          </button>

        </form>
      </div>
    </>
  );
}

export default DeleteOpportunity;
