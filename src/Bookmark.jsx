import React from "react"
import {useState} from "react"
import Menu from "./Menu"
// import Remove from "./Remove"
import Homepage from "./Homepage"
import {DotsThreeVertical,BookmarkSimple,ArrowLeft} from "phosphor-react"


function Bookmark(){
	const [back,setBack] = useState(false)
	const [bookmark,setBookMark] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onBookMark(){
		setBookMark(true)
	}

	// const style = {
	// 	backgroundColor : bookmark && "rgba(0,0,0,0.8)" 
	// }

	return(
		<div>
			{ 	
				back ?
				<Homepage/> :
                <div className="Home">
                    <div className="home-top">
                        <div className="back">
                            <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
                            <h1>Bookmark</h1>
                        </div>
                        <button className="dot">
                            <DotsThreeVertical size={30} color="#1EBA60" />
                        </button>
                    </div>
                    <div className="bookmark-btn">
                        <button>All</button>
                        <button>Art</button>
                        <button>Music</button>
                        <button>Sport</button>
                    </div>
                    <div className="bookmark-card">
                        <div>
                            <div className="bookmark-img">
                                <div className="bookmark-mark" onClick={onBookMark}>
                                    <BookmarkSimple size={20} color="#1EBA60" weight="fill" />
                                </div>
                            </div>
                            <div>
                                <div className="bookmark-note">
                                    <h3>Help Dilan for brain Turmor Surgery</h3>
                                    <p>
                                        <span>$7,379 </span>
                                        fund raised from $8,200
                                    </p>
                                </div>
                                <div className="bookmark-bar"></div>
                                <div className="bookmark-end">
                                    <p><span>3,274</span> Donators</p>
                                    <p><span>12</span> days left</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bookmark-card">
                        <div>
                            <div className="bookmark-img2">
                                <div className="bookmark-mark" onClick={onBookMark}>
                                    <BookmarkSimple size={20} color="#fafafa" weight="duotone" />
                                </div>
                            </div>
                            <div>
                                <div className="bookmark-note">
                                    <h3>Help Orphange Children to Buy Study Books</h3>
                                    <p>
                                        <span>$2,379 </span>
                                        fund raised from $4,200
                                    </p>
                                </div>
                                <div className="bookmark-bar"></div>
                                <div className="bookmark-end">
                                    <p><span>1,038</span> Donators</p>
                                    <p><span>22</span> days left</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		    }
	    </div>
    )
}

export default Bookmark;