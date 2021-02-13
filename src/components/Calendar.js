import React from "react";

import "../styles/Calendar.css";

function Calendar() {
  const src =
    "https://calendar.google.com/calendar/embed?src=kl1eueuhsblkvlc6rosfue82mo%40group.calendar.google.com&ctz=America%2FLos_Angeles";
  return (
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
  );
}

export default Calendar;
