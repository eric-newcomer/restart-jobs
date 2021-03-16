import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";
import "../styles/Services.css";
import Header from "../components/Header";
import { PostRow } from "../components/PostRow";
import "../styles/ManageOpportunities.css";

function ManageOpportunities() {
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
        <table>
          <tr>
            {/* <td>ID</td> */}
            <td>Date Posted</td>
            <td>Organization</td>
            <td>Role</td>
            <td>Location</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
          {jobposts.map((jp) => (
            <PostRow
              id={jp.id}
              company={jp.data.company}
              role={jp.data.role}
              location={jp.data.location}
              postedDate={formatDate(jp.data.postedDate)}
            />
          ))}
        </table>
      </div>
    </>
  );
}

export default ManageOpportunities;
