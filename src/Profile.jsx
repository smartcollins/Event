import React, { useState } from "react";
import Interest from "./Interest";
import Account from "./Account";
import {
  ArrowLeft,
  User,
  Envelope,
  MapPin,
  Phone,
  CaretDown,
  PencilSimple,
} from "phosphor-react";

function Profile() {
  const [edit, setEdit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [back, setBack] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
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

  function onEdit() {
    setEdit((oldEdit) => !edit);
  }

  function onVerify() {
    setVerify(true);
  }

  function onBack() {
    setBack(true);
  }

  return (
    <div>
      {back ? (
        <Account />
      ) : verify ? (
        <Interest />
      ) : (
        <div className="profile">
          <div className="back">
            <ArrowLeft
              size={30}
              color="#2fe22c"
              weight="duotone"
              onClick={onBack}
            />
            <h1>Fill Your Profile</h1>
          </div>
          <div>
            {edit ? (
              <div className="dp">
                <User
                  style={{ visibility: "hidden" }}
                  className="user-icon"
                  size={30}
                  color="#858C94"
                  weight="duotone"
                />
              </div>
            ) : (
              <div className="user">
                <User
                  className="user-icon"
                  size={30}
                  color="#DADADD"
                  weight="duotone"
                />
              </div>
            )}
            <div className="user-pen" onClick={onEdit}>
              <PencilSimple size={16} color="#ffffff" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <p>
              Full Name <span>*</span>
            </p>
            <div className="user-input">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Full name"
              />
            </div>
            <p>
              Email <span>*</span>
            </p>
            <div className="user-input">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handle}
                placeholder="Email"
              />
              <Envelope size={20} color="#858C94" weight="fill" />
            </div>
            <p>
              Phone <span>*</span>
            </p>
            <div className="user-input">
              <input
                type="tel"
                name="number"
                value={form.number}
                onChange={handle}
                placeholder="Phone Number"
              />
              <Phone size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              Gender <span>*</span>
            </p>
            <div className="user-input">
              <input placeholder="Gender" />
              <CaretDown size={20} color="#858C94" weight="duotone" />
            </div>
            <p>
              City <span>*</span>
            </p>
            <div className="user-input">
              <input placeholder="City" />
              <MapPin size={20} color="#858C94" />
            </div>
          </form>
          <button onClick={onVerify} className="nxt">
            Verify
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
