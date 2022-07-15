import React, { useState } from "react";
import Account from "./Account";

function Ready() {
  const [account, setAccount] = useState(false);

  function onAccount() {
    setAccount(true);
  }

  return (
    <div>
      {account ? (
        <Account />
      ) : (
        <div className="resend">
          <div className="code-slot">
            <div className="signup-img"></div>
            <h1>Congratulations!</h1>
            <p>Your account is ready to use</p>
          </div>
          <button onClick={onAccount} className="nxt">
            Go to Homepage
          </button>
        </div>
      )}
    </div>
  );
}

export default Ready;
