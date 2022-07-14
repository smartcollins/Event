import React, {useState} from "react";
// import Interest from "./Interest";
// import Home from "./Home";
// import Payment from "./Payment"
// import Donate from "./Donate"
import {ArrowLeft,Circle,CheckCircle} from "phosphor-react";

function Pin({onCreateBack,top,txt,txt2,btn}){
	// const [create,setCreate] = useState(false)
	// const [home,setHome] = useState(false)
	// const [back,setBack] = useState(false)
	// const [pin,setPin] = useState(false)
	// const [success,setSuccess] = useState(false)

	// function onCreate(){
	// 	setCreate(true)
	// }

	// function onHome(){
	// 	setHome(true)
	// }

	// function onBack(){
	// 	setBack(true)
	// }

	// function onContinue(){
	// 	setPin(true)
	// }

	// function onSuccess(){
	// 	setSuccess(true)
	// }


	return(
		<div className="Pin">
			<div className="back">
				<ArrowLeft size={30} color="#2fe22c" weight="duotone" onClick={onCreateBack}/>
				<h1>{top}</h1>
			</div>
			<p>{txt}</p>
			<div className="create">
				<h2>{txt2}</h2>
				<div className="pin">
					<Circle size={16} color="#1EBA60" weight="fill" />
					<Circle size={16} color="#1EBA60" weight="fill" />
					<Circle size={16} color="#1EBA60" weight="fill" />
					<Circle size={16} color="#1EBA60" weight="fill" />
					<Circle size={16} color="#E6E6E6" weight="fill" />
					<Circle size={16} color="#E6E6E6" weight="fill" />
				</div>
				<button className="nxt">{btn}</button>
			</div>
		</div>
		)
}

export default Pin;