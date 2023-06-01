import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)

  console.log(done);
  
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs
      .sendForm(
        "service_qy41a3f",
        "template_ifri0ro",
        form.current,
        "AiLE9DkKIwjtceXxh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: 'white'}}>Get in Touch</span>
          <h5>Share Data on Email:</h5>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="user"  placeholder="Name"/>
          <input type="email" name="from_email" className="user" placeholder="Email"/>
          <input name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
