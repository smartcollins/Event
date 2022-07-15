import React,{useState} from "react";
import {Bell} from "phosphor-react";

function Null(){
    return(
        <div className="notify-null">
            <div className="notify-null-main">
                <div className="bell">
                    <Bell size={30} color="#ffffff" />
                </div>
                <p>You have no notification</p>
            </div>
        </div>
    )
}

export default Null;