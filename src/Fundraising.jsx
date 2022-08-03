import React,{useState} from "react";
import Homepage from "./Homepage";
import Menu from "./Menu";
import {UsersThree,ArchiveBox,PlusCircle} from "phosphor-react"
import SearchItem from "./SearchItem";


function Fundraising() {
    const [home,setHome] = useState(false);
    const [top,setTop] = useState(false);
    const [all,setAll] = useState(false);
    const [go, setGo] = useState(false);
    const [past, setPast] = useState(false);
    const [pend, setPend] = useState(false);
    
    function onHome(){
        setHome(true)
    }

    function onTop(){
        setTop(oldTop => !top)
    }

    function onAll(){
        setAll(true)
        setGo(false)
        setPast(false)
        setPend(false)
    }

    function onGo(){
        setGo(true)
        setAll(false)
        setPend(false)
        setPast(false)
    }
    function onPast(){
        setPast(true)
        setAll(false)
        setGo(false)
        setPend(false)
    }

    function onPend(){
        setPend(true)
        setAll(false)
        setGo(false)
        setPast(false)
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
                    <div className="fundraising-btn">
                        <button onClick={onAll} className={all?"clicked":"unclicked"}>All(25)</button>
                        <button onClick={onGo} className={!go?"clicked":"unclicked"}>Ongoing(3)</button>
                        <button onClick={onPast} className={past?"clicked":"unclicked"}>Past(22)</button>
                        <button onClick={onPend} className={pend?"clicked":"unclicked"}>Pending(1)</button>
                    </div>
                    <SearchItem
						edit={true}
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
                    <SearchItem
						edit={true}
						img="search-img2"
						title="Help Improve Child Health"
						amt="$2,775"
						info="fund raised from $6,310"
						num="938"
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

export default Fundraising;