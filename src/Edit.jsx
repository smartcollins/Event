import React,{useState} from "react";
import Fundraising from "./Fundraising";
import {ArrowLeft,Trash} from "phosphor-react";

function Edit(){
    const [back,setBack] = useState(false);
    const [del,setDel] = useState(false);

    function onBack(){
        setBack(true)
    }

    return(
        <div>
            {
                back?
                <Fundraising/>:
                <div className="edit">
                    <div className="home-top">
                        <div className="back">
                            <ArrowLeft size={30} color="#1EBA60" weight="duotone" onClick={onBack}/>
                            <h1>Edit Fundrasing</h1>
                        </div>
                        <button className="dot">
                            <Trash size={20} color="#f02828" weight="duotone"/>
                        </button>
                        <div className="edit-main">
                            <div></div>
                            <div className="edit-grid">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            }
        </div>
    )
}

export default Edit;