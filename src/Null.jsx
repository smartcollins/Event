import React,{useState} from "react";
import Menu from "./Menu";
import {ArrowLeft, Bell,DotsThreeVertical} from "phosphor-react";

function Null({top,onBack,txt,onNotifyMain}){
    return(
        <div className="null">
            <div className="home-top">
                <div className="back">
                    <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
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
            <Menu/>
        </div>
    )
}

export default Null;