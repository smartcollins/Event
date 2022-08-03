import React,{useState} from "react";
import Fundraising from "./Fundraising";
import SearchItem from "./SearchItem";
import { ArrowLeft,DotsThree, DotsThreeVertical} from "phosphor-react";

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
                    <SearchItem
                        img="search-img8"
                        title="Help Victims of Earthquake"
                        amt="$2,275"
                        info="fund raised from $10,310"
                        num="2,475"
                        txt="Donators"
                        num2="21"
                        txt2="days left"
                        txt3= "$18"
                    />
                </div>
            }
        </div>
    )
}

export default See;