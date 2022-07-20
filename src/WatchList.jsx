import React, { useState } from "react";
import Homepage from "./Homepage";
import WatchItem from "./WatchItem";
import { ArrowLeft, DotsThreeVertical, PlayCircle } from "phosphor-react";

function WatchList({ img, txt }) {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  return (
    <div>
      {back ? (
        <Homepage />
      ) : (
        <div>
          <div className="home-top">
            <div className="back">
              <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
              <h1>Watch the Impact of Your Doantion</h1>
            </div>
            <button className="dot">
              <DotsThreeVertical size={30} color="#1EBA60" />
            </button>
          </div>
          <div className="watch-main-video">
            <WatchItem
              img="watch-main"
              txt="Help Improve Nutrition on Africa"
            />
            <WatchItem
              img="watch-main2"
              txt="Help Improve Nutrition on Africa"
            />
            <WatchItem
              img="watch-main3"
              txt="Help Improve Nutrition on Africa"
            />
            <WatchItem
              img="watch-main4"
              txt="Help Improve Nutrition on Africa"
            />
            <WatchItem
              img="watch-main5"
              txt="Help Improve Nutrition on Africa"
            />
            <WatchItem
              img="watch-main6"
              txt="Help Improve Nutrition on Africa"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchList;
