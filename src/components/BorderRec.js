import * as React from "react";

function Image({ src, alt }) {
  return (
    <img loading="lazy" src={src} alt={alt} className="img" />
  );
}

function BorderRec() {
  return (
    <>
      <style jsx>{`
        .img {
          aspect-ratio: 20;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: #0c0c0c;
        }
      `}</style>

      <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/0511dee2f011105223b656ca25476039ae8f948d7f965ff6c1d5e6f19f2a0558?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" />
    </>
  );
}

export default BorderRec;