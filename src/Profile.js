import React, {useState} from "react";
// import profile from "./image/dp.jpg";
// import Interest from "./Interest";
import HomePage from "./HomePage";
// import Menu from "./Menu"
import {ArrowLeft,User,Envelope,MapPin,Phone,CaretDown,PencilSimple} from "phosphor-react";

function Profile(){
	const [edit,setEdit] = useState(false)
	const [verify,setVerify] =useState(false)
	const [back,setBack] = useState(false)


	function onEdit(){
		setEdit(oldEdit=>!edit)
	}

	function onVerify(){
		setVerify(true)
	}

	function onBack(){
		setBack(true)
	}

	return(
		<div>
			{	back ?
				<HomePage/> :
				// verify ? 
				// <Interest/>:
				<div className="profile">
					<div className="back">
						<ArrowLeft size={32} color="#2fe22c" weight="duotone" onClick={onBack} />
						<h2>Fill Your Profile</h2>
					</div>
					<div className={edit?"user-2":"user"}>
						{
							edit ?
							<User style={{visibility: "hidden"}} className="user-icon" size={32} color="#7d7d7d" weight="duotone"/> :
							<User className="user-icon" size={32} color="#7d7d7d" weight="duotone"/>
						}
						<div className="user-pen" onClick={onEdit}>
							<PencilSimple size={16} color="#ffffff" />
						</div>
					</div>
					
					<div className="user-detail">
						<div className="user-input">
							<input placeholder="Full name"/>
						</div>
						<div className="user-input">
							<input placeholder="Email"/>
							<Envelope size={20} color="#7d7d7d" weight="fill" />
						</div>
						<div className="user-input">
							<input placeholder="Phone Number"/>
							<Phone size={20} color="#7d7d7d" weight="duotone" />
						</div>
						<div className="user-input">
							<input placeholder="Gender"/>
							<CaretDown size={20} color="#7d7d7d" weight="duotone" />
						</div>
						<div className="user-input">
							<input placeholder="City"/>
							<MapPin size={20} color="#7d7d7d" />
						</div>
					</div>
					<button onClick={onVerify} className="nxt">Verify</button>
				</div>
			}
		</div>
	)
}

export default Profile;