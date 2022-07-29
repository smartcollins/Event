import React from "react";

function Donators({img,name,anym}){
    return(
        <div>
            {
                anym?
                <div></div>:
                <div className="donators">
                    <div className={img}></div>
                    <h3>{name}</h3>
                </div>
            }
        </div>
    )
}

export default Donators;