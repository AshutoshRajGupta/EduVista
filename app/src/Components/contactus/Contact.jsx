import React, { useState } from "react";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './Contact.css';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
library.add(fas, faInstagram, faFacebook, faTwitter, faLinkedin);

export default function Contact() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    issueMsg: "",
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { fname, lname, email, phone, issueMsg } = user;

      const targetURL = "https://formspree.io/f/myyrzkzp"; // Replace with your Formspree endpoint

      if (!validator.isEmail(email)) {
        setFormStatus({ success: false, error: true });
        return;
      }

      const res = await fetch(targetURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          phone,
          issueMsg,
        }),
      });

      if (res.ok) {
        setFormStatus({ success: true, error: false });

        // Reset the input fields after successful submission
        setUser({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          issueMsg: "",
        });
      } else {
        setFormStatus({ success: false, error: true });
      }
    } catch (error) {
      console.log(error);
      setFormStatus({ success: false, error: true });
    }
  };

  return (
    <div>
      <div className="contact-main-cont">
        <div className="contact-text-cont">
          <div className="contact-head-cont">
            <h3 className="contact-head">GET IN TOUCH</h3>
            <p className="contact-text">Feel free to contact us</p>
          </div>
          <div className="row">
            <div className="contact-input-cont">
              <input
                style={{ width: "100%" }}
                type="text"
                className="contact-input"
                onChange={handleInputs}
                value={user.fname}
                name="fname"
                placeholder="First Name"
                required={true}
              />
            </div>
            <div className="contact-input-cont">
              <input
                style={{ width: "100%" }}
                type="text"
                className="contact-input"
                onChange={handleInputs}
                value={user.lname}
                name="lname"
                placeholder="Last Name"
                required={true}
              />
            </div>
            <div className="contact-input-cont">
              <input
                style={{ width: "100%" }}
                type="email"
                className="contact-input"
                onChange={handleInputs}
                value={user.email}
                name="email"
                placeholder="Email"
                required={true}
              />
            </div>
            <div className="contact-input-cont">
              <input
                style={{ width: "100%" }}
                type="phone"
                className="contact-input"
                onChange={handleInputs}
                value={user.phone}
                name="phone"
                placeholder="Phone"
                required={true}
              />
            </div>
            <div className="contact-input-cont">
              <textarea
                style={{ width: "100%" }}
                rows="4"
                cols="50"
                className="contact-input"
                onChange={handleInputs}
                value={user.issueMsg}
                name="issueMsg"
                placeholder="Describe your Issue"
              />
            </div>
          </div>
          <div className="contact-btn-cont">
            <button
              type="submit"
              onClick={handleSubmit}
              className="contact-btn"
            >
              SEND
            </button>
          </div>
          {formStatus.success && (
            <p className="success-message">Form Submitted successfully!</p>
          )}
          {formStatus.error && (
            <p className="error-message">
              Error submitting the form. Please try again.
            </p>
          )}
        </div>
      </div>
      
    </div>
  );
}
