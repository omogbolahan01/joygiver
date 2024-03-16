import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    B;
    e.preventDefault();
    window.location.href = `mailto:iloriojomodel@gmail.com?subject=Newsletter Subscription&body=Email: ${email}`;
  };
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    // color: "#161616",
  };
  return (
    <footer>
      <div className="partnerss">
        <h3>Our partner</h3>
        <div className="partner-image">
          <div className="iggg">
            <img src="/images/Frame (1).png" alt="" />
          </div>
          <div className="iggg">
            <img src="/images/Frame 70.png" alt="" />
          </div>
          <div className="iggg">
            <img src="/images/logo-50.png" alt="" />
          </div>
          <div className="iggg">
            <img src="/images/logo-55.png" alt="" />
          </div>
          <div className="iggg">
            <img src="/images/logo-75.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="partner-two">
          <h2>Stay informed by subscribing to our newsletter.</h2>
          <p>
            Stay connected with the latest updates, insightful content, and
            exclusive news by subscribing to our newsletter. Join our community
            to receive a wealth of information, stories, and highlights about
            our mission and impact.
          </p>
          <div className="formss">
            <form className="form-sub" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                className="form-subs"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="form-btn"
                // style={{
                //   position: "absolute",
                //   right: "27.5rem",

                //   bottom: "-28rem",
                // }}
              >
                Subcribe now
              </button>
            </form>
          </div>
        </div>
        <div className="foot-layer">
          <div className="nav2">
            <div className="site-logo2">
              <img src="/images/Framep7.png" alt="Site Logo" />
            </div>
            <div className="nav-itemss">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Blog
              </NavLink>
              <NavLink
                to="our"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Our Causes
              </NavLink>
              <NavLink
                to="team"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Teams
              </NavLink>
              <NavLink
                to="about"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                About
              </NavLink>

              <NavLink
                to="contact"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="footer-logo">
            <div></div>
            <div className="logo-2">
              <div className="lll">
                <img src="/images/linkedin- (3).png" alt="" />
              </div>
              <div className="lll">
                <img src="/images/linkedin- (2).png" alt="" />
              </div>
              <div className="lll">
                <img src="/images/linkedin- (1).png" alt="" />
              </div>
            </div>
          </div>
          <div className="empty"></div>
          <div className="kkk">
            <p>(c) Joygiver charity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
