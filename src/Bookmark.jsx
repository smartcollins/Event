import React, { useState } from "react";
import BookMarkItem from "./BookMarkItem";
import Homepage from "./Homepage";
import { DotsThreeVertical, ArrowLeft } from "phosphor-react";

function Bookmark() {
  const [back, setBack] = useState(false);
  const [dot, setDot] = useState(false);
  const bookmarks = [{
    img: "bookmark-img",
    title: "Help Dilan Brain Turmor Surgery",
    amt: "$7,379",
    txt: "fund rasied from $8,200",
    num: "3,274",
    info: "Donators",
    num2: 12,
    info2: "days left"
  }, {
    img: "bookmark-img2",
    title: "Help Orphange Children to Buy Study Books",
    amt: "$2,379",
    txt: "fund rasied from $4,200",
    num: "1,038",
    info: "Donators",
    num2: 22,
    info2: "days left",
  }]

  const item = bookmarks.slice(0, 1).map((item, idx) => <BookMarkItem key={idx} {...item} />)
  const item2 = bookmarks.slice(1, 2).map((item, idx) => <BookMarkItem key={idx} {...item} />)

  function onBack() {
    setBack(true);
  }

  function onDot() {
    setDot(true);
  }

  function onCancel() {
    setDot(false);
  }

  // const style = {
  // 	backgroundColor : bookmark && "rgba(0,0,0,0.8)"
  // }

  return (
    <div>
      {back ? (
        <Homepage />
      ) : (
        <div className="Home">
          <div className="home-top">
            <div className="back">
              <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
              <h1>Bookmark</h1>
            </div>
            <button className="dot" onClick={onDot}>
              <DotsThreeVertical size={20} color="#1EBA60" weight="fill" />
            </button>
          </div>
          <div className="bookmark-btn">
            <button>All</button>
            <button>Art</button>
            <button>Music</button>
            <button>Sport</button>
          </div>
          {/* <BookMarkItem
            img="bookmark-img"
            title="Help Dilan Brain Turmor Surgery"
            amt="$7,379"
            txt="fund rasied from $8,200"
            num="3,274"
            info="Donators"
            num2={12}
            info2="days left"
          /> */}
          {item}
          <div className={dot && "remove"}>
            {/* <BookMarkItem
              img="bookmark-img2"
              title="Help Orphange Children to Buy Study Books"
              amt="$2,379"
              txt="fund rasied from $4,200"
              num="1,038"
              info="Donators"
              num2={22}
              info2="days left"
            /> */}
            {item2}
            <div>
              {dot && (
                <div className="remove-main">
                  <h3>Remove from your bookmark</h3>
                  <div className="remove-btn">
                    <button onClick={onCancel}>cancel</button>
                    <button onClick={onBack}>Yes,Remove</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookmark;
