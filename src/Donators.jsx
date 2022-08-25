import React from "react";
import {SmileyWink} from "phosphor-react";

function Donators({img,name,anym, thanks, amt, onThanks, none}){
    return (
      <div>
        {thanks ? (
          <div className="thanks">
            <div>
              {thanks&&anym?
                <SmileyWink className="ayms" size={30} color="#ffffff" />:
                <div className={img}></div>
              }
              <p>
                <b>{thanks&&anym?"Anonymous":name}</b> has donated <span>{amt}</span>
              </p>
            </div>
            {none ? null : <button onClick={onThanks} className="unclicked">Say Thanks</button>}
          </div>
        ) : (
          <div>
            <div className="donators">
              {anym?
                <SmileyWink className="ayms" size={30} color="#ffffff" />:
                <div className={img}></div>
              }
              {anym?
                <h3>Anonoyms</h3>:
                <h3>{name}</h3>
              }
            </div>
          </div>
        )}
      </div>
    );
}

export default Donators;