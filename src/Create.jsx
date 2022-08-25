import React,{useState} from "react";
import Fundraising from "./Fundraising";
import { ArrowLeft, CalendarCheck, CurrencyDollar, CaretDown, ArchiveBox, CloudArrowUp, CloudArrowDown } from "phosphor-react";

function Create() {
    const [back, setBack] = useState(false);
  
    function onBack() {
      setBack(true);
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
              <p>Chose Donation Expiration Date<span>*</span></p>
              <div>
                <input type="txt" placeholder="Category" />
                <CalendarCheck size={20} color="#858C94" weight="duotone" />
              </div>
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
              <p>Chose Donation Expiration Date<span>*</span></p>
              <div>
                <input type="txt" placeholder="Category" />
                <CalendarCheck size={20} color="#858C94" weight="duotone" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Create;
  