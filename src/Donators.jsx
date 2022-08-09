import React from "react";
import {SmileyWink,Smiley} from "phosphor-react";

function Donators({img,name,anym, thanks}){
    return(
        <div>
            {
                anym?
                <div className={thanks&&"thanks"}>
                    <div className="donator-ayms">
                        <div>
                            <SmileyWink size={30} color="#ffffff" />
                        </div>
                        <h3>Anonymous</h3>
                    </div>
                </div>:
                <div className={thanks&&"thanks"}>
                    <div className="donators">
                        <div className={img}></div>
                        <h3>{name}</h3>
                    </div>
                </div>
            }
        </div>
    )
}

export default Donators;