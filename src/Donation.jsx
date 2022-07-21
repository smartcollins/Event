import {useState} from "react"
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
						<div className="donation-top">
							<ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
							<div className="donation-top-btn">
								<button>
									<ShareNetwork size={30} color="#1EBA60" weight="light"/>
									</button>
								<button>
									<BookmarkSimple size={30} color="#1EBA60" weight="light"/>
								</button>
							</div>
						</div>
						<div className="circle">
							<Circle size={15} color="#1EBA60" weight="fill"/>
							<Circle size={15} color="#FaFaFa" weight="duotone"/>
							<Circle size={15} color="#FaFaFa" weight="duotone"/>
							<Circle size={15} color="#FaFaFa" weight="duotone"/>
							<Circle size={15} color="#FaFaFa" weight="duotone"/>
						</div>
					</div>
					<div className="donation-txt">
						<div className="urgent-note">
							<h3>Help Siamese Twins Surgery</h3>
							<div className="donation-txt-top">
								<p>$6,679 </p>
								<p>	fund raised from $8,200</p>
							</div>
						</div>
						<div className="urgent-bar"></div>
						<div className="urgent-end">
							<p><span>3,438</span> Donators</p>
							<p><span>11</span> days left</p>
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
					<Fundraiser/>
				</div>
			}
		</div>
		)
}

export default Donation;