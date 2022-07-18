import React,{useState} from "react";
import { BookmarkSimple } from "phosphor-react";

function SearchItem(){
    return(
        <div className="search-result">
            <div className="search-img3">
                <div className="urgent-mark">
                    <BookmarkSimple size={20} color="#fafafa" weight="duotone" />
                </div>
            </div>
            <div className="search-detail">
                <div className="search-note">
                    <h3>Help Little Baby to Do Stom</h3>
                    <div className="search-fund">
                        <span>$2,275 </span>
                        <p>fund raised from $6,310</p>
                    </div>
                </div>
                <div className="search-bar-min">
                    <div className="urgent-bar"></div>
                </div>
                <div className="urgent-end">
                    <p><span>938</span> Donators</p>
                    <p><span>26</span> days left</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;