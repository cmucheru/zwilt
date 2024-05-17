import React from "react";
import "../styles/Border.css";
import {ReactComponent as BorderImg} from "../assets/border.svg";

function Border() {
  return (
    <BorderImg
    loading="lazy"
    className="img"
    alt="Decorative gradient background"/>
  );
}

export default Border;
