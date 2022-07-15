import React from "react";
import{useState} from "react";
import Null from "./Null";
import Notification from "./Notification"
// import Urgent from "./Urgent"
// import Coming from "./Coming"
// import Watch from "./Watch"
// import Prayer from "./Prayer"
// import Menu from "./Menu"
// import Bookmark from "./Bookmark"
// import Search from "./Search"
// import Donation from "./Donation"
// import MyDonation from "./MyDonation"
// import MyFundraising from "./MyFundraising"
// import Inbox from "./Inbox"
// import Userprofile from "./Userprofile"
import {UsersThree,MagnifyingGlass,Bell,BookmarkSimple,Wallet,Circle} from "phosphor-react";

function Home(){
	// const [logo,setLogo] = useState(false)
	const [notify,setNotify] = useState(false)
	// const [mark,setMark] = useState(false)
	// const [search,setSearch] = useState(false)

	// const [calender,setCalender] = useState(false)
	// const [fund,setFund] = useState(false)
	// const [inbox,setInbox] = useState(false)
	// const [profile,setProfile] = useState(false)
	// const [click,setClick] = useState(false)

	function onLogo(){
	// 	setLogo(true)
	}

	function onNotify(){
		setNotify(true)
	}

	function onMark(){
	// 	setMark(true)
	}

	function onSearch(){
	// 	setSearch(true)
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
				notify?
				<Null/>:
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
							<button onClick={onMark}>
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
					<Null/>

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