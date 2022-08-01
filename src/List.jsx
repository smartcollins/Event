import React, { useState } from "react";
import Donation from "./Donation";
import Donators from "./Donators";
import { ArrowLeft, MagnifyingGlass } from "phosphor-react";

function List() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  return (
    <div className="list">
      {back ? (
        <Donation />
      ) : (
        <div className="Home">
          <div className="home-top">
            <div className="back">
              <ArrowLeft
                size={30}
                color="#1EBA60"
                weight="duotone"
                onClick={onBack}
              />
              <h1>3,458 Donators</h1>
            </div>
            <button className="dot">
              <MagnifyingGlass size={30} color="#1EBA60" />
            </button>
          </div>
          <Donators img="prayer-img2" name="Kathyrn Murphy" />
          <Donators img="prayer-img" name="Wade Warren" />
          <Donators anym={true} />
          <Donators img="prayer-img3" name="Jane Cooper" />
          <Donators anym={true} />
          <Donators anym={true} />
          <Donators img="prayer-img4" name="Guy Hawkins" />
          <Donators img="prayer-img" name="Leslie Alexander" />
          <Donators anym={true} />
        </div>
      )}
    </div>
  );
}

export default List;
