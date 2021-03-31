import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Redirect, useHistory } from "react-router-dom";

import rp_300dpi from "../img/rp_300dpi.png";
import "../styles/AddOpportunity.css";
import Header from "../components/Header";
import { db } from "../firebase/firebase";

function EditOpportunity() {
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

  
  const editOp = (e) => {
    e.preventDefault();
    db.collection("jobposts").doc(op_id).set({
      role: role,
      company: company,
      location: location,
      description: description,
      postedDate: postedDate,
      photoUrl: photoUrl,
      applicationLink: applicationLink,
    })
    .then(()=> {
      console.log(`Document with ID=${op_id} successfully updated`);
      alert("Opportunity was successfully updated.");
    })
    .catch((err) => {
      console.error("Error writing document: ", err);
    });

    history.push("/manage");
  };

  return (
    <>
      <Header />
      <div className="add_opportunity">
        <img src={rp_300dpi} alt="main_logo" />
        <h2>Edit Opportunity</h2>
        <form action="">
          <h4>Opportunity Title</h4>
          <input
            type="text"
            placeholder="Ex: Technician, Student, etc."
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
          <h4>Organization Name</h4>
          <input
            type="text"
            placeholder="Ex: Eckerd SLO, Cuesta College, etc."
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <h4>Organization Logo URL</h4>
          <input
            type="text"
            placeholder="Ex: https://apple.com/apple_logo.png"
            onChange={(e) => setPhotoUrl(e.target.value)}
            value={photoUrl}
          />
          <h4>Location</h4>
          <input
            type="text"
            placeholder="Ex: San Luis Obispo, CA"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <h4>Application Link</h4>
          <input
            type="text"
            placeholder="Ex: https://www.cuesta.edu/admissionsaid/apply/index.html"
            onChange={(e) => setApplicationLink(e.target.value)}
            value={applicationLink}
          />
          <h4>Description</h4>
          <input
            type="text"
            rows="4"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button type="submit" onClick={editOp}>
            Edit Opportunity
          </button>
        </form>
      </div>
    </>
  );
}

export default EditOpportunity;
