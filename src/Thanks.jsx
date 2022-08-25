import React, {useState} from "react";
import Edit from "./Edit";
import Donators from "./Donators";
import {ArrowLeft, DotsThreeVertical, PaperPlaneRight } from "phosphor-react";

function Thanks(){
    const [back,setBack] = useState(false);
    
    function onBack(){
        setBack(true)
    }

    return(
        <div className="thank">
            <div className="home-top">
                <div className="back">
                    <ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
                    <h1>Jane Cooper</h1>
                </div>
                <div className="home-top">
                    <button className="dot">
                        <DotsThreeVertical size={30} color="#1EBA60" weight="duotone"/>
                    </button>
                </div>
            </div>
            <button>Today</button>
            <Donators
                thanks={true}
                none={true}
                img="prayer-img2"
                name="Robert Hawkins"
                amt="$19"
              />
            <div>
                <p>Thank you very much Jane, God bless your kindness</p>
                <p>09:41</p>
            </div>
        </div>
    )
}

export default Thanks;