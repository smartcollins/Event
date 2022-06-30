import './App.css';
import { useState, useEffect } from "react";
// import Intro2 from "./Intro2"
// import Intro3 from "./Intro3"
// import SignUp from "./SignUp"


function Intro(){
	
	const [nextPhase,setNextPhase] = useState(false);
	const [signUp,setSignUp] = useState(false);
	function onNext(){
		setNextPhase(true)
	}

	function onSkip(){
		setSignUp(true)
	}

	return(
			<div className="intro">
				{
					// nextPhase ? 
					// 	<Intro2/> :
					// signUp ? 
					// 	<SignUp/> :
					<div>
						<div className="intro-main">
							<div  className="intro-img"></div>
						</div>
						<h2>Donate easily, quickly, right on target all over the world</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div>
						  <span class="on"></span> 
						  <span class="dot"></span> 
						  <span class="dot"></span> 
						</div>
						<div className="btn">
							<button onClick={setSignUp}>Skip</button>
							<button onClick={setNextPhase}>Next</button>
						</div>
					</div>
				}
			</div>
		)
}

export default Intro;