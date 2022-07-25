import React,{useState} from "react"
import Donate from "./Donate"
// import Pin from "./Pin"
import {ArrowLeft,QrCode,Wallet,CurrencyBtc,CurrencyEth,AppleLogo,CreditCard} from "phosphor-react"

function Payment(){
	const [back,setBack] = useState(false)

	// const [nxt,setNxt] = useState(false)

	// const [method,setMethod] = useState(false)

	function onBack(){
		setBack(true)
	}

	// function onNxt(){
	// 	setNxt(true)
	// }

	// function onMethod(){
	// 	setMethod(true)
	// }

	return(
		<div>
			{
				back ?
				<Donate/> :
				// nxt ?
				// <div className="payment-mthd">
				// 	<Pin
				// 		inpayment={true}
				// 	/> 
				// </div>:
				<div className="payment-card">
					<div className="bookmark-top">
						<div className="back">
							<ArrowLeft size={30} color="#1EBA60" onClick={onBack}/>
							<h1>Payment</h1>
						</div>
						<button className="dot3">
							<QrCode size={30} color="#1EBA60" />
						</button>
					</div>
					<div className="coming-top">
						<h3>Select Payment Method</h3>
						<h5>Add Card</h5>
					</div>
					<div className="payment-btn">
						<div className="home-mid">
							<div className="wallet">
								<button>
									<Wallet size={20} color="#1EBA60" weight="duotone" />
								</button>
								<p>My wallet balance($349,000)</p>
							</div>
							<div>
								<input id="donate" type="radio"/>
							</div>
						</div>
						<div className="home-mid">
							<div className="wallet">
								<button>
									<CurrencyEth size={20} color="#1EBA60" />
								</button>
								<p>My Etherum balance($119.00)</p>
							</div>
							<div>
								<input id="donate" type="radio"/>
							</div>
						</div>
						<div className="home-mid">
							<div className="wallet">
								<button>
									<CurrencyBtc size={20} color="#1EBA60" />
								</button>
								<p>My Bitcoin balance($349.022)</p>
							</div>
							<input id="donate" type="radio"/>
						</div>
						<div className="home-mid">
							<div className="wallet">
								<button>
									<CreditCard size={20} color="#1EBA60" weight="duotone" />
								</button>
								<p>My Venmo balance($439.000)</p>
							</div>
							<input id="donate" type="radio"/>
						</div>
						<div className="home-mid">
							<div className="wallet">
								<button>
									<AppleLogo size={20} color="#1EBA60" weight="duotone"/>
								</button>
								<p>My iTunes balance($29,000)</p>
							</div>
							<input id="donate" type="radio"/>
						</div>
					</div>
					<div className="payment-end">
						<button className="nxt">Continue</button>
					</div>
				</div>
			}
		</div>
		)
}

export default Payment;
