import {ArrowLeft,ChatText,Envelope} from "phosphor-react";
import {useState} from "react";
// import Reset from "./Reset"
import SignUp from "./SignUp"
function Forgot(){
	const [method,setMethod] = useState(false)
	const [back,setBack] = useState(false)

	function onMethod(){
		setMethod(true)
	}

	function onBack(){
		setBack(true)
	}

	return(
			<div>
				{	back ?
					<SignUp/> :
					// method ? 
					// 	<Reset/> :
					<div className="forgot">
						<div className="back">
							<ArrowLeft size={30} color="#2fe22c" weight="duotone" onClick={onBack} />
							<h1>Forgot password</h1>
						</div>
						<div className="intro-main">
			        	    <div className="forgot-img"></div>
				        </div>
						<div>
							<p>Select which contact details should we use to reset your password</p>
							<button className="method">
								<div className="logo-back">
									<ChatText size={32} color="#2fe22c" weight="duotone" />
								</div>
								<div className="method-txt">
									<p>via SMS:</p>
									<p>+6282*****39</p>
								</div>
							</button>
							<button className="method">
								<div className="logo-back">
									<Envelope size={32} color="#2fe22c" weight="duotone" />
								</div>
								<div className="method-txt">
									<p>via Email:</p>
									<p>ex**le@yourdomain.com</p>
								</div>
							</button>
							<div className="forgot-end">
								<button onClick={onMethod} className="nxt">Continue</button>
							</div>
						</div>
					</div>
				}
			</div>
		)
}

export default Forgot;