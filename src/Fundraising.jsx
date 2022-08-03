import React,{useState} from "react";
import Homepage from "./Homepage";
import Menu from "./Menu";
import {UsersThree,ArchiveBox,PlusCircle} from "phosphor-react"


function Fundraising() {
    const [home,setHome] = useState(false);
    const [top,setTop] = useState(false);
    
    function onHome(){
        setHome(true)
    }

    function onTop(){
        setTop(true)
    }

    return(
        <div>
            {
                home?
                <Homepage/>:
                <div className="fundraising">
                    <div className="home-top">
						<div className="back">
							<UsersThree size={40} color="#1EBA60" weight="duotone" onClick={onHome}/>
							<h1>My Fundraising</h1>
						</div>
                        <button className="dot">
                            <ArchiveBox size={30} color="#1EBA60" weight="duotone"/>
                        </button>
					</div>
                    <div className="fundraising-top">
                        <h3 onClick={onTop} className={!top ? "fundraising-top-click" : "fundraising-top-unclick"}>My Fundraising</h3>
                        <h3 onClick={onTop} className={top ? "fundraising-top-click" : "fundraising-top-unclick"}>Activity</h3>
                    </div>
                </div>
            }
        </div>
    )
}

export default Fundraising;