import React, { useState } from "react";
import Homepage from "./Homepage";
import WatchItem from "./WatchItem";
import { ArrowLeft, DotsThreeVertical, PlayCircle } from "phosphor-react";
import Watchfull from "./WatchFull";

function WatchList({ img, txt }) {
  const [back, setBack] = useState(false);
  const [play, setPlay] = useState(false);

  function onBack() {
    setBack(true);
  }

  function onPlay() {
    setPlay(true);
  }

  return (
    <div>
      {back ? (
        <Homepage />
      ) : play ? (
        <Watchfull />
      ) : (
        <div className="watch">
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
              onPlay={onPlay}
            />
            <WatchItem
              img="watch-main2"
              txt="Siamese Twins Surgery Was Successful"
              onPlay={onPlay}
            />
            <WatchItem
              img="watch-main3"
              txt="Help Improve Nutrition for Africa"
              onPlay={onPlay}
            />
            <WatchItem
              img="watch-main4"
              txt="Help Victims of Flas Flood in South America"
              onPlay={onPlay}
            />
            <WatchItem
              img="watch-main5"
              txt="Help Victims of Flash Flood in Africa"
              onPlay={onPlay}
            />
            <WatchItem
              img="watch-main6"
              txt="Help Improve Nutrition on Asian"
              onPlay={onPlay}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchList;
