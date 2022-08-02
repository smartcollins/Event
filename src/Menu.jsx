import React,{useState} from "react";
import {House,Notepad,ListDashes,ChatText,User} from "phosphor-react";

function Menu({ home, onHome, calender, onCalender}){

    function onHouse(){
        onHome()
    }

    function onDonation(){
        onCalender()
    }
	
	return(
        <div className="menu">
            {
                home?
                <button onClick={onHouse} className="menu-clicked" >
                    <House size={30} color="#ffffff"/>
                </button>:
                <button onClick={onHouse} className="menu-unclicked" >
                    <House size={30} color="#1EBA60"/>
                </button>
            }
            {
                calender?
                <button onClick={onDonation} className="menu-clicked" >
                    <Notepad size={30} color="#ffffff"/>
                </button>:
                <button onClick={onDonation} className="menu-unclicked" >
                    <Notepad size={30} color="#1EBA60"/>
                </button>
            }
            <button onClick={onCalender}>
            <ListDashes size={30} color="#1EBA60" weight="bold"/>
            </button>
            <button>
            <ChatText size={30} color="#1EBA60"/>
            </button>
            <button>
            <User size={30} color="#1EBA60" />
            </button>
        </div>
    )
}

export default Menu;