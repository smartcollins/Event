import React from "react";
import{useState} from "react";
import Null from "./Null";
import Search from "./Search";
import Notification from "./Notification"
import Bookmark from "./Bookmark";
import {UsersThree,MagnifyingGlass,Bell,BookmarkSimple,Wallet,Circle} from "phosphor-react";

function Home(){
	// const [logo,setLogo] = useState(false)
	const [search,setSearch] = useState(false);
	const [searchMain,setSearchMain] = useState(false);
	const [notify,setNotify] = useState(false)
	const [notifyMain,setNotifyMain] = useState(false)
	const [book,setBook] = useState(false)
	const [bookMain,setBookMain] = useState(false)
	
	function onLogo(){
	// 	setLogo(true)
	}

	function onSearch(){
		setSearch(true)
	}

	function onNotify(){
		setNotify(true)
	}


	// function onCalender(){
	// 	setCalender(true)
	// }

	// function onFund(){
	// 	setFund(true)
	// }

	// function onInbox(){
	// 	setInbox(true)
	// }

	// function onProfile(){
	// 	setProfile(true)
	// 	// setClick(true)
	// }

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

	return(
		<div>	
			{
				// logo? 
				// <Donation/>:
				// search? 
				// <Search/>:
				// notify?
				// <Notification/>:
				// mark?
				// <Bookmark/>:
				// calender?
				// <MyDonation/> :
				// fund?
				// <MyFundraising/> :
				// inbox?
				// <Inbox/>:
				// profile?
				// <Userprofile/>:
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
					{/* <Urgent/> */}
					{/* <Coming/> */}
					{/* <Watch/> */}
					{/* <Prayer/> */}
					{/* <Menu
						onCalender={onCalender}
						onFund={onFund}
						onInbox={onInbox}
						onProfile={onProfile}
					/> */}
				</div>
			}
		</div>
		)
}

export default Home;