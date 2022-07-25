import React from "react";
import { CheckCircle } from "phosphor-react";

function Success({ top, txt, txt2, onGo }) {
  return (
    <div className="great">
      <button>
        <CheckCircle size={30} color="#ffffff" weight="fill" />
      </button>
      <h2>{top}</h2>
      <p>{txt}</p>
      <button className="nxt" onClick={onGo}>{txt2}</button>
    </div>
  );
}

export default Success;

// React.createElement(interest.icon, { size: 30, color:"#ffffff", weight:"fill"})
