import React,{useState} from "react";
import Homepage from "./Homepage";
import Menu from "./Menu";
import {UsersThree,ArchiveBox,PlusCircle} from "phosphor-react"


function Fundraising() {
    const [home,setHome] = useState(false);
    
    function onHome(){
        setHome(true)
    }

    return(
        <div>
            {
                home?
                <Homepage/>:
                <div className="Home">
                    <div className="home-top">
						<div className="back">
							<UsersThree size={40} color="#1EBA60" weight="duotone" onClick={onHome}/>
							<h1>My Fundraising</h1>
						</div>
						<div className="home-top">
                            <button className="dot">
                                <ArchiveBox size={30} color="#1EBA60" weight="duotone"/>
                            </button>
                        </div>
					</div>
                </div>
            }
        </div>
    )
}

export default Fundraising;