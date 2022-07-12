import React, {useState, useEffect} from "react";
import {ArrowLeft,GraduationCap,UsersThree,FirstAidKit,Buildings,Palette,GlobeHemisphereEast,House
,Wheelchair,Users,Gift,YinYang,Heartbeat}  from "phosphor-react";
import Pin from "./Pin"
import Profile from "./Profile"


function Interest(){
	const[interest,setInterest] = useState(false)
	const[next,setNext] = useState(false)
	const [back,setBack] = useState(false)

	const interests =[{
		tittle: "Education",
		icon: GraduationCap,
		selected: false
	},{
		tittle: "Environment",
		icon: YinYang,
		selected: false
	},{
		tittle: "Social",
		icon: UsersThree,
		selected: false
	},{
		tittle: "Sick Child",
		icon: Heartbeat,
		selected: false
	},{
		tittle: "Medical",
		icon: FirstAidKit,
		selected: false
	},{
		tittle: "Infrasture",
		icon: Buildings,
		selected: false
	},{
		tittle: "Art",
		icon: Palette,
		selected: false
	},{
		tittle: "Diaster",
		icon: GlobeHemisphereEast,
		selected: false
	},{
		tittle: "Orphange",
		icon: House,
		selected: false
	},{
		tittle: "Disable",
		icon: Wheelchair,
		selected: false
	},{
		tittle: "Humanity",
		icon: Users,
		selected: false
	},{
		tittle: "Others",
		icon: Gift,
		selected: false
	}]
	

	const [selectedInterests, setSelectedInterests] = useState(interests)

	function onInterest(idx, interest){
		// setInterest(oldInterest=>!interest)
		// const temp = [...interests]
		// temp[idx].selected = !temp[idx].selected
		const temp = selectedInterests.map((x)=>{
			if(interest.tittle === x.tittle){
				x.selected = !x.selected
			}
			return x
		})
		console.log({idx,interest})
		setSelectedInterests(temp)
	}

	useEffect(
		()=>{
			console.log(interests)
		},[
			interests
		]
	)
	
	function onContinue(){
		setNext(true)
	}

	function onBack(){
		setBack(true)
	}

	
	const style = (selected)=> ({
		backgroundColor: selected ? "#1EBA60" : "blue"
	})

	return(
		<div>
			{	back ? 
				<Profile/> :
				next ? 
				<Pin/> :
				<div className="interest">
					<div className="back">
						<ArrowLeft size={30} color="#2fe22c" weight="duotone" onClick={onBack}/>
						<h1>Select Your Interest</h1>
					</div>
					<p>Choose your interest to donate. Dont worry you can always change it later</p>
					<div className="interests">
						
						{
							selectedInterests.map((interest, idx)=>{
								return(
									<button key={idx} onClick={() => onInterest(idx, interest)} style={style(interest.selected)}>
										{React.createElement(interest.icon, { size: 30, color:"#1EBA60"})}
										<p>{interest.tittle} </p>
									</button>
								)
							})
						}
					</div>
					<button onClick={onContinue} className="nxt">Verify</button>
				</div>
			}
		</div>
		)
}

export default Interest;