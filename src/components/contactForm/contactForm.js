/* eslint-disable */
import React, { useState } from "react";
import "./css/contactForm.css";
import $ from "jquery";

const ContactForm = ({ ContactMessage }) => {
  const url =
    "https://script.google.com/macros/s/AKfycbyXF9abdnAwyNmA38tDsHD-sGSZDXpRkNl7hfQrgcicfEtR1tR_/exec";

  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $("form").serialize(),
    })
      .then(() => {
        ContactMessage("Message Sent successfully");
      })
      .catch((err) => {
        ContactMessage("Your message could'nt be sent");
      });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateObj = new Date();
  let month = monthNames[dateObj.getMonth()];
  let day = String(dateObj.getDate()).padStart(2, "0");
  let year = dateObj.getFullYear();
  let output = day + " " + month + "," + year;
  console.log(output);

  return (
    <div className="form animation-element">
      <form onSubmit={handleSubmit} className="message-form">
        <div className="form-item-container">
          <input
            placeholder="Name"
            className="message-input"
            type="text"
            name="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={Name}
            required
          />
        </div>
        <div className="form-item-container">
          <input
            value={Email}
            placeholder="Enter email"
            className="message-input"
            type="email"
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-item-container">
          <textarea
            value={Message}
            className="message-input"
            placeholder="Your Message"
            type="text"
            name="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </div>

        <div style={{ display: "none" }} className="hidden-fields">
          <label>Issue Date</label>
          <input defaultValue={output} type="text" name="Date" />
        </div>
        <div className="text-center">
          <input
            className="submit-button"
            type="submit"
            id="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
