import React, { useState } from "react";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

import "../styles/AddOpportunity.css";
import Header from "../components/Header";
import { db } from "../firebase/firebase";

function AddOpportunity() {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [postedDate, setPostedDate] = useState("");

  const addNewOp = (e) => {
    e.preventDefault();
    setPostedDate(firebase.firestore.FieldValue.serverTimestamp());
    db.collection("jobposts").add({
      role: role,
      company: company,
      location: location,
      description: description,
      deadlineDate: deadlineDate,
      postedDate: postedDate,
    });

    return <Redirect to="/opportunities" />;
  };

  return (
    <>
      <Header />
      <div className="add_opportunity">
        <h2>Add an Opportunity</h2>
        <form action="">
          <h2>Opportunity Title</h2>
          <input
            type="text"
            placeholder="Ex: Technician, Student, etc."
            onChange={(e) => setRole(e.target.value)}
          />
          <h2>Organization Name</h2>
          <input
            type="text"
            placeholder="Ex: Eckerd SLO, Cuesta College, etc."
            onChange={(e) => setCompany(e.target.value)}
          />
          <h2>Location</h2>
          <input
            type="text"
            placeholder="Ex: San Luis Obispo, CA"
            onChange={(e) => setLocation(e.target.value)}
          />
          <h2>Application Deadline</h2>
          <input
            type="date"
            placeholder="Ex: 12/12/2021, etc."
            onChange={(e) => setDeadlineDate(e.target.value)}
          />
          <h2>Short Description</h2>
          <input
            type="text"
            rows="4"
            placeholder="Ex: This is a paid internship opportunity to learn how to..."
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
