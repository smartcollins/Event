import React,{useState} from "react";
import Fundraising from "./Fundraising";
import Success from "./Success";
import {ArrowLeft,Trash,CurrencyDollar,CaretDown} from "phosphor-react";

function Edit(){
    const [back,setBack] = useState(false);
    const [del,setDel] = useState(false);
    const [update,setUpdate] =useState(false);

    function onBack(){
        setBack(true)
    }

    function onUpdate(){
        setUpdate(true)
    }

    return(
        <div>
            {
                back?
                <Fundraising/>:
                <div className={update?"success":"edit"}>
                    {
                        update&&
                        <Success
                            top="Stop Publishing Fundrasing"
                            txt="Afteryou stop this publication, youcannot republish it"
                        />
                    }
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
                    <div className="edit-end">
                        <h1>Fundaraising Details</h1>
                        <p>Title<span>*</span></p>
                        <input type="txt" placeholder="Title"/>
                        <p>Category<span>*</span></p>
                        <input type="txt" placeholder="Category"/>
                        <p>Total Donation Required<span>*</span></p>
                        <input type="txt" placeholder="Required"/>
                    </div>
                    <div className="Send">
                        <button onClick={onUpdate} className="nxt">Update and Submit</button>
                    </div>
                </div>
                
            }
        </div>
    )
}

export default Edit;