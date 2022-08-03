import React from "react";
import { BookmarkSimple, PencilSimple, ShareNetwork } from "phosphor-react";

function SearchItem({img,title,amt,info,txt,num,txt2,num2, again, txt3, edit, onEdit, onSee, wait}){
    return(
        <div className={again||edit||wait ? "donations" : null}>
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
            {
                again &&
                <div className="again">
                    <h3>You have donated <span>{txt3}</span></h3>
                    <button>Donate Again</button>
                </div>
            }
            {
                edit&&
                <div className="again">
                    <div className="edit-share">
                        <div>
                            <PencilSimple size={20} color="#1EBA60 " weight="duotone" onClick={onEdit}/>
                            <p onClick={onEdit}>Edit</p>
                        </div>
                        <div>
                            <ShareNetwork size={20} color="#1EBA60" weight="duotone" />
                            <p>Share</p>
                        </div>
                    </div>
                    <button onClick={onSee}>See Results</button>
                </div>
            }
            {
                wait&&
                <div className="wait">
                    <p>Waiting for review ....</p>
                </div>
            }
        </div>
    )
}

export default SearchItem;