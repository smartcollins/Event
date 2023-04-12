// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Intro from "./Intro";
import Welcome from "./Welcome";

function App() {
  const [nextPhase, setNextPhase] = useState(false);
  const [nextPhase2, setNextPhase2] = useState(false);
  const [nextPhase3, setNextPhase3] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNextPhase(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [nextPhase]);

  function onNextphase3() {
    setNextPhase3(true);
  }

  function onNextphase2() {
    setNextPhase2(true);
  }

  function onSkip() {
    setSkip(true);
  }

  const introAry = [
          {img:"intro3-img",
          txt:"Trusted, transparent, and effective in sharing kindness",
          nxt3:true,
          nxt:onSkip,
          skip:onSkip},
        
          {img:"intro2-img",
          txt:"Create your own fundraising and publish it to the world",
          nxt2:true,
          nxt:onNextphase3,
          skip:onSkip},
        
        {
          img:"intro-img",
          txt:"Donate easily, quickly, right on target all over the world",
          nxt:{onNextphase2},
          skip:{onSkip}},
  ]

  const intro = introAry.slice(0,1).map((item,idx)=><Intro key={idx} {...item}/>)
  const intro2 = introAry.slice(1,2).map((item,idx)=><Intro key={idx} {...item}/>)
  const intro3 = introAry.slice(2,3).map((item,idx)=><Intro key={idx} {...item}/>)

  return (
    <div className="App">
      {skip ? (
        <Welcome />
      ) : nextPhase3 ? (
        <Intro
          img="intro3-img"
          txt="Trusted, transparent, and effective in sharing kindness"
          nxt3={true}
          nxt={onSkip}
          skip={onSkip}
        />
      ) : nextPhase2 ? (
        <Intro
          img="intro2-img"
          txt="Create your own fundraising and publish it to the world"
          nxt2={true}
          nxt={onNextphase3}
          skip={onSkip}
        />
      ) : nextPhase ? (
        <Intro
          img="intro-img"
          txt="Donate easily, quickly, right on target all over the world"
          nxt={onNextphase2}
          skip={onSkip}
        />
      ) : (
        <div className="signup">
          <div className="intro-main">
            <div className="signup-img"></div>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/27950669?s=200&v=4"
            className="App-logo"
            alt="logo"
          />
        </div>
      )}
    </div>
  );
}

export default App;
