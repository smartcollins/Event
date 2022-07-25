import React from "react";
import Menu from "./Menu";
import {
  ArrowLeft,
  Bell,
  BookmarkSimple,
  DotsThreeVertical,
  FunnelSimple,
  MagnifyingGlass,
  SmileySad,
} from "phosphor-react";

function Null({ top, onBack, txt, onMain, book, search }) {
  return (
    <div>
      {search ? (
        <div className="null">
          <div className="back">
            <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
            <h1>{top}</h1>
          </div>
          <div className="search-max">
            <div className="search-min">
              <input type="" name="" placeholder="Search" />
              <MagnifyingGlass size={20} color="#D3D3D3" weight="light" />
            </div>
            <button className="dot" onClick={onMain}>
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
            <p>Search Result</p>
            <p>0 found</p>
          </div>
          <div className="great">
            <button>
              <SmileySad size={30} color="#ffffff" weight="fill" />
            </button>
            <p>{txt}</p>
          </div>
          <Menu />
        </div>
      ) : book ? (
        <div className="null">
          <div className="home-top">
            <div className="back">
              <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
              <h1>{top}</h1>
            </div>
            <button className="dot" onClick={onMain}>
              <DotsThreeVertical size={30} color="#1EBA60" />
            </button>
          </div>
          <div className="bookmark-btn">
            <button>All</button>
            <button>Art</button>
            <button>Music</button>
            <button>Sport</button>
          </div>
          <div className="great">
            <button>
              <BookmarkSimple size={30} color="#ffffff" weight="fill" />
            </button>
            <p>{txt}</p>
          </div>
          <Menu />
        </div>
      ) : (
        <div className="null">
          <div className="home-top">
            <div className="back">
              <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
              <h1>{top}</h1>
            </div>
            <button className="dot" onClick={onMain}>
              <DotsThreeVertical size={30} color="#1EBA60" />
            </button>
          </div>
          <div className="great">
            <button>
              <Bell size={30} color="#ffffff" weight="fill" />
            </button>
            <p>{txt}</p>
          </div>
          <Menu />
        </div>
      )}
    </div>
  );
}

export default Null;
