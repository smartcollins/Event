import React, { useState } from "react";
import Fundraising from "./Fundraising";
import {
  ArrowLeft,
  Plus,
  CalendarCheck,
  CurrencyDollar,
  CaretDown,
  ArchiveBox,
  CloudArrowUp,
  CloudArrowDown,
} from "phosphor-react";

function Create() {
  const [back, setBack] = useState(false);
  const [alter, setAlter] = useState(false);

  function onBack() {
    setBack(true);
  }

  function onAlter() {
    setAlter(true);
  }

  return (
    <div>
      {back ? (
        <Fundraising />
      ) : (
        <div className="edit">
          <div className="back">
            <ArrowLeft
              size={30}
              color="#1EBA60"
              weight="duotone"
              onClick={onBack}
            />
            <h1>Create New Fundraising</h1>
          </div>
          <div className="edit-main">
            <div
              onClick={onAlter}
              className={alter ? "edit-main-img" : "create-main-dashed"}
            >
              {!alter && (
                <div>
                  <Plus size={20} color="#1ab75d" weight="duotone" />
                  <p>Add Cover Photos</p>
                </div>
              )}
            </div>
            <div className="edit-grid">
              <div className={alter ? "edit1" : "create-dashed"}>
                {!alter && <Plus size={20} color="#1ab75d" weight="duotone" />}
              </div>
              <div className={alter ? "edit2" : "create-dashed"}>
                {!alter && <Plus size={20} color="#1ab75d" weight="duotone" />}
              </div>
              <div className={alter ? "edit3" : "create-dashed"}>
                {!alter && <Plus size={20} color="#1ab75d" weight="duotone" />}
              </div>
              <div className={alter ? "edit4" : "create-dashed"}>
                {!alter && <Plus size={20} color="#1ab75d" weight="duotone" />}
              </div>
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
            <p>
              Chose Donation Expiration Date<span>*</span>
            </p>
            <div>
              <input type="txt" placeholder="Category" />
              <CalendarCheck size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              <label for="mytext">Fund Usage:</label>
              <span>*</span>
            </p>
            <textarea id="mytext" name="mytext" rows="2" cols="50"></textarea>
          </div>
          <div className="edit-end">
            <h1>Donation Recipient Details</h1>
            <p>
              Name of Recipenit (People/Organisation)<span>*</span>
            </p>
            <input type="txt" placeholder="Name" />
            <p>
              Upload Doantion Proposal Documents<span>*</span>
            </p>
            <div>
              <input type="txt" placeholder="Select Document" />
              <CloudArrowDown size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              Upload Medical Documents (optional for medical)<span>*</span>
            </p>
            <div>
              <input type="txt" placeholder="Select Document" />
              <CloudArrowDown size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              Chose Donation Expiration Date<span>*</span>
            </p>
            <div>
              <input type="txt" placeholder="Category" />
              <CalendarCheck size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              <label for="mytext">Fund Usage:</label>
              <span>*</span>
            </p>
            <textarea id="mytext" name="mytext" rows="2" cols="50"></textarea>
            <input name="apply" type="checkbox"/>
            <label for="apply">By checking this, you agree to the terms & conditions thak apply to us.</label>
          </div>
          <div className="edit-end-btn">
            <button className="unclicked">
              <ArchiveBox size={20} color="#1EBA60" weight="duotone" />
              Draft
            </button>
            <button className="clicked">Create & Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
