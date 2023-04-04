import React, { useState } from "react";
import Homepage from "./Homepage";
import SearchItem from "./SearchItem";
import {
  ArrowLeft,
  DotsThreeVertical,
  MagnifyingGlass,
  FunnelSimple,
} from "phosphor-react";

function ComingItems() {
  const [back, setBack] = useState(false);

  function onBack() {
    setBack(true);
  }

  const itemsAry =[
    {
               img:"search-img",
              title:"Help Overcome Malnutrition",
              amt:"$8,775",
              info:"fund raised from $10,540",
              num:"4,471",
              txt:"Donators",
              num2:"2",
              txt2:"days left"
    },
     
            {
               img:"search-img6",
              title:"Help Improve Child Health",
              amt:"$2,777",
              info:"fund raised from $6,310",
              num:"4,376",
              txt:"Donators",
              num2:"4",
              txt2:"days left"
            },
             
            {
               img:"search-img5",
              title:"Help Victims of Flooding",
              amt:"$7,475",
              info:"fund raised from $8,380",
              num:"2,118",
              txt:"Donators",
              num2:"3",
              txt2:"days left"
            },
             
            {
               img:"search-img7",
              title:"Help Improve Healthy Food For Children",
              amt:"$9,789",
              info:"fund raised from $10,340",
              num:"5,348",
              txt:"Donators",
              num2:"4",
              txt2:"days left"
            }
             
  ]

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
                <h1>Coming to an end</h1>
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
            <SearchItem
              img="search-img"
              title="Help Overcome Malnutrition"
              amt="$8,775"
              info="fund raised from $10,540"
              num="4,471"
              txt="Donators"
              num2="2"
              txt2="days left"
            />
            <SearchItem
              img="search-img6"
              title="Help Improve Child Health"
              amt="$2,777"
              info="fund raised from $6,310"
              num="4,376"
              txt="Donators"
              num2="4"
              txt2="days left"
            />
            <SearchItem
              img="search-img5"
              title="Help Victims of Flooding"
              amt="$7,475"
              info="fund raised from $8,380"
              num="2,118"
              txt="Donators"
              num2="3"
              txt2="days left"
            />
            <SearchItem
              img="search-img7"
              title="Help Improve Healthy Food For Children"
              amt="$9,789"
              info="fund raised from $10,340"
              num="5,348"
              txt="Donators"
              num2="4"
              txt2="days left"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ComingItems;
