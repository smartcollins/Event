import React,{useState} from "react";
import Homepage from "./Homepage";

function Fundraising() {
    const [home,setHome] = useState(false);
    
    function onHome(){
        setHome(true)
    }
    
    return(
        <div>
            {
                home?
                <Homepage/>:
                <div>
                    welcome
                </div>
            }
        </div>
    )
}

export default Fundraising;