import React, { useState } from "react";
import Fundraising from "./Fundraising";
import Success from "./Success";
import { ArrowLeft, Trash, CurrencyDollar, CaretDown } from "phosphor-react";

function Edit() {
  const [back, setBack] = useState(false);
  const [del, setDel] = useState(false);
  const [update, setUpdate] = useState(false);

  function onBack() {
    setBack(true);
  }

  function onDel() {
    setDel(true);
  }

  function onCancel() {
    setDel(false);
  }

  return (
    <div>
      {back ? (
        <Fundraising />
      ) : (
        <div className={update ? "success" : "edit"}>
          {del && (
            <Success
              del={true}
              top="Stop Publishing Fundrasing"
              txt="After you stop this publication, you cannot republish it"
              txt2="Are you sure ?"
              onBtn1={onCancel}
              onBtn2={onBack}
            />
          )}
          <div className="home-top">
            <div className="back">
              <ArrowLeft
                size={30}
                color="#1EBA60"
                weight="duotone"
                onClick={onBack}
              />
              <h1>Edit Fundrasing</h1>
            </div>
            <button onClick={onDel} className="dot">
              <Trash size={20} color="#f02828" weight="duotone" />
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
            <p>
              Title<span>*</span>
            </p>
            <input type="txt" placeholder="Title" />
            <p>
              Category<span>*</span>
            </p>
            <div>
              <input type="txt" placeholder="Category" />
              <CaretDown size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              Total Donation Required<span>*</span>
            </p>
            <div>
              <input type="txt" placeholder="Required" />
              <CurrencyDollar size={20} color="#858C94" weight="duotone" />
            </div>
          </div>
          <div className="Send">
            <button onClick={onBack} className="nxt">Update and Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Edit;
