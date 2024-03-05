import React from "react-dom";
export default function Contact() {
  return (
    <div className="contact-area">
      <div className="contact-first">
        <div className="contact-1">
          <h3 className="my-header">Contact us</h3>
          <p className="my-paragraph">
            Have questions, suggestions, or want to collaborate? Feel free to
            reach out to us! Your feedback is valuable, and we're here to assist
            you. Use the form below or contact us directly, and let's work
            together to make a positive impact. Thank you for your interest and
            support.
          </p>
          <div className="contact-way">
            <div className="contact--1">
              <div className="ccc">
                <img src="/images/cellphone-fill.png" />
              </div>
              <h3>+40392883902</h3>
            </div>

            <div className="contact--1">
              <div className="ccc">
                <img src="/images/Vector (19).png" />
              </div>
              <h3>mail@organiza.com</h3>
            </div>
          </div>
        </div>
        <div className="contact-2">
          <div>
            <h3>Name</h3>
            <input
              type="text"
              placeholder=""
              className="form--input"
              name="topText"
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="text"
              placeholder=""
              className="form--input"
              name="topText"
            />
          </div>

          <div>
            <h3>Message</h3>
            <label className="form-input">
              <textarea name="message" rows="7"></textarea>
            </label>
          </div>
          <div className="bbb">
            <button>send</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
