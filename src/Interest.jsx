import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  GraduationCap,
  UsersThree,
  FirstAidKit,
  Buildings,
  Palette,
  GlobeHemisphereEast,
  House,
  Wheelchair,
  Users,
  Gift,
  YinYang,
  Heartbeat,
} from "phosphor-react";
import Pin from "./Pin";
import Success from "./Success";
import Profile from "./Profile";
import Homepage from "./Homepage";
// import Welcome from "./Welcome";

function Interest() {
  const [next, setNext] = useState(false);
  const [back, setBack] = useState(false);
  const [pin, setPin] = useState(false);
  const [success, setSuccess] = useState(false);
  const [go, setGo] = useState(false);

  const interests = [
    {
      tittle: "Education",
      icon: GraduationCap,
      selected: false,
    },
    {
      tittle: "Environment",
      icon: YinYang,
      selected: false,
    },
    {
      tittle: "Social",
      icon: UsersThree,
      selected: false,
    },
    {
      tittle: "Sick Child",
      icon: Heartbeat,
      selected: false,
    },
    {
      tittle: "Medical",
      icon: FirstAidKit,
      selected: false,
    },
    {
      tittle: "Infrasture",
      icon: Buildings,
      selected: false,
    },
    {
      tittle: "Art",
      icon: Palette,
      selected: false,
    },
    {
      tittle: "Diaster",
      icon: GlobeHemisphereEast,
      selected: false,
    },
    {
      tittle: "Orphange",
      icon: House,
      selected: false,
    },
    {
      tittle: "Disable",
      icon: Wheelchair,
      selected: false,
    },
    {
      tittle: "Humanity",
      icon: Users,
      selected: false,
    },
    {
      tittle: "Others",
      icon: Gift,
      selected: false,
    },
  ];

  const [selectedInterests, setSelectedInterests] = useState(interests);

  function onInterest(idx, interest) {
    const temp = selectedInterests.map((x) => {
      if (interest.tittle === x.tittle) {
        x.selected = !x.selected;
      }
      return x;
    });
    console.log({ idx, interest });
    setSelectedInterests(temp);
  }

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  function onContinue() {
    setNext(true);
  }

  function onBack() {
    setBack(true);
  }

  function onCreateBack() {
    setNext(false);
  }

  function onCreatePin() {
    setNext(false);
    setPin(true);
    setSuccess(true);
  }

  function onGo() {
    setGo(true);
  }

  // const style = (selected)=> ({
  // 	backgroundColor: selected ? "#1EBA60" : "red"
  // style={style(interest.selected)}
  // })

  return (
    <div>
      {back ? (
        <Profile />
      ) : next ? (
        <Pin
          onCreateBack={onCreateBack}
          top="Create Your Pin"
          txt="Please remember this PIN becayse it will be used when you want to top up, withdraw or donate."
          txt2="Create Pin"
          btn="Create PIN"
          onCreatePin={onCreatePin}
        />
      ) : go ? (
        <Homepage />
      ) : (
        <div className="interest">
          {success && pin && (
            <Success
              top="Great!"
              txt="Your account has been created Successfully!"
              txt2="Go To Home"
              onGo={onGo}
            />
          )}
          <div className="back">
            <ArrowLeft
              size={30}
              color="#2fe22c"
              weight="duotone"
              onClick={!success && onBack}
            />
            <h1>Select Your Interest</h1>
          </div>
          <p>
            Choose your interest to donate. Dont worry you can always change it
            later
          </p>
          <div className="interests">
            {selectedInterests.map((interest, idx) => {
              return (
                <button
                  className={interest.selected ? "sad" : "joy"}
                  key={idx}
                  onClick={() => onInterest(idx, interest)}
                >
                  {interest.selected
                    ? React.createElement(interest.icon, {
                        size: 30,
                        color: "#ffffff",
                        weight: "fill",
                      })
                    : React.createElement(interest.icon, {
                        size: 30,
                        color: "#1EBA60",
                        weight: "fill",
                      })}
                  <p>{interest.tittle} </p>
                </button>
              );
            })}
          </div>
          <button onClick={!success && onContinue} className="nxt">
            Verify
          </button>
        </div>
      )}
    </div>
  );
}

export default Interest;
