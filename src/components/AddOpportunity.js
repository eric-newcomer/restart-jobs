import React, { useState } from "react";
import firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";

import rp_300dpi from "../img/rp_300dpi.png";
import "../styles/AddOpportunity.css";
import Header from "../components/Header";
import { db } from "../firebase/firebase";

function AddOpportunity() {

  const history = useHistory();

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [postedDate, setPostedDate] = useState(new Date());
  const [applicationLink, setApplicationLink] = useState("");

  const addNewOp = (e) => {
    e.preventDefault();
    setPostedDate(firebase.firestore.FieldValue.serverTimestamp());
    db.collection("jobposts").add({
      role: role,
      company: company,
      location: location,
      description: description,
      postedDate: postedDate,
      photoUrl: photoUrl,
      applicationLink: applicationLink,
    });

    history.push("/opportunities");
  };

  return (
    <>
      <Header />
      <div className="add_opportunity">
        <img src={rp_300dpi} alt="main_logo" />
        <h2>Add an Opportunity</h2>
        <form action="">
          <h4>Opportunity Title</h4>
          <input
            type="text"
            placeholder="Ex: Technician, Student, etc."
            onChange={(e) => setRole(e.target.value)}
          />
          <h4>Organization Name</h4>
          <input
            type="text"
            placeholder="Ex: Eckerd SLO, Cuesta College, etc."
            onChange={(e) => setCompany(e.target.value)}
          />
          <h4>Organization Logo URL</h4>
          <input
            type="text"
            placeholder="Ex: https://apple.com/apple_logo.png"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <h4>Location</h4>
          <input
            type="text"
            placeholder="Ex: San Luis Obispo, CA"
            onChange={(e) => setLocation(e.target.value)}
          />
          <h4>Application Link</h4>
          <input
            type="text"
            placeholder="Ex: https://www.cuesta.edu/admissionsaid/apply/index.html"
            onChange={(e) => setApplicationLink(e.target.value)}
          />
          <h4>Description</h4>
          <input
            type="text"
            rows="4"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" onClick={addNewOp}>
            Add New Opportunity
          </button>
        </form>
      </div>
    </>
  );
}

export default AddOpportunity;
