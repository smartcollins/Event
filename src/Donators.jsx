import React from "react";
import {SmileyWink,Smiley} from "phosphor-react";

function Donators({img,name,anym, thanks, amt}){
    return (
      <div>
        {thanks ? (
          <div className="thanks">
            <div>
              <div className={img}></div>
              <p>
                <strong>
                  {name} has donated <span>{amt}</span>
                </strong>
              </p>
            </div>
            <button className="unclicked">Say Thanks</button>
          </div>
        ) : anym ? (
          <div>
            <div className="donator-ayms">
              <div>
                <SmileyWink size={30} color="#ffffff" />
              </div>
              <h3>Anonymous</h3>
            </div>
          </div>
        ) : (
          <div>
            <div className="donators">
              <div className={img}></div>
              <h3>{name}</h3>
            </div>
          </div>
        )}
      </div>
    );
}

export default Donators;