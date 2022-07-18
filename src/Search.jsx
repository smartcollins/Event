import React,{useState} from "react";
import Homepage from "./Homepage";
import SearchItem from "./SearchItem";
import {ArrowLeft,MagnifyingGlass,onMain,FunnelSimple} from "phosphor-react"

function Search(){
    const [back,setBack] = useState(false);

    function onBack(){
        setBack(true)    
    }
    return(
        <div>
            {
                back?
                <Homepage/>:
                <div className="Home">
                    <div className="back">
                        <ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
                        <h1>Search</h1>
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
                    <div className="search-txt">
                        <p>Search Results</p>
                        <p>3,459 found</p>
                    </div>
                    <SearchItem
                        img="search-img3"
                        title= "Help Little Baby Surgery"
                        amt= "$2,275"
                        info= "fund raised from $10,310"
                        num= "4,471"
                        txt= "Donators"
                        num2= "9"
                        txt2= "days left"
                    />
                </div>
            }
        </div>
    )
}

export default Search;