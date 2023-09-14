import React from "react";
import Header from "./header";
import Footer from "./footer";
const Users = ({ users }) => {
  const customStyle = {
    marginTop: "142px",
  };
  return (
    <>
      <Header />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}>
              <h1>Diocese Management Software</h1>
              <h2>A powerful tool for pastoral planning and administration.</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="/" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox btn-watch-video">
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={200}>
              <img
                src="/assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Benefits For The User</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Your prosperity is at the core of our passion, and we are here
                  to help you discover a world of personalized advantages that
                  cater to your unique needs and aspirations. Join us in this
                  exciting journey of growth and fulfillment, where your success
                  is our ultimate goal
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Single source for all
                    member, institution details and communication
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    Create & Maintain Member Profile (Education, Sacraments,
                    Profession, Formation, Holy Order etc…)
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    Member profile with more than 170 data points that can be
                    viewed online or downloaded in PDF/Excel
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <ul>
                  <li>
                    <i className="ri-check-double-line" />
                    Communicate thru email, SMS to the Members, Communities and
                    Intuitions and maintain records
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    Send Greetings on Birthdays & on all special Anniversaries
                    days such as Ordination, feast days
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    Create & Maintain Calendar events
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    View Personal and Public Calendar events
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    Add Photos and Attachments
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    Send Circular to all members
                  </li>
                </ul>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Features</h2>
              <p>
                "Do More with One Solution: Our application modules are designed
                to streamline your workflow, simplify tasks, and enhance
                productivity. With our comprehensive suite, you can effortlessly
                manage all your needs in a single, user-friendly platform.
                Experience the power of efficiency, convenience, and innovation
                as you unlock the full potential of our modules. Embrace a
                seamless experience tailored to your success."
              </p>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-group" />
                  </div>
                  <h4>
                    <a href>Community</a>
                  </h4>
                  <p>
                    Store all the community members records and Renew all the
                    documents.
                  </p>
                  <a href="/">Learn more</a>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-user" />
                  </div>
                  <h4>
                    <a href="/">Member Profile</a>
                  </h4>
                  <p>
                    Store and manage comprehensive member profiles, including
                    details education, sacraments.
                  </p>
                  <a href="/">Learn more</a>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxs-contact" />
                  </div>
                  <h4>
                    <a href="/">Contacts</a>
                  </h4>
                  <p>
                    Store and manage contacts. Such as Name, Mobile, Email of
                    the Members information
                  </p>
                  <a href="">Learn more</a>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={400}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-calendar-event" />
                  </div>
                  <h4>
                    <a href="/">Calendar</a>
                  </h4>
                  <p>
                    Store & Maintain Calendar events, Can set Reminders via
                    Emails and Application.
                  </p>
                  <a href="/">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Call To Action</h3>
                <p>
                  {" "}
                  Want to try it out first? Start a guided tour to instantly see
                  Cathedra in action. We'll load it up with demo data so you can
                  try it out before you sign up.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="/demo">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Why Cathedra ?</h2>
            </div>
            <div className="row content">
              <p style={{ margin: "20px" }}>
                This is a user-friendly software tool for the diocese,
                institute, heads and for all diocese members - to manage all
                communications (circular, email, meetings), create records
                (chronicles, concerns), maintain member critical and personal
                information, assignments, history, institution/community
                information, planning, reporting, and archiving. CristO
                addresses five segments of major users: Bishop, Bishop
                Secretary, Chancellor, Vicar General
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="skills">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay={100}>
                <img src="assets/img/data.svg" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content "
                data-aos="fade-left"
                data-aos-delay={100}>
                <h3 className="mt-10" style={customStyle}>
                  We’ll transfer your data for free.
                </h3>
                <p className="fst-italic">
                  If you subscribe to any paid plan, we’ll import your data for
                  free into Cathedra, no matter where you have it now. If you
                  want to do it yourself, we have the tools to help you set your
                  account up quickly and easily.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Users;
