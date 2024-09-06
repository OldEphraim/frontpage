import React from 'react';
import './ContactForm.scss';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/78131d30-d937-11ec-af04-d73722aa9797";

const ContactForm = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      document.getElementById("InputButton").style.display = "none";
      document.getElementById("BelowInputArea").innerHTML = "<p>Thank you for your message! I'll get back to you soon.</p>"
      document.getElementById("ContactForm").style.padding = "25px 0px 25px 0px";
    }, 100);
  };

  return (
    <>
    <div className="ContactForm" id="ContactForm">
    <h1 className="ContactFormHeader">Send me a message!</h1>
    <p className="ContactFormSubheader">It'll go straight to my email, and I'll get back to you within the day.</p>
    <form
    action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST"
    target="_blank"
    >
    <div className="InputArea">
      <input
      type="text"
      placeholder="Your name"
      name="name"
      className="InputField"
      required
      />
    </div>
    <div className="InputArea">
      <input
      type="email"
      placeholder="Email"
      name="email"
      className="InputField"
      required
      />
    </div>
    <div className="InputArea">
      <textarea
      placeholder="Your message"
      name="message"
      className="InputField"
      required
      />
    </div>
    <div className="InputArea" id="InputButtonArea">
      <button
      className="Button"
      type="submit"
      id="InputButton"
      >
      Send me a message!
      </button>
      <div className="BelowInputArea" id="BelowInputArea"></div>
    </div>
    </form>
    </div>
    </>
  )
}

export default ContactForm;
