import React, {useState} from "react";
import Homepage from "./Homepage";
import Fundraising from "./Fundraising";
import Calender from "./Calender";
import Menu from "./Menu";
import { UsersThree, MagnifyingGlass, DotsThreeVertical, FunnelSimple } from "phosphor-react";

function Inbox(){
    const [home, setHome] = useState(false);
    const [calender,setCalender] = useState(false);
    const [fund, setFund] = useState(false);

    function onHome(){
        setHome(true);
    }

    function onCalender(){
        setCalender(true);
    }

    function onFund(){
        setFund(true);
    }


    return(
        <div>
            {
                home?
                <Homepage/>:
                fund?
                <Fundraising/>:
                calender?
                <Calender/>:
                <div className="inbox">
                    <div className="home-top">
                        <div className="back">
                            <UsersThree size={40} color="#1EBA60" onClick={onHome} />
                            <h1>Inbox</h1>
                        </div>
                        <button className="dot">
                            <DotsThreeVertical size={30} color="#1EBA60" />
                        </button>
                    </div>
                    <div className="search-max">
                        <div className="search-min">
                            <input type="" name="" placeholder="Search"/>
                            <MagnifyingGlass size={20} color="#D3D3D3" weight="light" />
                        </div>
                        <button className="dot">
                            <FunnelSimple size={20} color="#1EBA60" weight="fill" />
                        </button>
                    </div>
                </div>
            }
            <Menu
                inbox={true}
                onHome={onHome}
                onCalender={onCalender}
                onFund={onFund}
            />
        </div>
    )
}

export default Inbox;