import React, { useState } from "react";
import Homepage from "./Homepage";
import SearchItem from "./SearchItem";
import {
  ArrowLeft,
  DotsThreeVertical,
  MagnifyingGlass,
  FunnelSimple,
} from "phosphor-react";

function UrgentItems() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  const itemsAry = [

    {
      img: "search-img4",
      title: "Help Victims of Volcanic Erruption",
      amt: "$2,275",
      info: "fund raised from $6,310",
      num: "938",
      txt: "Donators",
      num2: "26",
      txt2: "days left"
    },

    {
      img: "search-img9",
      title: "Help Victims of Flash Flooding",
      amt: "$9,775",
      info: "fund raised from $10,540",
      num: "4,471",
      txt: "Donators",
      num2: "9",
      txt2: "days left"
    },

    {
      img: "search-img8",
      title: "Help Victims of Earthquake",
      amt: "$4,475",
      info: "fund raised from $7,380",
      num: "2,438",
      txt: "Donators",
      num2: "26",
      txt2: "days left"
    },

    {
      img: "search-img7",
      title: "Help Babies with Piolo",
      amt: "$9,389",
      info: "fund raised from $11,340",
      num: "5,548",
      txt: "Donators",
      num2: "19",
      txt2: "days left"
    }
  ]

  const items = itemsAry.map((item, idx) => <SearchItem key={idx} {...item} />)

  return (
    <div>
      {back ? (
        <Homepage />
      ) : (
        <div className="urgent-item">
          <div className="Home">
            <div className="home-top">
              <div className="back">
                <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
                <h1>Urgent Fundraising</h1>
              </div>
              <button className="dot">
                <DotsThreeVertical size={30} color="#1EBA60" />
              </button>
            </div>
            <div className="search-max">
              <div className="search-min">
                <input type="" name="" placeholder="Search" />
                <MagnifyingGlass size={20} color="#D3D3D3" weight="light" />
              </div>
              <button className="dot">
                <FunnelSimple size={20} color="#1EBA60" weight="fill" />
              </button>
            </div>
            <div className="bookmark-btn">
              <button>All</button>
              <button>Art</button>
              <button>Music</button>
              <button>Sport</button>
            </div>
            {items}
          </div>
        </div>
      )}
    </div>
  );
}

export default UrgentItems;
