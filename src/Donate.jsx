import React, { useState } from "react";
import Payment from "./Payment";
import Donation from "./Donation";
import { ArrowLeft, DotsThreeVertical } from "phosphor-react";

function Donate() {
  const [anonymus, setAnonymus] = useState(false);
  const [btn, setBtn] = useState(false);
  const [back, setBack] = useState(false);

  function onAnonymus() {
    setAnonymus((oldAnonymus) => !anonymus);
  }

  function onBtn() {
    setBtn(true);
  }

  function onBack() {
    setBack(true);
  }

  const itemsAry = ['$5','$10','$25','$50','$100','$200']
  const items = itemsAry.map((item,idx)=><button key={idx}>{item}</button>)

  return (
    <div>
      {back ? (
        <Donation />
      ) : btn ? (
        <Payment />
      ) : (
        <div className="donate">
          <div className="home-top">
            <div className="back">
              <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
              <h1>Donate</h1>
            </div>
            <button className="dot">
              <DotsThreeVertical size={30} color="#1EBA60" />
            </button>
          </div>
          <div>
            <h3>Enter the Amount</h3>
            <button className="donated">{anonymus ? "$200" : "$0"}</button>
            <div className="amount">
              {/* <button>$5</button>
              <button>$10</button>
              <button>$25</button>
              <button>$50</button>
              <button>$100</button>
              <button>$200</button> */}
              {items}
            </div>
          </div>
          <div className="anonymus">
            <input id="donate" type="checkbox" onClick={onAnonymus} />
            <label htmlFor="donate" onClick={onAnonymus}>
              Donate as anonymus
            </label>
          </div>
          <div className="donate-end">
            <button className="nxt" onClick={onBtn}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;
