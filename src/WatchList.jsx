import React,{useState} from "react";
import Homepage from "./Homepage";
import {ArrowLeft,DotsThreeVertical,PlayCircle} from "phosphor-react";

function WatchList(){
    const [back,setBack] = useState(false);

    function onBack(){
        setBack(true)
    }

    function onPlay(){
        
    }

    return(
        <div>
            {
                back?
                <Homepage/>:
                <div>
                    <div className="home-top">
                        <div className="back">
                            <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
                            <h1>Watch the Impact of Your Doantion</h1>
                        </div>
                        <button className="dot">
                            <DotsThreeVertical size={30} color="#1EBA60" />
                        </button>
                    </div>
                    <div className="watch2-main">
                        <div className="watch-main-video">
                            <div className="watch-main">
                                <div className="watch-play">
                                    <PlayCircle size={30} color="#1EBA60" weight="bold" onClick={onPlay} />
                                </div>
                                <div className="watch-txt">
                                    <p>Help improve Nutrition in Africa</p>
                                </div>
                            </div>
                            <div className="watch-main2">
                                <div className="watch-play">
                                    <PlayCircle size={30} color="#1EBA60" weight="bold" />
                                </div>
                                <div className="watch-txt">
                                    <p>Siamese Twins Surgrey Was Successful</p>
                                </div>
                            </div>
                            <div className="watch-main3">
                                <div className="watch-play">
                                    <PlayCircle size={30} color="#1EBA60" weight="bold" />
                                </div>
                                <div className="watch-txt">
                                    <p>Help Combat Poverty in Africa</p>
                                </div>
                            </div>
                            <div className="watch-main">
                                <div className="watch-play">
                                    <PlayCircle size={30} color="#1EBA60" weight="bold" />
                                </div>
                                <div className="watch-txt">
                                    <p>Help Victims of Flash Flood in Sudan</p>
                                </div>
                            </div>
                            <div className="watch-main">
                                <div className="watch-play">
                                    <PlayCircle size={30} color="#1EBA60" weight="bold" />
                                </div>
                                <div className="watch-txt">
                                    <p>Help Homeless People in Durban</p>
                                </div>
                            </div>
                            <div className="watch-main6">
                                <div className="watch-play">
                                    <PlayCircle size={30} color="#1EBA60" weight="bold" />
                                </div>
                                <div className="watch-txt">
                                    <p>Fight Poilio in Europe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default WatchList;