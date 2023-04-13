import React, { useState } from "react";
import Homepage from "./Homepage";
import Calender from "./Calender";
import Inbox from "./Inbox";
import Menu from "./Menu";
import SearchItem from "./SearchItem";
import See from "./See";
import Edit from "./Edit";
import Donators from "./Donators";
import Thanks from "./Thanks";
import Create from "./Create";
import { UsersThree, ArchiveBox, PlusCircle } from "phosphor-react";

function Fundraising() {
  const [home, setHome] = useState(false);
  const [calender, setCalender] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [top, setTop] = useState(true);
  const [activity, setActivity] = useState(false);
  const [all, setAll] = useState(false);
  const [go, setGo] = useState(true);
  const [past, setPast] = useState(false);
  const [pend, setPend] = useState(false);
  const [see, setSee] = useState(false);
  const [edit, setEdit] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [plus, setPlus] = useState(false);

  function onHome() {
    setHome(true);
  }

  function onCalender() {
    setCalender(true);
  }

  function onInbox() {
    setInbox(true);
  }

  function onFund() {
    setCalender(false);
    setHome(false);
  }

  function onTop() {
    setTop(true);
    setActivity(false);
  }

  function onActivity() {
    setActivity(true);
    setTop(false);
  }

  function onAll() {
    setAll(true);
    setGo(false);
    setPast(false);
    setPend(false);
  }

  function onGo() {
    setGo(true);
    setAll(false);
    setPend(false);
    setPast(false);
  }
  function onPast() {
    setPast(true);
    setAll(false);
    setGo(false);
    setPend(false);
  }

  function onPend() {
    setPend(true);
    setAll(false);
    setGo(false);
    setPast(false);
  }

  function onSee() {
    setSee(true);
  }

  function onEdit() {
    setEdit(true);
  }

  function onThanks() {
    setThanks(true);
  }

  function onPlus() {
    setPlus(true);
  }

  const searchAry = [
                      {wait:true,
                      img:"search-img2",
                      title:"Help Improve Child Health",
                      amt:"$2,775",
                      info:"fund required",
                      num:"21",
                      txt:"Days left"},,
                    
                      {edit:true,
                      img:"search-img8",
                      title:"Help Victims of Earthquake",
                      amt:"$2,275",
                      info:"fund raised from $10,310",
                      num:"2,475",
                      txt:"Donators",
                      num2:"21",
                      txt2:"days left",
                      txt3:"$18",
                      onEdit:onEdit,
                      onSee:onSee},
                    
                      {edit:true,
                      img:"search-img2",
                      title:"Help Improve Child Health",
                      amt:"$2,775",
                      info:"fund raised from $6,310",
                      num:"938",
                      txt:"Donators",
                      num2:"21",
                      txt2:"days left",
                      txt3:"$18",
                      onEdit:onEdit,
                      onSee:onSee},
  ]

  const search =  searchAry.slice(0,1).map((item,idx)=><SearchItem key={idx} {...item}/>)
  const search2 =  searchAry.slice(1,2).map((item,idx)=><SearchItem key={idx} {...item}/>)  

  return (
    <div>
      {plus ? (
        <Create />
      ) : thanks ? (
        <Thanks />
      ) : edit ? (
        <Edit />
      ) : see ? (
        <See />
      ) : home ? (
        <Homepage />
      ) : calender ? (
        <Calender />
      ) : inbox ? (
        <Inbox />
      ) : (
        <div className="fundraising">
          <div className="home-top">
            <div className="back">
              <UsersThree
                size={40}
                color="#1EBA60"
                weight="duotone"
                onClick={onHome}
              />
              <h1>My Fundraising</h1>
            </div>
            <button className="dot">
              <ArchiveBox size={30} color="#1EBA60" weight="duotone" />
            </button>
          </div>
          <div className="fundraising-top">
            <h3
              onClick={onTop}
              className={
                top ? "fundraising-top-click" : "fundraising-top-unclick"
              }
            >
              My Fundraising
            </h3>
            <h3
              onClick={onActivity}
              className={
                activity ? "fundraising-top-click" : "fundraising-top-unclick"
              }
            >
              Activity
            </h3>
          </div>
          <PlusCircle
            className="plus"
            onClick={onPlus}
            size={50}
            color="#1EBA60"
            weight="fill"
          />
          {activity ? (
            <div>
              <Donators
                thanks={true}
                img="prayer-img4"
                name="Jake Sparrow"
                amt="$25"
                onThanks={onThanks}
              />
              <Donators thanks={true} anym={true} amt="$27" />
              <Donators
                thanks={true}
                img="prayer-img"
                name="Jenny Wilson"
                amt="$17"
              />
              <Donators thanks={true} anym={true} amt="$17" />
              <div className="donators">
                <h3>Yesterday, December 24 2023</h3>
              </div>
              :
              <Donators
                thanks={true}
                img="prayer-img2"
                name="Robert Hawkins"
                amt="$19"
              />
              <Donators
                thanks={true}
                img="prayer-img3"
                name="Kritin Watson"
                amt="$15"
              />
            </div>
          ) : (
            <div>
              <div className="fundraising-btn">
                <button
                  onClick={onAll}
                  className={all ? "clicked" : "unclicked"}
                >
                  All(25)
                </button>
                <button onClick={onGo} className={go ? "clicked" : "unclicked"}>
                  Ongoing(3)
                </button>
                <button
                  onClick={onPast}
                  className={past ? "clicked" : "unclicked"}
                >
                  Past(22)
                </button>
                <button
                  onClick={onPend}
                  className={pend ? "clicked" : "unclicked"}
                >
                  Pending(1)
                </button>
              </div>
              <div>
                {pend ? (
                  <div className={pend && "pend"}>
                    {/* <SearchItem
                      wait={true}
                      img="search-img2"
                      title="Help Improve Child Health"
                      amt="$2,775"
                      info="fund required"
                      num="21"
                      txt="Days left"
                    /> */}
                    {search}
                  </div>
                ) : (
                  <div>
                    {/* <SearchItem
                      edit={true}
                      img="search-img8"
                      title="Help Victims of Earthquake"
                      amt="$2,275"
                      info="fund raised from $10,310"
                      num="2,475"
                      txt="Donators"
                      num2="21"
                      txt2="days left"
                      txt3="$18"
                      onEdit={onEdit}
                      onSee={onSee}
                    />
                    <SearchItem
                      edit={true}
                      img="search-img2"
                      title="Help Improve Child Health"
                      amt="$2,775"
                      info="fund raised from $6,310"
                      num="938"
                      txt="Donators"
                      num2="21"
                      txt2="days left"
                      txt3="$18"
                      onEdit={onEdit}
                      onSee={onSee}
                    /> */}
                    {search2}
                  </div>
                )}
              </div>
            </div>
          )}
          <Menu
            fund={true}
            onHome={onHome}
            onCalender={onCalender}
            onFund={onFund}
            onInbox={onInbox}
          />
        </div>
      )}
    </div>
  );
}

export default Fundraising;
