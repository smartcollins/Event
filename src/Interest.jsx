import React, {useState} from "react";
import {ArrowLeft,GraduationCap,UsersThree,FirstAidKit,Buildings,Palette,GlobeHemisphereEast,Fish,House
,Wheelchair,Users,Gift,YinYang,Heartbeat}  from "phosphor-react";

// import Pin from "./Pin"
import Profile from "./Profile"


function Interest(){
	const[interest,setInterest] = useState(false)
	const[next,setNext] = useState(false)
	const [back,setBack] = useState(false)

	function onInterest(){
		setInterest(oldInterest=>!interest)
	}

	function onContinue(){
		setNext(true)
	}

	function onBack(){
		setBack(true)
	}

	const style={
		backgroundColor: interest ? "#1EBA60" : "blue"
	}

	return(
		<div>
			{	back ? 
				<Profile/> :
				// next ? 
				// <Pin/> :
				<div className="interest">
					<div className="back">
						<ArrowLeft size={32} color="#2fe22c" weight="duotone" onClick={onBack}/>
						<h2>Select Your Interest</h2>
					</div>
					<p>Choose your interest to donate. Dont worry you can always change it later</p>
					<div className="interests">
						<button onClick={onInterest} style={style}>
							<GraduationCap size={28} color="#1EBA60" />
							<p>Education</p>
						</button>
						<button onClick={onInterest} style={style}>
							<YinYang size={28} color="#1EBA60" weight="duotone" />							
							<p>Environment</p>
						</button>
						<button onClick={onInterest} style={style}>
							<UsersThree size={28} color="#1EBA60" />
							<p>Social</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Heartbeat size={28} color="#1EBA60" weight="thin" />
							<p>Sick Child</p>
						</button>
						<button onClick={onInterest} style={style}>
							<FirstAidKit size={28} color="#1EBA60" />
							<p>Medical</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Buildings size={28} color="#1EBA60" />
							<p>Infrastructure</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Palette size={28} color="#1EBA60" />
							<p>Art</p>
						</button>
						<button onClick={onInterest} style={style}>
							<GlobeHemisphereEast size={28} color="#1EBA60" />
							<p>Disaster</p>
						</button>
						<button onClick={onInterest} style={style}>
							<House size={28} color="#1EBA60" weight="duotone" />
							<p>Orphanage</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Wheelchair size={28} color="#1EBA60" weight="duotone" />
							<p>Diasable</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Users size={28} color="#1EBA60" weight="light" />
							<p>Humanity</p>
						</button>
						<button onClick={onInterest} style={style}>
							<Gift size={28} color="#1EBA60" weight="duotone" />
							<p>Others</p>
						</button>
					</div>
					<button onClick={onContinue} className="nxt">Verify</button>
				</div>
			}
		</div>
		)
}

export default Interest;