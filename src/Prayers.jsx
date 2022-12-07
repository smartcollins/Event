import React, { useState } from "react";
import Prayer from "./Prayer";
import Homepage from "./Homepage";
import Send from "./Send";
import { ArrowLeft, MagnifyingGlass, DotsThreeVertical } from "phosphor-react";

function Prayers() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  return (
    <div>
      {back ? (
        <Homepage />
      ) : (
        <div className="prayers">
          <div className="home-top">
            <div className="back">
              <ArrowLeft
                size={30}
                color="#1EBA60"
                weight="duotone"
                onClick={onBack}
              />
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
            img="prayer-img"
            name="Esther Howard"
            day="Today"
            txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
            txt2="You and 48 others sent this prayer"
          />
          <Prayer
            img="prayer-img2"
            name="Cameroon Williams"
            day="Today"
            txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
            txt2="You and 158 others sent this prayer"
          />
          <Prayer
            img="prayer-img3"
            name="Jane Copper"
            day="Today"
            txt="Hopefully the victims affected by flash flood disaster in Surabaya will soon get better and be healthy"
            txt2="You and 126 others sent this prayer"
          />
          <Prayer
            img="prayer-img4"
            name="Jenny Willson"
            day="Today"
            txt="Hopefully the orphans in Africa can get treatment and nurtriton improvement soon.."
            txt2="You and 118 others sent this prayer"
          />
          <Send title="Send your prayers ..." />
        </div>
      )}
    </div>
  );
}

export default Prayers;
