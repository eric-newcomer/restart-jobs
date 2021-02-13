import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

import "../styles/Feed.css";
import JobPost from "./JobPost";
import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";

function JobFeed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [jobposts, setJobposts] = useState([]);

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

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("jobposts").where("company", "==", input);

    setInput("");
  };

  return (
    <div className="feed">
      <div class="feed__inputContainer">
        <div class="feed__input">
          <SearchIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {jobposts.map(
          ({
            id,
            data: { company, role, description, deadlineDate, postedDate, location },
          }) => (
            <JobPost
              key={id}
              company={company}
              role={role}
              description={description}
              deadlineDate={deadlineDate}
              postedDate={postedDate}
              location={location}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default JobFeed;
