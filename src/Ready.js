import React, { useState } from "react";
import HomePage from "./HomePage";

function Ready() {
  const [homePage, setHomePage] = useState(false);

  function onHomePage() {
    setHomePage(true);
  }

  return (
    <div>
      {homePage ? (
        <HomePage />
      ) : (
        <div className="resend">
          <div className="code-slot">
            <div className="signup-img"></div>
            <h1>Congratulations!</h1>
            <p>Your account is ready to use</p>
          </div>
          <button onClick={onHomePage} className="nxt">
            Go to Homepage
          </button>
        </div>
      )}
    </div>
  );
}

export default Ready;
