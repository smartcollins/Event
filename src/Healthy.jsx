import React,{useState} from "react";
import Donation from "./Donation";
import {ArrowLeft,DotsThreeVertical,HouseLine,CircleWavyCheck,UserPlus,ChatText} from "phosphor-react"

function Healthy(){
    const [back,setBack] = useState(false);

    function onBack(){
        setBack(true)
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
						<button>About</button>
						<button>Fundraising</button>
						<button>Prayers</button>
					</div>
                </div>
            }
        </div>
    )
}

export default Healthy;