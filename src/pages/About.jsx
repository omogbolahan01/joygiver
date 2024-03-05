import React from "react-dom";
export default function About() {
  return (
    <div className="about-all">
      <div className="about-first">
        <div className="first-d">
          <h3>We are here to make a transformative impact on the world.</h3>
        </div>
        <div className="second-d"></div>
        <div className="absolue3">
          <img src="/images/Group 11 (1).png" alt="" />
        </div>
      </div>
      <div className="about--second">
        <div className="second-1">
          <h3>Our Vision</h3>
          <p>
            At Joygiver charity, we envision a world where compassion knows no
            bounds and every individual has the opportunity to thrive. Our
            vision is rooted in the belief that collective efforts can create
            lasting, positive change. We aspire to build a society where
            kindness, equality, and opportunity are accessible to all. Join us
            on this transformative journey as we work towards a future where
            every act of generosity contributes to a brighter and more
            compassionate world."
          </p>
        </div>
        <div className="second-2">
          <h3>Our Mission </h3>
          <p>
            Our mission at Joygiver Charity is to ignite positive change by
            spreading joy and making a meaningful difference in the lives of
            those in need. Committed to fostering compassion and creating a
            ripple effect of kindness, we aim to empower individuals and
            communities through impactful initiatives. Through collaborative
            efforts and unwavering dedication, we strive to address pressing
            challenges, promote equality, and provide opportunities for a
            brighter future. Join us in our mission to inspire joy, uplift
            spirits, and contribute to a world filled with compassion and hope."
          </p>
        </div>
      </div>
      <div className="count-one1">
        <h2>Our Impact </h2>
        <div className="count-area">
          <div className="area-1">
            <div>
              {/* <img src="/images/image 15.png" alt="" /> */}
              <h3 className="my-header">$450k</h3>
            </div>

            <p className="my-paragraph">Amount Raised for support</p>
          </div>
          <div className="area-2">
            <div>
              {/* <img src="/images/image 15 (1).png" alt="" /> */}
              <h3 className="my-header">600</h3>
            </div>

            <p className="my-paragraph">campaigns around the world</p>
          </div>
          <div className="area-3">
            <div>
              {/* <img src="/images/image 15 (2).png" alt="" /> */}
              <h3 className="my-header">312</h3>
            </div>
            <p className="my-paragraph">Volunteers workers and team</p>
          </div>
          <div className="area-4">
            <div>
              {/* <img src="/images/image 15 (3).png" alt="" /> */}
              <h3 className="my-header">12k</h3>
              <p className="my-paragraph">Children helped in poverty</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-des">
        <div className="des-all">
          <div className="des-1">
            <img src="/images/Rectangle 2.png" alt="" />
          </div>
          <div className="des-2">
            <div className="des-2-1">
              <img src="/images/Rectangle 3.png" alt="" />
            </div>
            <div className="des-2-2">
              <img src="/images/Rectangle 4.png" alt="" />
            </div>
          </div>
        </div>
        <div className="des-text">
          <h2>Our goal is to revolutionize and uplift lives.</h2>
          <p>
            At Joygiver Charity, we are driven by a profound commitment to
            embark on a journey of transformation—a journey that goes beyond
            traditional philanthropy. Our overarching goal is to revolutionize
            and uplift lives, leaving an indelible mark on individuals and
            communities alike.
          </p>
          <p>
            Our mission is rooted in the belief that everyone deserves the
            opportunity to experience positive change. We understand that true
            transformation involves more than just providing aid; it's about
            instigating a ripple effect of positive impact that reverberates
            through every aspect of life.
          </p>
          <button className="second-button">Donate now</button>
        </div>
      </div>
      <div className="team-area">
        <h2 className="my-header">Our Volunteer </h2>
        <p className="my-paragraph">
          Meet the Heart and Soul Behind Joygiver Charity
        </p>
        <div className="team-1">
          <div className="tteem">
            <img src="/images/Rectangle 9 (6).png" alt="" />
            <div className="tteem-center">
              <h3>Anthony Malone</h3>
              <p>Lead Volunteer</p>
            </div>
          </div>
          <div className="tteem">
            <img src="/images/Rectangle 9 (7).png" alt="" />
            <div className="tteem-center">
              <h3>Anthony Malone</h3>
              <p>Lead Volunteer</p>
            </div>
          </div>
          <div className="tteem">
            <img src="/images/Rectangle 9 (10).png" alt="" />
            <div className="tteem-center">
              <h3>Anthony Malone</h3>
              <p>Lead Volunteer</p>
            </div>
          </div>
          <div className="tteem">
            <img src="/images/Rectangle 9 (9).png" alt="" />
            <div className="tteem-center">
              <h3>Anthony Malone</h3>
              <p>Lead Volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
