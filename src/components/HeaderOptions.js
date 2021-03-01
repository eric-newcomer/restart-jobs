import React from "react";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

import "../styles/HeaderOptions.css";
import { selectUser } from "../features/userSlice";

function HeaderOptions({ avatar, Icon, title, onClick }) {
   const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && <Avatar className="headerOptions__icon">{}</Avatar>}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
