import React, { useState } from "react";
import { ArrowLeft, DotsThreeVertical, PlayCircle } from "phosphor-react";

function WatchItem({ img, txt }) {
  const [play, setPlay] = useState(false);

  function onPlay() {}

  return (
    <div className="watch2-main">
      <div>
        <div className={img}>
          <div className="watch-play">
            <PlayCircle
              size={30}
              color="#1EBA60"
              weight="bold"
              onClick={onPlay}
            />
          </div>
          <div className="watch-txt">
            <h3>{txt}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchItem;
