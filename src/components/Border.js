import React from "react";
import {ReactComponent as BorderImg} from "../assets/border.svg";

function Border() {
  return (
    <>
      <BorderImg
        loading="lazy"
        className="img"
        alt="Decorative gradient background"
      />
      <style jsx="true">{`
        .img {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Border;
