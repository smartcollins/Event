import React, { useState } from "react";
import Donate from "./Donate";
import Pin from "./Pin";
import Success from "./Success";
import Null from "./Null";
import {
  ArrowLeft,
  QrCode,
  Wallet,
  CurrencyBtc,
  CurrencyEth,
  AppleLogo,
  CreditCard,
} from "phosphor-react";

function Payment() {
  const [back, setBack] = useState(false);
  const [nxt, setNxt] = useState(false);
  const [confirm, setConfirm] = useState(false);

  function onBack() {
    setBack(true);
  }

  function onNxt() {
    setNxt(true);
  }

  function onConfirm() {
    setConfirm(true);
  }


  return (
    <div>
      {back ? (
        <Donate />
      ) : nxt ? (
        <div className="payment">
          <Pin
            onCreateBack={onBack}
            top="Enter Your Pin"
            txt2="Please enter your Pin"
            btn="Confirm"
            onCreatePin={onConfirm}
          />
          {confirm ? (
            <Success
              top="Successfull"
              txt="Thank You for making a donation"
              txt2="Ok"
              onGo={onBack}
            />
          ) : (
            Null
          )}
        </div>
      ) : (
        <div className="payment">
          <div className="home-top">
            <div className="back">
              <ArrowLeft size={30} color="#1EBA60" onClick={onBack} />
              <h1>Payment</h1>
            </div>
            <button className="dot">
              <QrCode size={30} color="#1EBA60" />
            </button>
          </div>
          <div className="search-txt">
            <h3>Select Payment Method</h3>
            <p>Add Card</p>
          </div>
          <div className="payment-btn">
            <div className="home-mid">
              <div className="wallet">
                <button>
                  <Wallet size={20} color="#1EBA60" weight="duotone" />
                </button>
                <p>My wallet balance($349,000)</p>
              </div>
              <div>
                <input type="radio" />
              </div>
            </div>
            <div className="home-mid">
              <div className="wallet">
                <button>
                  <CurrencyEth size={20} color="#1EBA60" />
                </button>
                <p>My Etherum balance($119.00)</p>
              </div>
              <div>
                <input type="radio" />
              </div>
            </div>
            <div className="home-mid">
              <div className="wallet">
                <button>
                  <CurrencyBtc size={20} color="#1EBA60" />
                </button>
                <p>My Bitcoin balance($349.022)</p>
              </div>
              <input type="radio" />
            </div>
            <div className="home-mid">
              <div className="wallet">
                <button>
                  <CreditCard size={20} color="#1EBA60" weight="duotone" />
                </button>
                <p>My Venmo balance($439.000)</p>
              </div>
              <input type="radio" />
            </div>
            <div className="home-mid">
              <div className="wallet">
                <button>
                  <AppleLogo size={20} color="#1EBA60" weight="duotone" />
                </button>
                <p>My iTunes balance($29,000)</p>
              </div>
              <input type="radio" />
            </div>
          </div>
          <div className="payment-end">
            <button onClick={onNxt} className="nxt">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
