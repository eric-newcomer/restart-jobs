import React from "react";

import "../styles/Services.css";
import reentry_qr_code from "../img/reentry_qr_code.png";
import Header from "../components/Header";

function Services() {
  const src =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80";
  return (
    <>
      <Header />
      <div className="services">
        <h1>Reentry Resources</h1>
        <img src={reentry_qr_code} alt="qr_code" />
        <p>
          Scan the QR code above or click the link below to see Restorative
          Partners' Reentry Resources!
        </p>
        <h3>
          <a
            href="https://restorativepartners.org/reentry-resources/"
            target="_blank"
            rel="noreferrer"
          >
            https://restorativepartners.org/reentry-resources/
          </a>
        </h3>
        
      </div>
    </>
  );
}

export default Services;
