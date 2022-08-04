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
                    </div>
                    <div className="edit-main">
                            <div className="edit-main-img"></div>
                            <div className="edit-grid">
                                <div className="edit1"></div>
                                <div className="edit2"></div>
                                <div className="edit3"></div>
                                <div className="edit4"></div>
                            </div>
                        </div>
                </div>
                
            }
        </div>
    )
}

export default Edit;