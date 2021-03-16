import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

import "../styles/Feed.css";
import JobPost from "./JobPost";
import { db } from "../firebase/firebase";
import { selectUser } from "../features/userSlice";

function JobFeed() {
  // const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [searchedInput, setSearchedInput] = useState("");
  const [jobposts, setJobposts] = useState([]);
  const [searchState, setSearchState] = useState("role");

  const user = useSelector(selectUser);

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

  const fixCaps = (inp) => {
    if (inp.length == 0) return "";
    const res = inp[0].toUpperCase().concat(inp.slice(1).toLowerCase());
    console.log(res);
    return res;
  };

  const searchOps = (e) => {
    // Prevent searching empty input
    e.preventDefault();
    if (searchState === "organization") {
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
    } else {
      // state == role
      // Query the database using "where"
      db.collection("jobposts")
        .where("role", "==", fixCaps(input))
        .orderBy("postedDate", "desc")
        .onSnapshot((snapshot) =>
          setJobposts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
    const copiedInput = input;
    setSearchedInput(copiedInput);
    //setInput("");
  };

  const handleState = () => {
    console.log("State change!");
    if (searchState === "role") {
      setSearchState("organization");
    } else {
      setSearchState("role");
    }
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
              placeholder="Search all opportunities"
            />
            <select name="states" id="states" onChange={handleState}>
              <option value="role">role</option>
              <option value="organization">organization</option>
            </select>
            <button onClick={searchOps} type="submit">
              Search
            </button>
          </form>
        </div>
        {/* <button onClick={setSearchState('role')} /> */}
      </div>
      {searchedInput != "" && searchedInput == input ? (
        <h3>Showing results for "{input}"</h3>
      ) : (
        <p></p>
      )}
      {/* <>
        <h1>Search State: {searchState}</h1>
      </> */}
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
              photoUrl,
              applicationLink,
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
              photoUrl={photoUrl}
              applicationLink={applicationLink}
              user={user}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default JobFeed;
