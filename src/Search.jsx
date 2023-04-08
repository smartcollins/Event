import React, { useState } from "react";
import Homepage from "./Homepage";
import SearchItem from "./SearchItem";
import { ArrowLeft, MagnifyingGlass, FunnelSimple } from "phosphor-react";

function Search() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  const searchAry = [

    {
      img: "search-img",
      title: "Help Little Baby Surgery",
      amt: "$2,275",
      info: "fund raised from $10,310",
      num: "4,471",
      txt: "Donators",
      num2: "9",
      txt2: "days left"
    },

    {
      img: "search-img2",
      title: "Help Overcome Malnutrition",
      amt: "$8, 775",
      info: "fund raised from $7,310",
      num: "2,471",
      txt: "Donators",
      num2: "21",
      txt2: "days left"
    },

    {
      img: "search-img3",
      title: "Help Little Baby Surgery",
      amt: "$2,205",
      info: "fund raised from $5,310",
      num: "1,171",
      txt: "Donators",
      num2: "5",
      txt2: "days left"
    },

  ]

  const items = searchAry.map((item, idx) => <SearchItem key={idx} {...item} />)

  return (
    <div>
      {back ? (
        <Homepage />
      ) : (
        <div className="Home">
          <div className="back">
            <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
            <h1>Search</h1>
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
          <div className="search-txt">
            <p>Search Results</p>
            <p>3,459 found</p>
          </div>
          {/* <SearchItem
            img="search-img"
            title="Help Little Baby Surgery"
            amt="$2,275"
            info="fund raised from $10,310"
            num="4,471"
            txt="Donators"
            num2="9"
            txt2="days left"
          />
          <SearchItem
            img="search-img2"
            title="Help Overcome Malnutrition"
            amt="$8, 775"
            info="fund raised from $7,310"
            num="2,471"
            txt="Donators"
            num2="21"
            txt2="days left"
          />
          <SearchItem
            img="search-img3"
            title="Help Little Baby Surgery"
            amt="$2,205"
            info="fund raised from $5,310"
            num="1,171"
            txt="Donators"
            num2="5"
            txt2="days left"
          /> */}
          {items}
        </div>
      )}
    </div>
  );
}

export default Search;
