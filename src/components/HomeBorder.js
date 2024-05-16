import React from "react";
import "../styles/HomeBorder.css";
import {ReactComponent as Border} from "../assets/border.svg";

function HomeBorder() {
  return (
    <Border
    loading="lazy"
    className="img"
    alt="Decorative gradient background"/>
  );
}

export default HomeBorder;
