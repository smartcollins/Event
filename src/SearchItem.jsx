import React,{useState} from "react";
import { BookmarkSimple } from "phosphor-react";

function SearchItem({img,title,amt,info,txt,num,txt2,num2}){
    return(
        <div className="search-result">
            <div className={img}>
                <div className="bookmark-mark">
                    <BookmarkSimple size={20} color="#fafafa" weight="duotone" />
                </div>
            </div>
            <div className="search-detail">
                <div className="search-note">
                    <h3>{title}</h3>
                    <p><span>{amt} </span>{info}</p>
                </div>
                <div className="bookmark-bar"></div>
                <div className="bookmark-end">
                    <p><span>{num}</span> {txt}</p>
                    <p><span>{num2}</span> {txt2}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;