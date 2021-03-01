import React from "react";

import "../styles/Forum.css";
import Header from "../components/Header";


function Forum() {
  const src =
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
  return (
    <>
      <Header />
      <div className="forum">
        <h1>Restart Jobs Community Forum</h1>
        <img src={src} alt="forum" />
        <p>
          The Restart Jobs Community Forum is a place for clients of Restorative
          Partners to connect, give advice, and share opportunities that others
          might find helpful. The forum comes in the form of a Facebook group
          that can be found at the link below:
        </p>
        <p>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Link to Community Forum
          </a>
        </p>
      </div>
    </>
  );
}

export default Forum;
