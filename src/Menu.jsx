import React,{useState} from "react";
import {House,Notepad,ListDashes,ChatText,User} from "phosphor-react";

function Menu(){
	
	return(
        <div className="menu">
            <button>
            <House size={30} color="#1EBA60" weight="fill" />
            </button>
            <button>
            <Notepad size={30} color="#1EBA60"/>
            </button>
            <button>
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