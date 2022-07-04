import { useState } from "react";
import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
// import SignIn from "./SignIn";
// import HomePage from "./HomePage"

function SignUp() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    join: true,
  });

  function handle(e) {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(form);
  function handleSubmit(event) {
    event.preventDefault();
  }

  function onSignIn() {
    setSignIn(true);
  }

  function onSignUp() {
    setSignUp(true);
  }

  return (
    <div>
      {
        // signIn ?
        // 	<SignIn/> :
        // signUp ?
        // 	<HomePage/> :
        <div className="signup">
          <div className="intro-main">
            <div className="signup-img"></div>
          </div>
          <h1>We care</h1>
          <div className="form-container">
            <h2>Sign up for free</h2>
            <form className="form" onSubmit={handleSubmit}>
              <p>
                Email <span>*</span>
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="form--input"
                name="email"
                value={form.email}
                onChange={handle}
              />
              <p>
                Password <span>*</span>
              </p>
              <input
                type="password"
                placeholder="Password"
                className="form--input"
                name="password"
                value={form.password}
                onChange={handle}
              />
              <p>
                Confirm <span>*</span>
              </p>
              <input
                type="password"
                placeholder="Confirm password"
                className="form--input"
                name="password2"
                value={form.password2}
                onChange={handle}
              />

              <div className="form--marketing">
                <input
                  id="okayToEmail"
                  type="checkbox"
                  name="join"
                  checked={form.join}
                  onChange={handle}
                />
                <label htmlFor="okayToEmail">Keep me always logged in</label>
              </div>
              <button onClick={onSignUp} className="nxt">
                Sign up
              </button>
            </form>
            <p>Or continue with</p>
            <div className="icons">
              <button>
                <FacebookLogo size={32} color="#0d1be3" weight="fill" />
              </button>
              <button>
                <GoogleLogo size={32} color="#ec0909" weight="fill" />
              </button>
              <button>
                <AppleLogo size={32} color="#3f2727" weight="fill" />
              </button>
            </div>
            <div className="no-acc">
              <p>
                Already have an account ?{" "}
                <span onClick={onSignIn}>Sign In</span>
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default SignUp;
