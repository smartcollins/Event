import React, { useState } from "react";
import Homepage from "./Homepage";
import Share from "./Share";
import List from "./List";
import Donate from "./Donate";
import Prayer from "./Prayer";
import Story from "./Story";
import Prayers from "./Prayers";
import Healthy from "./Healthy";
import {
  ArrowLeft,
  ShareNetwork,
  BookmarkSimple,
  ArrowRight,
  Circle,
  HouseLine,
  CircleWavyCheck,
  User,
  FirstAidKit,
} from "phosphor-react";

function Donation() {
  const [back, setBack] = useState(false);
  const [share, setShare] = useState(false);
  const [media, setMedia] = useState(false);
  const [donate, setDonate] = useState(false);
  const [home, setHome] = useState(false);
  const [prayer, setPrayer] = useState(false);

  function onBack() {
    setBack(true);
  }

  function onShare() {
    setShare(true);
  }

  function onShareMedia() {
    setMedia(true);
  }

  function onDonate() {
    setDonate(true);
  }

  function onHome() {
    setHome(true);
  }

  function onPrayer() {
    setPrayer(true);
  }

  const circleAry = [
               {size:10, color:"#1EBA60", weight:"fill"},
               {size:10, color:"#ffffff", weight:"fill"},
               {size:10, color:"#ffffff", weight:"fill"},
               {size:10, color:"#ffffff", weight:"fill"},
  ]

  const circle = circleAry.map((item,idx)=><Circle key={idx} {...item}/>)


  return (
    <div>
      {media ? (
        <List />
      ) : home ? (
        <Healthy />
      ) : donate ? (
        <Donate />
      ) : prayer ? (
        <Prayers />
      ) : back ? (
        <Homepage />
      ) : (
        <div className={share ? "success" : "donation"}>
          <div className="donation-img">
            <div className="home-top">
              <div className="back">
                <ArrowLeft
                  size={30}
                  color="#1EBA60"
                  weight="duotone"
                  onClick={onBack}
                />
              </div>
              <div className="home-top2">
                <button>
                  <ShareNetwork
                    size={20}
                    color="#13B157"
                    weight="fill"
                    onClick={onShare}
                  />
                </button>
                <button>
                  <BookmarkSimple size={20} color="#13B157" weight="light" />
                </button>
              </div>
            </div>
            <div>
              {/* <Circle size={10} color="#1EBA60" weight="fill" />
              <Circle size={10} color="#ffffff" weight="fill" />
              <Circle size={10} color="#ffffff" weight="fill" />
              <Circle size={10} color="#ffffff" weight="fill" /> */}
              {circle}
            </div>
          </div>
          <div className="bookmark-note">
            <h3>Help Siamese Twins Surgrey</h3>
            <p>
              <span>$6,679 </span>fund raised from$8,200
            </p>
            <div className="bookmark-bar"></div>
            <div className="bookmark-end">
              <p>
                <span>3,438</span> Donators
              </p>
              <p>
                <span>11</span> days left
              </p>
            </div>
          </div>
          <div className="donation-mid">
            <button>Medical</button>
            <div className="donation-mid-end">
              <div className="donators"></div>
              <div className="donators"></div>
              <div className="donators"></div>
              <p>3,438 donators</p>
              <ArrowRight size={20} color="#1EBA60" weight="duotone" />
            </div>
          </div>
          <button onClick={onDonate} className="nxt">
            Donate Now
          </button>
          <h3>Fundraiser</h3>
          <div className="home-mid">
            <div className="wallet">
              <button onClick={onHome}>
                <HouseLine size={30} color="#1EBA60" weight="duotone" />
              </button>
              <div>
                <h3>Healthy Home</h3>
                <div className="verify">
                  <p>Verified</p>
                  <CircleWavyCheck size={16} color="#1EBA60" weight="duotone" />
                </div>
              </div>
            </div>
            <button>follow</button>
          </div>
          <h3>Patient</h3>
          <div className="home-mid">
            <div className="wallet">
              <button>
                <User size={30} color="#1EBA60" weight="duotone" />
              </button>
              <div>
                <h3>Healthy Home</h3>
                <div className="verify">
                  <p>Identify according to medical documents</p>
                  <CircleWavyCheck size={16} color="#1EBA60" weight="duotone" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-mid">
            <div className="wallet">
              <button>
                <FirstAidKit size={30} color="#1EBA60" weight="duotone" />
              </button>
              <div>
                <h3>Post Craniontomy EDH + ICH</h3>
                <div className="verify">
                  <p>Accompanied by medical documents</p>
                  <CircleWavyCheck size={16} color="#1EBA60" weight="duotone" />
                </div>
              </div>
            </div>
          </div>
          <div className="search-txt">
            <h3>Fund Usage Plan</h3>
            <button>View Plan</button>
          </div>
          <h3>Story</h3>
          <Story />
          <div className="search-txt">
            <h3>Prayers from Good People</h3>
            <p onClick={onPrayer}>See all</p>
          </div>
          <Prayer
            img="prayer-img"
            name="Esther Howard"
            day="Today"
            txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
            txt2="You and 48 others sent this prayer"
          />
          {share ? <Share onShareMedia={onShareMedia} /> : null}
        </div>
      )}
    </div>
  );
}

export default Donation;
