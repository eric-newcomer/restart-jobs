import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";
import "../styles/Services.css";
import Header from "../components/Header";

function ManageOpportunities() {
   const [jobposts, setJobposts] = useState([]);

   const user = useSelector(selectUser);
 
   useEffect(() => {
     db.collection("jobposts")
       .orderBy("postedDate", "desc")
       .onSnapshot((snapshot) =>
         setJobposts(
           snapshot.docs.map((doc) => ({
             id: doc.id,
             data: doc.data(),
           }))
         )
       );
   }, []);

  return (
    <>
      <Header />
      <div className="services">
        <h1>Manage Opportunities</h1>
        <table>
           {jobposts.map(
          ({
            id,
            data: {
              company,
              role,
              description,
              postedDate,
              location,
              photoUrl,
              applicationLink,
            },
          }) => (
             <tr>
                <td>{id}</td>
                <td>{company}</td>
                <td>{role}</td>
                <td>{postedDate}</td>
                <td>{location}</td>
                <td>{photoUrl}</td>
                <td>{applicationLink}</td>
                <td>{description}</td>
             </tr>
          )
        )}
        </table>
      </div>
    </>
  );
}

export default ManageOpportunities;
