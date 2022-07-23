import React,{useState} from "react"
import Homepage from "./Homepage"
import {ArrowLeft,ShareNetwork,BookmarkSimple,ArrowRight,Circle} from "phosphor-react"

function Donation(){
	const [back,setBack] = useState(false)

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{	
				back ?
				<Homepage/> :
				<div className="donation">
					<div className="donation-img">
						<div className="home-top">
							<div className="back">
								<ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
							</div>
							<div className="home-top2">
								<button>
									<ShareNetwork size={20} color="#13B157" weight="fill" />
								</button>
								<button>
									<BookmarkSimple size={20} color="#13B157" weight="light" />
								</button>
							</div>
						</div>
						<div>
							<Circle size={10} color="#1EBA60" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
							<Circle size={10} color="#ffffff" weight="fill" />
						</div>
					</div>
					<div className="bookmark-note">
						<h3>Help Siamese Twins Surgrey</h3>
						<p><span>$6,679 </span>fund raised from$8,200</p>
						<div className="bookmark-bar"></div>
						<div className="bookmark-end">
							<p><span>3,438</span> Donators</p>
							<p><span>11</span> days left</p>
						</div>
					</div>
					<div className="donation-mid">
						<button>Medical</button>
						<div className="donation-mid-end">
							<div className="donators"></div>
							<div className="donators"></div>
							<div className="donators"></div>
							<p>3,438 donators</p>
							<ArrowRight size={20} color="#1EBA60" weight="duotone"/>
						</div>
					</div>
					<button className="nxt">Donate Now</button>
				</div>
			}
		</div>
		)
}

export default Donation;