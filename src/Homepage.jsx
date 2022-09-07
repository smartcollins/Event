import React from "react";
import{useState} from "react";
import Null from "./Null";
import Search from "./Search";
import Notification from "./Notification"
import Bookmark from "./Bookmark";
import BookMarkItem from "./BookMarkItem";
import UrgentItems from "./UrgentItems";
import ComingItems from "./ComingItems";
import WatchList from "./WatchList";
import Prayer from "./Prayer";
import Prayers from "./Prayers";
import Donation from "./Donation";
import Calender from "./Calender";
import Fundraising from "./Fundraising";
import Inbox from "./Inbox";
import Menu from "./Menu";
import {UsersThree,MagnifyingGlass,Bell,BookmarkSimple,Wallet,Circle,PlayCircle} from "phosphor-react";

function Home(){
	const [logo,setLogo] = useState(false)
	const [search,setSearch] = useState(false);
	const [searchMain,setSearchMain] = useState(false);
	const [notify,setNotify] = useState(false)
	const [notifyMain,setNotifyMain] = useState(false)
	const [book,setBook] = useState(false)
	const [bookMain,setBookMain] = useState(false)
	const [urgent,setUrgent] = useState(false)
	const [coming,setComing] = useState(false);
	const [watch,setWatch] = useState(false);
	const [prayer,setPrayer] = useState(false);
	const [calender,setCalender] = useState(false);
	const [fund,setFund] = useState(false);
	const [inbox,setInbox] = useState(false);


	function onLogo(){
		setLogo(true)
	}

	function onSearch(){
		setSearch(true)
	}

	function onNotify(){
		setNotify(true)
	}

	function onSearchMain(){
		setSearchMain(true)
		setSearch(false)
	}

	function onNotifyMain(){
		setNotifyMain(true)
		// setNotify(true)
	}

	function onBook(){
		setBook(true)
	}

	function onBookMain(){
		setBookMain(true)
		setBook(false)
	}

	function onBack(){
		setSearch(false)
		setNotify(false)
		setNotifyMain(false)
		setBook(false)
		setBookMain(false)
	}

	function onUrgent(){
		setUrgent(true)
	}

	function onComing(){
		setComing(true)
	}

	function onWatch(){
		setWatch(true)
	}

	function onPrayer(){
		setPrayer(true)
	}


	function onCalender(){
		setCalender(true)
	}

	function onFund(){
		setFund(true)
	}

	function onInbox(){
		setInbox(true)
	}

	// function onHome(){
	// 	setLogo(false)
	// 	setSearch(false)
	// 	setSearchMain(false)
	// 	setNotify(false)
	// 	setNotifyMain(false)
	// 	setBook(false)
	// 	setBookMain(false)
	// 	setUrgent(false)
	// 	setComing(false)
	// 	setWatch(false)
	// 	setPrayer(false)
	// 	setCalender(false)
	// }


	return(
		<div>	
			{
				inbox?
				<Inbox/>:
				fund?
				<Fundraising/>:
				calender?
				<Calender/>:
				logo?
				<Donation/>:
				prayer?
				<Prayers/>:
				watch?
				<WatchList/>:
				coming?
				<ComingItems/>:
				urgent?
				<UrgentItems/>:
				search?
				<Null
					search= {true}
					top= "Search"
					onBack= {onBack}
					txt= "No results found"
					onMain={onSearchMain}
				/>:
				searchMain?
				<Search/>:
				notifyMain?
				<Notification/>:
				notify?
				<Null
					top= "Notification"
					onBack={onBack}
					txt= "You have no notification"
					onMain={onNotifyMain}
				/>:
				book?
				<Null
					book= {true}
					top= "Bookmark"
					onBack= {onBack}
					txt= "You have no Bookmark"
					onMain={onBookMain}
				/>:
				bookMain?
				<Bookmark/>:
				<div className="Home">
					<div className="home-top">
						<div className="back">
							<UsersThree size={40} color="#1EBA60" weight="duotone" onClick={onLogo}/>
							<h1>Wecare</h1>
						</div>
						<div className="home-top2">
							<button onClick={onSearch}>
								<MagnifyingGlass size={16} color="#13B157" weight="bold" />
							</button>
							<button onClick={onNotify}>
								<Bell size={16} color="#13B157" weight="fill" />
							</button>
							<button onClick={onBook}>
								<BookmarkSimple size={16} color="#13B157" weight="fill" />
							</button>
						</div>
					</div>

					<div className="home-mid">
						<div className="wallet">
							<button>
								<Wallet size={30} color="#1EBA60" weight="duotone" />
							</button>
							<div>
								<h3>$349</h3>
								<p>My wallet balance</p>
							</div>
						</div>
						<button>Top up</button>
					</div>

					<div className="help">
						<p>Help Alice Brain Surgery</p>
						<div>
							<Circle size={10} color="#1EBA60" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
						</div>
					</div>
					<div className="urgent">
						<div className="bookmark-btn">
							<button>All</button>
							<button>Art</button>
							<button>Music</button>
							<button>Sport</button>
						</div>
						<div className="search-txt">
							<h1>Urgent Fundraising</h1>
							<p onClick={onUrgent}>See all</p>
						</div>
						<BookMarkItem
							img= "bookmark-img2"
							title= "Help Orphange Children to Buy Study Books"
							amt= "$2,379"
							txt= "fund rasied from $4,200"
							num= "1,280"
							info= "Donators"
							num2= "19"
							info2= "days left"	
						/>
					</div>
					<div className="urgent">
						<div className="search-txt">
							<h1>Coming to an end</h1>
							<p onClick={onComing}>See all</p>
						</div>
						<BookMarkItem
							img= "bookmark-img8"
							title= "Helping Earthquake victims"
							amt= "$4,359"
							txt= "fund rasied from $8,000"
							num= "2,367"
							info= "Donators"
							num2= "4"
							info2= "days left"	
						/>
					</div>
					<div className="urgent">
						<div className="search-txt">
							<h1>Watch the Impact of Your</h1>
							<p onClick={onWatch}>See all</p>
						</div>
						<div className="watch-video">
							<div className="watch1">
								<div className="watch-play">
									<PlayCircle size={30} color="#1EBA60" weight="bold" />
								</div>
								<div className="watch-txt">
									<p>Sarah's Surgrey Was Successful</p>
								</div>
							</div>
							<div className="watch2">
								<div className="watch-play">
									<PlayCircle size={30} color="#1EBA60" weight="bold" />
								</div>
								<div className="watch-txt">
									<p>Siamese Twins Surgrey Was Successful</p>
								</div>
							</div>
							
						</div>
					</div>
					<div className="urgent">
						<div className="search-txt">
								<h1>Prayer From Good People</h1>
								<p onClick={onPrayer}>See all</p>
						</div>
						<Prayer
							img= "prayer-img"
							name= "Esther Howard"
							day= "Today"
							txt= "Hopefully Audrey can get surgrey soon, recover from her illness, and play with her friends."
							txt2= "You and 48 others sent this prayer"
						/>
					</div>
					<Menu
						home={true}
						onCalender={onCalender}
						onFund={onFund}
						onInbox={onInbox}
					/>
				</div>
			}
		</div>
		)
}

export default Home;