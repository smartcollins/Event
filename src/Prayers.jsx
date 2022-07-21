import React, { useState } from "react";
import Prayer from "./Prayer";
import Homepage from "./Homepage";
import { ArrowLeft, MagnifyingGlass, DotsThreeVertical } from "phosphor-react";

function Prayers() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  return (
    <div>
        {
            back?
            <Homepage/>:
            <div className="prayers">
                <div className="home-top">
                    <div className="back">
                    <ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack} />
                    <h1>Prayer From Good People</h1>
                    </div>
                    <button className="dot">
                    <MagnifyingGlass size={16} color="#13B157" weight="bold" />
                    </button>
                    <button className="dot">
                    <DotsThreeVertical size={16} color="#13B157" weight="fill" />
                    </button>
                </div>
                <Prayer
                    name="Esther Howard"
                    day="Today"
                    txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
                    txt2="You and 48 others sent this prayer"
                />
                <Prayer
                    name="Esther Howard"
                    day="Today"
                    txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
                    txt2="You and 48 others sent this prayer"
                />
                <Prayer
                    name="Esther Howard"
                    day="Today"
                    txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
                    txt2="You and 48 others sent this prayer"
                />
            </div>
        }
    </div>
  );
}

export default Prayers;
