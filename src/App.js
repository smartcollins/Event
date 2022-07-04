import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
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
        <div className="App-header">
          <img
            className="loading"
            src="https://5.imimg.com/data5/AA/IF/TH/SELLER-1594742/download-free-bulk-whatsapp-sending-software-1000x1000.png"
            alt="head"
          />
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
