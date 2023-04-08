import React, { useState } from "react";
import Fundraising from "./Fundraising";
import SearchItem from "./SearchItem";
import { ArrowLeft, DotsThreeVertical } from "phosphor-react";

function See() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  const itemsAry = [

    {
      top: "$8,775",
      detail: "Funds gained",
    },

    {
      top: "$1,765",
      detail: "Funds left",
    },

    {
      top: "4.471",
      detail: "Donators",
    },

    {
      top: "9",
      detail: "Days left",
    },

    {
      top: "82%",
      detail: "Funds reached",
    },

    {
      top: "2.389",
      detail: "Prayers",
    }
  ]

  const items = itemsAry.map((item, idx) => (
    <button key={idx}>
      <h3>{item.top}</h3>
      <p>{item.detail}</p>
    </button>
  ))

  return (
    <div>
      {back ? (
        <Fundraising />
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
              <h1>See Results</h1>
            </div>
            <button className="dot">
              <DotsThreeVertical size={30} color="#1EBA60" weight="duotone" />
            </button>
          </div>
          <SearchItem
            img="search-img8"
            title="Help Victims of Earthquake"
            amt="$2,275"
            info="fund raised from $10,310"
            num="2,475"
            txt="Donators"
            num2="21"
            txt2="days left"
            txt3="$18"
          />
          <div className="result">
            <h1>Fundrasing Results</h1>
            <div className="result-btn">
              {/* <button>
                <h3>$8,775</h3>
                <p>Funds gained</p>
              </button>
              <button>
                <h3>$1,765</h3>
                <p>Funds left</p>
              </button>
              <button>
                <h3>4.471</h3>
                <p>Donators</p>
              </button>
              <button>
                <h3>9</h3>
                <p>Days left</p>
              </button>
              <button>
                <h3>82%</h3>
                <p>Funds reached</p>
              </button>
              <button>
                <h3>2.389</h3>
                <p>Prayers</p>
              </button> */}
              {items}
            </div>
            <button className="nxt">Withdraw Funds ($8,775)</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default See;
