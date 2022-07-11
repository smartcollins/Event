import React from "react";
import { Circle } from "phosphor-react";

function Intro({ txt, img, nxt, skip, nxt2, nxt3 }) {
  return (
    <div className="intro">
      <div className="intro-main">
        <div className={img}></div>
      </div>
      <h2>{txt}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div className="circle">
        {nxt3 ? (
          <div>
            <Circle size={10} color={"#EBEEF2"} weight="duotone" />
            <Circle size={10} color={"#EBEEF2"} weight="duotone" />
            <Circle size={10} color={"#1EBA60"} weight="fill" />
          </div>
        ) : nxt2 ? (
          <div>
            <Circle size={10} color={"#EBEEF2"} weight="duotone" />
            <Circle size={10} color={"#1EBA60"} weight="fill" />
            <Circle size={10} color={"#EBEEF2"} weight="duotone" />
          </div>
        ) : (
          <div>
            <Circle size={10} color={"#1EBA60"} weight="fill" />
            <Circle size={10} color={"#EBEEF2"} weight="duotone" />
            <Circle size={10} color={"#EBEEF2"} weight="duotone" />
          </div>
        )}
      </div>
      <div className="end">
        <button className="nxt" onClick={nxt}>
          Next
        </button>
        <button className="nxt" onClick={skip}>
          Skip
        </button>
      </div>
    </div>
  );
}

export default Intro;
