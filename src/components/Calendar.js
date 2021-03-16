import React from "react";

import "../styles/Calendar.css";
import Header from "../components/Header";


function Calendar() {
  const src =
    "https://calendar.google.com/calendar/embed?src=c_b7pvf9vdnpums7d709msi55qn0%40group.calendar.google.com&ctz=America%2FLos_Angeles";
  return (
    <>
      <Header />
      <div className="calendar">
        <h1>Restorative Partners Events Calendar</h1>
        <div class="calendar__body">
          <iframe
            src={src}
            style={{ border: "solid 1px #777" }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="eventsCalendar"
          />
        </div>
      </div>
    </>
  );
}

export default Calendar;
