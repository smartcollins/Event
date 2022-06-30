// import './App.css';
import {useState} from "react";
import Intro3 from "./Intro3";
import SignUp from "./SignUp"

function Intro2(){

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
					nextPhase ? 
						<Intro3/> :
					signUp ? 
						<SignUp/> :
					<div>
						<img className="people2" src="https://bestgasandelectricity.co.uk/wp-content/uploads/2021/12/undraw_The_world_is_mine_re_j5cr-1024x753.png.webp" alt="logo"/>
						<h2>Create your own fundraising and publish it to the world</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div>
						  <span class="dot"></span> 
						  <span class="on"></span> 
						  <span class="dot"></span> 
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

export default Intro2;
