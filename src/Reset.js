import { useState } from "react";
import { ArrowLeft } from "phosphor-react";
import Ready from "./Ready";
import Forgot from "./Forgot";

function Reset() {
  const [save, setSave] = useState(false);
  const [back, setBack] = useState(false);

  function onSave() {
    setSave(true);
  }

  function onBack() {
    setBack(true);
  }

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
  // console.log(form)
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      {back ? (
        <Forgot />
      ) : save ? (
        <Ready />
      ) : (
        <div>
          <div className="back">
            <ArrowLeft
              size={30}
              color="#2fe22c"
              weight="duotone"
              onClick={onBack}
            />
            <h1>Reset password</h1>
          </div>
          <div className="intro-main">
            <div className="reset-img"></div>
          </div>
          <div className="form-container">
            <h2>Create a new password</h2>
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
                Confirm Password <span>*</span>
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
              <button onClick={onSave} className="form--submit nxt">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reset;
