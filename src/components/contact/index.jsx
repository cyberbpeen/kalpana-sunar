import React from "react";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact__section section">
      <div className="section__header container">
        <h3>Have any Question ?</h3>
        <h2>Let&apos;s Get In Touch</h2>
      </div>

      <div className="contact__container container grid">
        <div className="contact__content flex"></div>
        <form className="contact__form">
          <div className="input__group">
            <label className="input__tag">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input__control"
            />
          </div>
          <div className="input__group">
            <label className="input__tag">Mail</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input__control"
            />
          </div>
          <div className="input__group input__group-area">
            <label className="input__tag">Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              cols="30"
              rows="10"
              className="input__control"
            ></textarea>
          </div>
          <button className="send__btn btn btn-primary">
            Send Message
            <RiSendPlaneLine />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
