import React,{useState} from "react";
import {ArrowLeft, Bell,DotsThreeVertical} from "phosphor-react";

function Null({top,onNotifyBack,txt,onNotifyMain}){
    return(
        <div className="Home">
            <div className="home-top">
                <div className="back">
                    <ArrowLeft size={30} color="#1EBA60" onClick={onNotifyBack} />
                    <h1>{top}</h1>
                </div>
                <button className="dot" onClick={onNotifyMain}>
                    <DotsThreeVertical size={30} color="#1EBA60" />
                </button>
            </div>
            <div className="great">
                <button>
                    <Bell size={30} color="#ffffff" weight="fill" />
                </button>
                <p>{txt}</p>
            </div>
        </div>
    )
}

export default Null;