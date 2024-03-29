import React, { useState } from "react";
import SignUp from "./SignUp";
import Forgot from "./Forgot";
import Account from "./Account";
import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";

function Welcome() {
  const [sign, setSign] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  function onSignUp() {
    setSignUp(true);
    setSignIn(false);
  }

  function onSignIn() {
    setSignIn(true);
    setSignUp(false);
  }

  function onSign() {
    setSign(true);
  }

  function onForgot() {
    setForgotPass(true);
  }

  const signAry = [

    {
      txt: "Sign up for free",
      txt2: "Sign Up",
      txt3: "Already have an account",
      txt4: "Sign In",
      onSign: onSign,
      onSwitch: onSignIn,
    },
    {
      txt: "Sign in to your account",
      txt2: "Sign In",
      txt3: "Don't have an Account",
      txt4: "Sign Up",
      forgot: "Forgot the Password?",
      onSign: onSign,
      onForgot: onForgot,
      onSwitch: onSignUp
    },

  ]

  const sign1 = signAry.slice(0, 1).map((item, idx) => <SignUp key={idx} {...item} />)
  const sign2 = signAry.slice(1, 2).map((item, idx) => <SignUp key={idx} {...item} />)

  return (
    <div>
      {sign ? (
        <Account />
      ) : forgotPass ? (
        <Forgot />
      ) : signUp ? (
        // <SignUp
        //   txt="Sign up for free"
        //   txt2="Sign Up"
        //   txt3="Already have an account"
        //   onSign={onSign}
        //   txt4="Sign In"
        //   onSwitch={onSignIn}
        // />
        sign1
      ) : signIn ? (
        // <SignUp
        //   txt="Sign in to your account"
        //   txt2="Sign In"
        //   txt3="Don't have an Account"
        //   txt4="Sign Up"
        //   forgot="Forgot the Password?"
        //   onSign={onSign}
        //   onForgot={onForgot}
        //   onSwitch={onSignUp}
        // />
        sign2
      ) : (
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
      )}
    </div>
  );
}

export default Welcome;
