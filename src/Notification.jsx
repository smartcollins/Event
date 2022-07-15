import React from "react"
import {useState} from "react";
import Homepage from "./Homepage";
import Menu from "./Menu";
import {Bell,DotsThreeVertical,ArrowLeft,CheckCircle,XCircle} from "phosphor-react";

function Notification(){
	const [bell,setBell] = useState(false)
	const [back,setBack] = useState(false)

	function onBell(){
		setBell(true)
	}

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{
				back ?
				<Homepage/> :
                <div className="Home">
                    <div className="home-top">
                        <div className="back">
                            <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
                            <h1>Notification</h1>
                        </div>
                        <button className="dot">
                            <DotsThreeVertical size={30} color="#1EBA60" />
                        </button>
                    </div>
                    <div className="notification">					
                        <p>Today, December 25 2023</p>
                        <div className="notify-bar">
                            <button className="notify-logo">
                                <CheckCircle size={20} color="#ffffff" weight="fill"/>
                            </button>
                            <div>
                                <p>Top up Successful</p>
                                <p>You have successsfully top up your wallet in the amount of $100</p>
                            </div>
                        </div>
                        <div className="notify-bar">
                            <button className="notify-logo cancel">
                                <XCircle size={20} color="#ffffff" weight="fill"/>
                            </button>
                            <div>
                                <p>Donation Cancelled!</p>
                                <p>You have cancel donation for victims of natural disasters</p>
                            </div>

                        </div>
                        <p>Yesterday, December 24 2023</p>
                        <div className="notify-bar">
                            <button className="notify-logo new">
                                <Bell size={20} color="#ffffff" weight="fill" />
                            </button>
                            <div>
                                <p>New Feature Available</p>
                                <p>You can now invite friends to join donation with you</p>
                            </div>
                        </div>

                        <p>Today, December 23 2023</p>
                        <div className="notify-bar">
                            <button className="notify-logo">
                                <CheckCircle size={20} color="#ffffff" weight="fill"/>
                            </button>
                            <div>
                                <p>Top up Successful</p>
                                <p>You have successsfully top up your wallet in the amount of $100</p>
                            </div>
                        </div>
                        <div className="notify-bar">
                            <button className="notify-logo cancel">
                                <XCircle size={20} color="#ffffff" weight="fill"/>
                            </button>
                            <div>
                                <p>Donation Cancelled</p>
                                <p>You cancelled donation for victims of natural disasters</p>
                            </div>
                        </div>
                    </div>
                    <Menu/>
                </div>
			}
		</div>
		)
}


export default Notification;
