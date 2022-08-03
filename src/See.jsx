import React from "react";
import Fundraising from "./Fundraising";
import { ArrowLeft,DotsThree, DotsThreeVertical} from "phosphor-react";
import { useState } from "react";

function See(){
    const [back,setBack] = useState(false);

    function onBack(){
        setBack(true)
    }

    return(
        <div>
            {
                back?
                <Fundraising/>:
                <div className="Home">
                    <div className="home-top">
                        <div className="back">
                            <ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
                            <h1>See Results</h1>
                        </div>
                        <button className="dot">
                            <DotsThreeVertical size={30} color="#1EBA60" weight="duotone"/>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default See;