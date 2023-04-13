import React from "react";
import { ArrowLeft, Circle } from "phosphor-react";

function Pin({ onCreateBack, top, txt, txt2, btn, onCreatePin }) {

  const circleAry = [
    { size: 16, color: "#1EBA60", weight: "fill" },
    { size: 16, color: "#1EBA60", weight: "fill" },
    { size: 16, color: "#1EBA60", weight: "fill" },
    { size: 16, color: "#1EBA60", weight: "fill" },
    { size: 16, color: "#E6E6E6", weight: "fill" },
    { size: 16, color: "#E6E6E6", weight: "fill" }
  ]

  const circle = circleAry.map((item, idx) => <Circle key={idx} {...item} />)

  return (
    <div className="Pin">
      <div className="back">
        <ArrowLeft
          size={30}
          color="#2fe22c"
          weight="duotone"
          onClick={onCreateBack}
        />
        <h1>{top}</h1>
      </div>
      <p>{txt}</p>
      <div className="create">
        <h2>{txt2}</h2>
        <div className="pin">
          {/* <Circle size={16} color="#1EBA60" weight="fill" />
          <Circle size={16} color="#1EBA60" weight="fill" />
          <Circle size={16} color="#1EBA60" weight="fill" />
          <Circle size={16} color="#1EBA60" weight="fill" />
          <Circle size={16} color="#E6E6E6" weight="fill" />
          <Circle size={16} color="#E6E6E6" weight="fill" /> */}
          {circle}
        </div>
        <button className="nxt" onClick={onCreatePin}>
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Pin;
