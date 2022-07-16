import React from "react"
import {useState} from "react"
import Menu from "./Menu"
import BookMarkItem from "./BookMarkItem"
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
                    <BookMarkItem
                        img= "bookmark-img"
                        title= "Help Dilan Brain Turmor Surgery"
                        amt= "$7,379"
                        txt= "fund rasied from $8,200"
                        num= "3,274"
                        info= "Donators"
                        num2= {12}
                        info2= "days left"
                    />
                    <BookMarkItem
                        img= "bookmark-img2"
                        title= "Help Orphange Children to Buy Study Books"
                        amt= "$2,379"
                        txt= "fund rasied from $4,200"
                        num= "1,038"
                        info= "Donators"
                        num2= {22}
                        info2= "days left"
                    />
                    
                    
                </div>
		    }
	    </div>
    )
}

export default Bookmark;