import React, { useState } from "react";
import Fundraising from "./Fundraising";
import Donators from "./Donators";
import Send from "./Send";
import { ArrowLeft, DotsThreeVertical } from "phosphor-react";

function Thanks() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  return (
    <div>
      {back ? (
        <Fundraising />
      ) : (
        <div className="thank">
          <div className="home-top">
            <div className="back">
              <ArrowLeft
                size={30}
                color="#1EBA60"
                weight="duotone"
                onClick={onBack}
              />
              <h1>Jane Cooper</h1>
            </div>
            <div className="home-top">
              <button className="dot">
                <DotsThreeVertical size={30} color="#1EBA60" weight="duotone" />
              </button>
            </div>
          </div>
          <button>Today</button>
          <Donators
            thanks={true}
            none={true}
            img="prayer-img2"
            name="Robert Hawkins"
            amt="$19"
          />
          <div className="thank-end">
            <p>Thank you very much Jane, God bless your kindness</p>
            <p>09:41</p>
          </div>
          <Send title="Type message ..." />
        </div>
      )}
    </div>
  );
}

export default Thanks;
