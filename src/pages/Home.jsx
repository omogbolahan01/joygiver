import React from "react-dom";
import Slider from "../../slider1";
import Slider2 from "../../slider2";
export default function Home() {
  return (
    <div>
      <div className="home-first">
        <div className="first-text">
          <h2 className="my-header">Elevating Lives, Building Hope</h2>
          <p className="my-paragraph">
            We invite you to join us on this meaningful odyssey, a collective
            endeavour dedicated to instigating positive change. We strive to
            create a world where compassion ia a force driving impactful action.
          </p>
          <button className="first-button">Donate now</button>
        </div>
        <div className="home-image">
          <img src="/images/Group 14.png" alt="" />
        </div>
      </div>
      <div className="home-second">
        <div className="health-1">
          <div className="llu">
            {" "}
            <img src="/images/Vector (16).png" alt="" />
          </div>

          <h2>Healthy Food</h2>
          <p>
            We believe in the transformative power of healthy food, nurturing
            not just bodies but also the potential for brighter, healthier
            futures.
          </p>
        </div>
        <div className="health-2">
          <div className="llu">
            <img src="/images/home-heart-fill.png" alt="" />
          </div>
          <h2>Shelter</h2>
          <p>
            we believe in offering a foundation for stability, safety, and a
            brighter tomorrow. Join us in building homes .
          </p>
        </div>
        <div className="health-3">
          <div className="llu">
            <img src="/images/Vector (17).png" alt="" />
          </div>
          <h2>Training</h2>
          <p>
            we believe in the power of education and training to open doors to
            new opportunities, fostering a community of lifelong
          </p>
        </div>
        <div className="health-4">
          <div className="llu">
            <img src="/images/mental-health-fill.png" alt="" />
          </div>
          <h2>Wellness</h2>
          <p>
            Our wellness initiatives encompass physical, mental, and emotional
            health, promoting a balanced and fulfilling life. J
          </p>
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
      <div className="count-one">
        <h2>Our Impact </h2>
        <div className="count-area">
          <div className="area-1">
            <h3 className="my-header">$450k</h3>
            <p className="my-paragraph">Amount Raised for support</p>
          </div>
          <div className="area-2">
            <h3 className="my-header">600</h3>
            <p className="my-paragraph">campaigns around the world</p>
          </div>
          <div className="area-3">
            <h3 className="my-header">312</h3>
            <p className="my-paragraph">Volunteers workers and team</p>
          </div>
          <div className="area-4">
            <h3 className="my-header">12k</h3>
            <p className="my-paragraph">Children helped in poverty</p>
          </div>
        </div>
      </div>
      <div className="donate-area">
        <div className="donate-all">
          <div className="donate-1">
            <h3>
              Contribute to Our Cause Through a Donation. Your Support Makes a
              Difference.
            </h3>
          </div>
          <div className="donate-2">
            <p className="side-one">
              At Joygiver Charity, we believe in the extraordinary power of
              collective generosity to make a positive impact. Your willingness
              to contribute to our cause through a donation is a vital step
              towards fostering positive change and transforming lives.{" "}
            </p>
            <p className="side-two">
              Your support allows us to continue our mission of providing
              essential resources, empowering communities, and creating
              opportunities for those in need.
            </p>
            <div className="donate-top">
              <button className="dbutton">Donate now</button>
              <button className="ddbutton">Become a volunteer </button>
            </div>
          </div>
        </div>
        <div className="count-flex">
          <div className="count-f1">
            <div>
              <img src="/images/Rectangle 9.png" alt="" />
            </div>

            <h3 className="ddd">Education</h3>
            <div className="f1-1">
              <h3>Exam Fees</h3>
              <div className="f1-2">
                <p>20% complete</p>
              </div>
            </div>
            <div className="raise">
              <h3>Raised</h3>
              <p>$112,800</p>
            </div>
            <div className="target">
              <h3>Target</h3>
              <p>$112,800</p>
            </div>
            <button>Donate</button>
          </div>
          <div className="count-f2">
            <div>
              <img src="/images/Rectangle 9 (1).png" alt="" />
            </div>
            <h3 className="ddd">Health</h3>
            <div className="f1-1 my-header">
              <h3>Wellness</h3>
              <div className="f1-2">
                <p>20% complete</p>
              </div>
            </div>
            <div className="raise my-header">
              <h3>Raised</h3>
              <p>$112,800</p>
            </div>
            <div className="target my-paragraph">
              <h3>Target</h3>
              <p>$112,800</p>
            </div>
            <button>Donate</button>
          </div>
          <div className="count-f3">
            <div>
              <img src="/images/Rectangle 9 (2).png" alt="" />
            </div>
            <h3 className="ddd">Housing</h3>
            <div className="f1-1">
              <h3>Shelter</h3>
              <div className="f1-2">
                <p>20% complete</p>
              </div>
            </div>
            <div className="raise">
              <h3>Raised</h3>
              <p>$112,800</p>
            </div>
            <div className="target">
              <h3>Target</h3>
              <p>$112,800</p>
            </div>
            <button>Donate</button>
          </div>
        </div>
      </div>
      <div className="unveil">
        <div className="unveil-side">
          <div className="unveil-one">
            <h3>Unveiling Our Approach to Creating Life-Changing Impact</h3>
          </div>
          <div className="unveil-two">
            <p>
              Our commitment to making a meaningful difference extends far
              beyond words. We believe in action, in the tangible impact that
              reverberates through the lives of those we touch. In this blog
              post, we invite you to explore the intricacies of how we craft
              life-changing support, creating a ripple effect that reaches the
              very core of our mission.
            </p>
          </div>
        </div>
        <div className="unveil-images">
          <div className="u-one">
            <img src="/images/Rectangle 7 (4).png" alt="" />
            <h3>Health</h3>
            <p>we prioritize health as a fundamental aspect of well-being. </p>
          </div>
          <div className="u-one">
            <img src="/images/Rectangle 7 (5).png" alt="" />
            <h3>Education</h3>
            <p>
              Education is a powerful catalyst for change, and at Joygiver
              Charity
            </p>
          </div>
          <div className="u-one">
            <img src="/images/Rectangle 7 (6).png" alt="" />
            <h3>Job training</h3>
            <p>
              We understand the transformative power of employment
              opportunities.
            </p>
          </div>
          <div className="u-one">
            <img src="/images/Rectangle 7 (7).png" alt="" />
            <h3>Sport</h3>
            <p>
              we harness the transformative power of sports to inspire, and
              empower.
            </p>
          </div>
        </div>
      </div>
      <div className="my-header">
        <Slider />
      </div>
      <div className="my-paragraph">
        <Slider2 />
      </div>
      <div className="create-area">
        <div className="create-1">
          <img src="/images/Rectangle 18.png" alt="" />
        </div>
        <div className="create-2">
          <p className="p-first">How can you help?</p>
          <h3>Creating Transformative Support for Life Impact</h3>
          <p className="p-two">
            In the heart of our mission at Joygiver Charity lies a commitment to
            creating transformative support that leaves a lasting impact on the
            lives we touch. We believe in the power of meaningful assistance to
            bring about positive change, and our approach is rooted in
            compassion, innovation, and a dedication to fostering long-term
            well-being.{" "}
          </p>
          <p className="p-three">
            Life impact begins with understanding individual needs. At Joygiver
            Charity, we take a personalized approach to support, recognizing
            that each person's journey is unique. By crafting tailored
            solutions, we address specific challenges and provide assistance
            that resonates with the nuances of each situation.
          </p>
          <div className="donate-top">
            <button className="dbutton">Donate now</button>
            <button className="ddbutton">Become a volunteer </button>
          </div>
        </div>
      </div>
      <div className="bloog">
        <div className="blog-1">
          <p>Blog</p>
        </div>
        <div className="blogg">
          <h2 className="my-header">
            Stories, Insights, And Updates About Our Mission
          </h2>
          <div className="blog-ff">
            <div className="bf1">
              <p className="my-paragraph">
                Narratives Unfolded: Discovering Stories, Gaining Insights, and
                Staying Updated on Our Ever-Evolving Mission
              </p>
            </div>
            <div className="bf2">
              <p>VIew all blog</p>
            </div>
          </div>
        </div>
        <div className="bloggg">
          <div className="blog-detail">
            <img src="/images/Rectangle 7 (12).png" alt="" />
            <div className="details-b  my-header ">
              <h3>24th Oct 2024</h3>
              <p>By: Grace Collins</p>
            </div>
            <p className="my-paragraph">
              The Ripple Effect: How Fundraising Transforms Futures
            </p>
          </div>
          <div className="blog-detail">
            <img src="/images/Rectangle 7 (9).png" alt="" />
            <div className="details-b my-header ">
              <h3>24th Oct 2024</h3>
              <p>By: Grace Collins</p>
            </div>
            <p className="my-paragraph">
              The Ripple Effect: How Fundraising Transforms Futures
            </p>
          </div>
          <div className="blog-detail">
            <img src="/images/Rectangle 7 (10).png" alt="" />
            <div className="details-b my-header ">
              <h3>24th Oct 2024</h3>
              <p>By: Grace Collins</p>
            </div>
            <p className="my-paragraph">
              The Ripple Effect: How Fundraising Transforms Futures
            </p>
          </div>
          <div className="blog-detail">
            <img src="/images/Rectangle 7 (11).png" alt="" />
            <div className="details-b my-header ">
              <h3>24th Oct 2024</h3>
              <p>By: Grace Collins</p>
            </div>
            <p className="my-paragraph">
              The Ripple Effect: How Fundraising Transforms Futures
            </p>
          </div>
        </div>
      </div>
      <div className="eembark">
        <div className="embark-part">
          <div className="eemmbark">
            <div className="embark-1">
              <h3>Embark on this Life-Changing Journey with Us</h3>
              <p>
                Embark on a transformative voyage with us, where every step
                holds the promise of positive change. Join hands as we navigate
                this life-changing journey together, creating meaningful impact
                and embracing the collective spirit of progress. Your presence
                is not just welcomed.
              </p>
              <div className="donate-embark">
                <button className="eeee">Donate now</button>
                <button className="eeeee">Become a volunteer </button>
              </div>
            </div>

            <div className="embark-2">
              <img src=" /images/Rectangle 8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
