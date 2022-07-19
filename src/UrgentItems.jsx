import React,{useState} from "react";
import Homepage from "./Homepage";
import {ArrowLeft,DotsThreeVertical,MagnifyingGlass,FunnelSimple} from "phosphor-react";

function UrgentItems(){
    const [back,setBack] = useState(false)

    function onBack(){
        setBack(true)
    }

    return(
        <div>
            {
                back?
                <Homepage/>:
                <div className="urgent-item">
                    <div className="Home">
                        <div className="home-top">
                            <div className="back">
                                <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
                                <h1>Urgent Fundraising</h1>
                            </div>
                            <button className="dot">
                                <DotsThreeVertical size={30} color="#1EBA60" />
                            </button>
                        </div>
                        <div className="search-max">
                            <div className="search-min">
                                <input type="" name="" placeholder="Search"/>
                                <MagnifyingGlass size={20} color="#D3D3D3" weight="light" />
                            </div>
                            <button className="dot">
                                <FunnelSimple size={20} color="#1EBA60" weight="fill" />
                            </button>
                        </div>
                        <div className="bookmark-btn">
                            <button>All</button>
                            <button>Art</button>
                            <button>Music</button>
                            <button>Sport</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default UrgentItems;