import React,{useState} from "react";
import Donation from "./Donation";
import Story from "./Story";
import SearchItem from "./SearchItem";
import Prayer from "./Prayer";
import {ArrowLeft,DotsThreeVertical,HouseLine,CircleWavyCheck,UserPlus,ChatText, SelectionForeground} from "phosphor-react"

function Healthy(){
    const [back,setBack] = useState(false);
    const [click,setClick] = useState(false);
    const [click2,setClick2] = useState(false);
    const [click3,setClick3] = useState(false);
    const [fund,setFund] = useState(false);
    const [prayer,setPrayer] = useState(false);

    function onBack(){
        setBack(true)
    }

    function onClicked(){
        setClick(true)
        setClick2(false)
        setClick3(false)
        setFund(false)
        setPrayer(false)
    }

    function onClicked2(){
        setFund(true)
        setClick2(true)
        setClick(false)
        setClick3(false)
        setPrayer(false)
    }

    function onClicked3(){
        setPrayer(true)
        setClick3(true)
        setClick(false)
        setClick2(false)
        setFund(false)
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
                    {/* {!fund&&!prayer<h3>About</h3>} */}
                    {
                        !fund && !prayer?
                        <h3>About</h3>:
                        null
                    }
                    {
                        fund?
                        <div>
                            <div className="search-txt">
                                <p>Fundrasing (4,365)</p>
                                <p>See all</p>
                            </div>
                            <SearchItem
                                img="search-img"
                                title= "Help Little Baby Surgery"
                                amt= "$2,275"
                                info= "fund raised from $10,310"
                                num= "4,471"
                                txt= "Donators"
                                num2= "9"
                                txt2= "days left"
                            />
                            <SearchItem
                                img="search-img2"
                                title= "Help Overcome Malnutrition"
                                amt= "$8, 775"
                                info= "fund raised from $7,310"
                                num= "2,471"
                                txt= "Donators"
                                num2= "21"
                                txt2= "days left"
                            />
                        </div>:
                        prayer?
                        <div>
                            <div className="search-txt">
                                <p>Prayer (3,279)</p>
                                <p>See all</p>
                            </div>
                            <Prayer
                                img= "prayer-img"
                                name="Esther Howard"
                                day="Today"
                                txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
                                txt2="You and 48 others sent this prayer"
                            />
                            <Prayer
                                img= "prayer-img2"
                                name="Cameroon Williams"
                                day="Today"
                                txt="Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
                                txt2="You and 158 others sent this prayer"
                            />
                        </div>:
                        <Story/>
                    }
                </div>
            }
        </div>
    )
}

export default Healthy;