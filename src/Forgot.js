import {ArrowLeft,ChatText,Envelope} from "phosphor-react";
import {useState} from "react";
import Reset from "./Reset"
import Welcome from "./Welcome"
function Forgot(){
	const [back,setBack] = useState(false)
	const [method,setMethod] = useState(false)
	const [cont,setCont] = useState(false)
	const [verify,setVerify] = useState(false)

	function onBack(){
		setBack(true)
	}

	function onMethod(){
		setMethod(true)
	}

	function onCont(){
		setCont(true)
	}

	function onVerify(){
		setVerify(true)
	}


	return(
			<div>
				{	back ?
					<Welcome/> :
					verify ? 
					<Reset/> :
					<div className="forgot">
						<div className="back">
							<ArrowLeft size={30} color="#2fe22c" weight="duotone" onClick={onBack} />
							<h1>Forgot password</h1>
						</div>
						{
							method&&cont?
							<div>
								<div className="resend">
									
									<div className="code-slot">
										<p>Code has been sent to +6262*****39</p>
										<div className="code-slot-btn">
											<button>4</button>
											<button>2</button>
											<button>7</button>
											<button>9</button>
										</div>
										<p>Resend code in <span>56</span> s</p>
									</div>
									<button className="nxt" onClick={onVerify}>Verify</button>
								</div>
							</div>:
							<div>
								<div className="intro-main">
					        	    <div className="forgot-img"></div>
						        </div>
								<div>
									<p className="forgot-txt">Select which contact details should we use to reset your password</p>
									<button onClick={onMethod} className="method">
										<div className="method-logo">
											<ChatText size={32} color="#2fe22c" weight="duotone" />
										</div>
										<div className="method-txt">
											<p>via SMS:</p>
											<p>+6282*****39</p>
										</div>
									</button>
									<button className="method">
										<div className="method-logo">
											<Envelope size={32} color="#2fe22c" weight="duotone" />
										</div>
										<div className="method-txt">
											<p>via Email:</p>
											<p>ex**le@yourdomain.com</p>
										</div>
									</button>
									<button onClick={onCont} className="nxt">Continue</button>
								</div>
							</div>
						}
					</div>
				}
			</div>
		)
}

export default Forgot;