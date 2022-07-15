import React, { useState } from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { ArrowLeft } from "phosphor-react";
import Welcome from "./Welcome";
import Profile from "./Profile";

function Account() {
  const [profile, setProfile] = useState(false);

  const [back, setBack] = useState(false);

  function onProfile() {
    setProfile(true);
  }

  function onBack() {
    setBack(true);
  }

  return (
    <div>
      {back ? (
        <Welcome />
      ) : profile ? (
        <Profile />
      ) : (
        <div className="account">
          <div className="back">
            <ArrowLeft
              size={30}
              color="#2fe22c"
              weight="duotone"
              onClick={onBack}
            />
            <h1>Select your country</h1>
          </div>
          <CountryDropdown
            id="UNIQUE_ID"
            className="select-country"
            preferredCountries={["gb", "us"]}
            value=""
            handleChange={(e) => console.log(e.target.value)}
          ></CountryDropdown>
          <button onClick={onProfile} className="nxt">
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Account;
