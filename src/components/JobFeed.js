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
  const [searchedInput, setSearchedInput] = useState("");
  const [jobposts, setJobposts] = useState([]);

  // db.collection("jobposts")
  //     .orderBy("postedDate", "desc")
  //     .onSnapshot((snapshot) =>
  //       setJobposts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );

  useEffect(() => {
    setInput("");
    setSearchedInput("");
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

  const fixCaps = (inp) =>
    inp[0].toUpperCase().concat(inp.slice(1).toLowerCase());

  const searchOps = (e) => {
    // Prevent searching empty input
    e.preventDefault();

    // Query the database using "where"
    db.collection("jobposts")
      .where("company", "==", fixCaps(input))
      .orderBy("postedDate", "desc")
      .onSnapshot((snapshot) =>
        setJobposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    const copiedInput = input;
    setSearchedInput(copiedInput);
    //setInput("");
  };

  return (
    <div className="feed">
      <h1>Opportunity Search</h1>
      <div class="feed__inputContainer">
        <div class="feed__input">
          <SearchIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search all jobs"
            />
            <button onClick={searchOps} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      {searchedInput != "" && searchedInput == input ? (
        <h3>Showing results for "{input}"</h3>
      ) : (
        <p></p>
      )}
      {/* Posts */}
      <FlipMove>
        {jobposts.map(
          ({
            id,
            data: {
              company,
              role,
              description,
              deadlineDate,
              postedDate,
              location,
            },
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
