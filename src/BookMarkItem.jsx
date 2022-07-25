import React from "react";
import {BookmarkSimple} from "phosphor-react";


function BookMarkItem({img,title,amt,txt,num,num2,info,info2}){

    return(
        <div className="bookmark-card">
            <div className={img}>
                <div className="bookmark-mark">
                    <BookmarkSimple size={20} color="#ffffff" weight="fill" />
                </div>
            </div>
            <div className="bookmark-note">
                <h3>{title}</h3>
                <p><span>{amt} </span>{txt} </p>
                <div className="bookmark-bar"></div>
                <div className="bookmark-end">
                    <p><span>{num}</span> {info}</p>
                    <p><span>{num2}</span> {info2}</p>
                </div>
            </div>
        </div>
    )
}

export default BookMarkItem;