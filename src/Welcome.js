import { useState } from "react";
import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import SignUp from "./SignUp";
// import SignIn from "./SignIn"

function Welcome() {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  function onSignUp() {
    setSignUp(true);
  }

  function onSignIn() {
    setSignIn(true);
  }

  return (
    <div>
      {
        signUp ?
        <SignUp/> :
        // signIn ?
        // <SignIn/> :
        <div className="welcome">
          <div className="intro-main">
            <div className="welcome-img"></div>
          </div>
          <h2>Lets you in</h2>
          <div className="welcome-btn">
            <button>
              <div>
                <FacebookLogo size={25} color="#0d1be3" weight="fill" />
                <p className="logo-text">Facebook</p>
              </div>
            </button>
            <button>
              <div>
                <GoogleLogo size={25} color="#ec0909" weight="fill" />
                <p className="logo-text">Google</p>
              </div>
            </button>
            <button>
              <div>
                <AppleLogo size={25} color="#3f2727" weight="fill" />
                <p className="logo-text">Apple</p>
              </div>
            </button>
            <p>Or</p>
          </div>
          <button onClick={onSignIn} className="nxt">
            Sign in With Password
          </button>
          <div className="no-acc">
            <p>
              don't have an account ? <span onClick={onSignUp}>Sign Up</span>
            </p>
          </div>
        </div>
      }
    </div>
  );
}

export default Welcome;
