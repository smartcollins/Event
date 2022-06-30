import './App.css';
import { useState, useEffect } from "react";
import SignUp from "./SignUp"

function Intro3(){
	const [nextPhase,setNextPhase] = useState(false);
	const [signUp,setSignUp] = useState(false);
	function onNext(){
		setNextPhase(true)
	}

	function onSkip(){
		setSignUp(true)
	}

	return(
			<div>
				{
					nextPhase || signUp ? 
						<SignUp/> :
					<div>
						<img className="people2" src="https://i0.wp.com/cloudwell.io/wp-content/uploads/2022/02/packaged-solutions.png?resize=300%2C264&ssl=1" alt="logo"/>
						<h2>Trusted, Transparent, and effective in sharing kindness</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div>
						  <span class="dot"></span> 
						  <span class="dot"></span> 
						  <span class="on"></span> 
						</div>
						<div className="btn">
							<button onClick={onSkip}>Skip</button>
							<button onClick={onNext}>Next</button>
						</div>
					</div>
				}
			</div>
		)
}

export default Intro3;
