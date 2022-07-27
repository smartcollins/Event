import React,{useState} from "react";
import Donation from "./Donation";
import Story from "./Story";
import {ArrowLeft,DotsThreeVertical,HouseLine,CircleWavyCheck,UserPlus,ChatText} from "phosphor-react"

function Healthy(){
    const [back,setBack] = useState(false);
    const [click,setClick] = useState(false);
    const [click2,setClick2] = useState(false);
    const [click3,setClick3] = useState(false);

    function onBack(){
        setBack(true)
    }

    function onClicked(){
        setClick(true)
        setClick2(false)
        setClick3(false)
    }

    function onClicked2(){
        setClick2(true)
        setClick(false)
        setClick3(false)
    }

    function onClicked3(){
        setClick3(true)
        setClick(false)
        setClick2(false)
    }


    return(
        <div>
            {
                back?
                <Donation/>:
                <div className="healthy">
					<div className="home-top">
                        <div className="back">
                        <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
                        <h1>Payment</h1>
                        </div>
                        <button className="dot">
                        <DotsThreeVertical size={30} color="#1EBA60" />
                        </button>
                    </div>
					<div>
						<button className="healthy-top">
							<HouseLine size={50} color="#1EBA60"/>
						</button>
						<div className="healthy-txt">
                            <h3>Healthy Home</h3>
                            <CircleWavyCheck size={20} color="#1EBA60"/>
						</div>
					</div>
					<div className="healthy-btn">
						<button>
							<h3>4.35</h3>
							Fundraising
						</button>
						<button>
							<h3>67.5k</h3>
							Followers
						</button>
						<button>
							<h3>179</h3>
							Following
						</button>
					</div>
					<div className="healthy-mid">
						<button>
							<UserPlus size={20} color="#ffffff" />
							<p>Follow</p>
						</button>
						<button>
							<ChatText size={20} color="#1EBA60" />
							<p>Messages</p>
						</button>
					</div>
					<div className="healthy-end">
						<button onClick={onClicked} className={click?"clicked":"unclicked"}>About</button>
						<button onClick={onClicked2} className={click2?"clicked":"unclicked"}>Fundraising</button>
						<button onClick={onClicked3} className={click3?"clicked":"unclicked"}>Prayers</button>
					</div>
                    <Story/>
                </div>
            }
        </div>
    )
}

export default Healthy;