import React, { useState } from "react";
import { DotsThreeOutlineVertical, ShareNetwork, Heart } from "phosphor-react";

function Prayer({ img, name, day, txt, txt2 }) {
  return (
    <div className="prayer-card">
      <div className="prayer-top">
        <div className="prayer-detail">
          <div className={img}></div>
          <div className="prayer-profile">
            <h6>{name}</h6>
            <span>{day}</span>
          </div>
        </div>
        <DotsThreeOutlineVertical size={20} color="#0da542" weight="light" />
      </div>
      <div className="prayer-comment">
        <p>{txt}</p>
        <span>{txt2}</span>
        <div className="prayer-like">
          <div>
            <Heart size={20} color="#0da542" weight="fill" />
            <p>Aamin</p>
          </div>
          <div>
            <ShareNetwork size={20} color="#0da542" weight="fill" />
            <p>share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prayer;
