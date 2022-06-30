import './App.css'
import { useState } from "react"
import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import SignUp from "./SignUp"
import {Circle} from "phosphor-react"

function Intro(){
	
	const [nextPhase,setNextPhase] = useState(false)
	const [signUp,setSignUp] = useState(false)
	function onNext(){
		setNextPhase(true)
	}

	function onSkip(){
		setSignUp(true)
	}

	return(
			<div className="intro">
				{
					nextPhase ? 
						<Intro2/> :
					signUp ? 
						<SignUp/> :
					<div>
						<div className="intro-main">
							<div  className="intro-img"></div>
						</div>
						<h2>Donate easily, quickly, right on target all over the world</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div className="circle">
						  <Circle size={10} color="#1EBA60" weight="fill" />
						  <Circle size={10} color="#EBEEF2" weight="duotone" />
						  <Circle size={10} color="#EBEEF2" weight="duotone" />
						</div>
						<div className="end">
							<button className="nxt" onClick={setNextPhase}>Next</button>
							<button className="nxt" onClick={setSignUp}>Skip</button>
						</div>
					</div>
				}
			</div>
		)
}

export default Intro;