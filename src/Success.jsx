import React from "react";
import { CheckCircle,Trash, GlobeHemisphereEast } from "phosphor-react";

function Success({ top, txt, txt2, onGo, del, onBtn1, onBtn2, congrat }) {
  return (
    <div className="great">
      {
        del?
        <div>
          <button className="great-top">
            <Trash size={30} color="#ffffff" weight="fill" />
          </button>
          <div className="del">
            <h2>{top}</h2>
            <p>{txt}</p>
            <h3>{txt2}</h3>
            <div className="remove-main">
              <button onClick={onBtn1}>Cancel</button>
              <button onClick={onBtn2}>Yes,Remove</button>
            </div>
          </div>
        </div>:
        <div>
          {
            congrat?
            <button className="great-top">
              <GlobeHemisphereEast size={30} color="#ffffff" weight="fill" />
            </button>:
            <button className="great-top">
              <CheckCircle size={30} color="#ffffff" weight="fill" />
            </button>
          }
          <h2>{top}</h2>
          <p>{txt}</p>
          {
            congrat?
            <div className="del">
              <div className="remove-main">
                <button onClick={onBtn1}>Cancel</button>
                <button onClick={onBtn2}>See Fundrasing</button>
              </div>
            </div>:
            <button className="nxt" onClick={onGo}>{txt2}</button>
          }
        </div>
       } 
    </div>
  );
}

export default Success;

// React.createElement(interest.icon, { size: 30, color:"#ffffff", weight:"fill"})
