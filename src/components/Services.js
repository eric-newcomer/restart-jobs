import React from "react";

import "../styles/Services.css";

function Services() {
  const src =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80";
  return (
    <div className="services">
      <h1>Restorative Partners Reentry Resources</h1>
      <img src={src} alt="services"/>
      <p>
        The following resources come from Restorative Partners' reentry
        resources page.
      </p>
      <h3>SLO County Probation Department - Adult Services</h3>
      <p>1730 Bishop Street, San Luis Obispo, CA 93401</p>
      <p>(805) 781-5300</p>
      <p>Hours: M-F 8am-5pm (excluding holidays)</p>
      <p>
        <a
          href="https://www.slocounty.ca.gov/Departments/Probation"
          target="_blank"
          rel="noreferrer"
        >
          https://www.slocounty.ca.gov/Departments/Probation
        </a>
      </p>

      <h3>SLO County Probation Department - Juvenile Services Center</h3>
      <p>1065 Kansas Avenue, San Luis Obispo, CA 93401</p>
      <p>(805) 781-5352</p>
      <p>Hours: M-F 8am-5pm (excluding holidays)</p>
      <p>
        <a
          href="https://www.slocounty.ca.gov/Departments/Probation"
          target="_blank"
          rel="noreferrer"
        >
          https://www.slocounty.ca.gov/Departments/Probation
        </a>
      </p>

      <h3>SLO County Probation Department - Juvenile Hall</h3>
      <p>1065 Kansas Avenue, San Luis Obispo, CA 93401</p>
      <p>(805) 781-5389</p>
      <p>
        <a
          href="https://www.slocounty.ca.gov/Departments/Probation"
          target="_blank"
          rel="noreferrer"
        >
          https://www.slocounty.ca.gov/Departments/Probation
        </a>
      </p>

      <h3>Parole/CDCR</h3>
      <p>3232 S. Higuera Street, #102, San Luis Obispo, CA 93401</p>
      <p>(805) 549-3251</p>
      <p>
        <a href="https://www.cdcr.ca.gov/" target="_blank" rel="noreferrer">
          https://www.cdcr.ca.gov/
        </a>
      </p>
    </div>
  );
}

export default Services;
