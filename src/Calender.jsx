import React,{useState} from "react";
import {UsersThree,DotsThreeVertical } from "phosphor-react";

function Calender(){
    const [all,setAll] = useState(false);
    
    function onAll(){
        setAll(true)
    }

    return(
        <div>
            {
                all?
                <div>sdfg</div>:
                <div className="Home">
                    <div className="home-top">
						<div className="back">
							<UsersThree size={40} color="#1EBA60" weight="duotone"/>
							<h1>My Donation</h1>
						</div>
						<div className="home-top">
                            <button className="dot">
                                <DotsThreeVertical size={30} color="#1EBA60" weight="duotone"/>
                            </button>
                        </div>
					</div>
                </div>
            }
        </div>
    )
}

export default Calender;