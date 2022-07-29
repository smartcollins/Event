import React,{useState} from "react";
import Donation from "./Donation";
import Donators from "./Donators";
import {ArrowLeft,MagnifyingGlass} from "phosphor-react"

function List(){
    const [back,setBack] = useState(false);

    function onBack(){
        setBack(true)
    }

    return(
        <div>
            {
                back?
                <Donation/>:
                <div className="Home">
                    <div className="home-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
							<h1>3,458 Donators</h1>
						</div>
                        <button className="dot">
                            <MagnifyingGlass size={30} color="#1EBA60" />
                        </button>
                    </div>
                    <Donators
                        img= "prayer-img2"
                        name= "Kathyrn Murphy"
                    />
                    <Donators
                        anym={true}
                        name= "Kathyrn Murphy"
                    />
                </div>
            }
        </div>
    )
}

export default List;