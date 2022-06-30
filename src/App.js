import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Intro from "./Intro";

function App() {
  const [nextPhase,setNextPhase] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNextPhase(true)
    }, 1000)

    return () => clearTimeout(timeout)

  }, [nextPhase])


  return (
    <div className="App">
      {
        nextPhase ?
        <Intro/> :
          <div className="App-header">
              <img className="loading" src="https://5.imimg.com/data5/AA/IF/TH/SELLER-1594742/download-free-bulk-whatsapp-sending-software-1000x1000.png" alt="head"/>
              <img src="https://avatars.githubusercontent.com/u/27950669?s=200&v=4" className="App-logo" alt="logo" />
              
          </div>
      }
    </div>
  );
}

export default App;
