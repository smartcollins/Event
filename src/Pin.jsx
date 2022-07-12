import React, {useState} from "react";
import Interest from "./Interest";
// import Home from "./Home";
// import Payment from "./Payment"
// import Donate from "./Donate"
import {ArrowLeft,Circle,CheckCircle} from "phosphor-react";

function Pin(props){
	const [create,setCreate] = useState(false)
	const [home,setHome] = useState(false)
	const [back,setBack] = useState(false)
	const [pin,setPin] = useState(false)
	const [success,setSuccess] = useState(false)

	function onCreate(){
		setCreate(true)
	}

	function onHome(){
		setHome(true)
	}

	function onBack(){
		setBack(true)
	}

	function onContinue(){
		setPin(true)
	}

	function onSuccess(){
		setSuccess(true)
	}


	return(
		<div>
			{	
				back ?
				<Interest/> :
				// success ?
				// <Donate/> :
				pin ?
				<div>
					<div className="success">
						{/* <Payment/> */}
                        <p>payment</p>
					</div>
					<div className="great">
						<div>
							<CheckCircle size={30} color="#ffffff" weight="fill" />
						</div>
						<h2>Succesful!</h2>
						<p>Thank you for Making a Donation </p>
						<button onClick={onSuccess} className="nxt">Ok</button>
					</div>
				</div> :
				home ? 
					// <Home/> :
                    <p>home</p> :
				create ? 
					<div>
						<div className="success">
							<Interest/>
						</div>
						<div className="great">
							<div>
								<CheckCircle size={30} color="#ffffff" weight="fill" />
							</div>
							<h2>Great!</h2>
							<p>You account has been created succesfully</p>
							<button onClick={onHome} className="nxt">Go to Home</button>
						</div>
					</div> :
					<div>
						<div className="back">
							<ArrowLeft size={32} color="#2fe22c" weight="duotone" onClick={onBack}/>
							<h1>{props.inpayment?"Enter":"Create"} Your Pin</h1>
						</div>
						{props.inpayment ? " " : <p>Please remember this PIN because it will be used when you want to to up, withdraw, or donate.</p>}
						<div className="create">
							{
								props.inpayment ?
								<h3>Please Enter Your Pin</h3> :
								<h2>Create Pin</h2>
							}
							<Circle size={16} color="#1EBA60" weight="fill" />
							<Circle size={16} color="#1EBA60" weight="fill" />
							<Circle size={16} color="#1EBA60" weight="fill" />
							<Circle size={16} color="#1EBA60" weight="fill" />
							<Circle size={16} color="#E6E6E6" weight="fill" />
							<Circle size={16} color="#E6E6E6" weight="fill" />
						</div>
						{
							props.inpayment ?
							<button onClick={onContinue} className="nxt">Continue</button> :
							<button onClick={onCreate} className="nxt">Create PIN</button>
						}
					</div>
			}
		</div>
		)
}

export default Pin;