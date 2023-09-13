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
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="/" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="why-us section-bg">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content">
                  <h3>
                    Do More with One Solution{" "}
                    <strong>
                      Preparing you for the future, focusing on evangelizing and
                      growing your Diocese
                    </strong>
                  </h3>
                  <p>
                    The scope of the application is to maintain the Families,
                    Members, Sacraments, BCC, Commission, Association, Prayer
                    Request, Donation and Subscription details of the Diocese.
                  </p>
                </div>
                <div className="accordion-list">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        href="/"
                        className="collapse"
                        data-bs-target="#accordion-list-1">
                        <span>01</span> Community - Where you belong and thrive
                        <i className="bx bx-chevron-down icon-show" />
                        <i className="bx bx-chevron-up icon-close" />
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list">
                        <p>
                          Store all the community members records and Renew all
                          the documents.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        href="/"
                        data-bs-target="#accordion-list-2"
                        className="collapsed">
                        <span>02</span> Members - Quickly Look Up People{" "}
                        <i className="bx bx-chevron-down icon-show" />
                        <i className="bx bx-chevron-up icon-close" />
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list">
                        <p>
                          Store and manage comprehensive member profiles,
                          including details education, sacraments.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        href="/"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed">
                        <span>03</span> Contacts - Keep your contacts up to date
                        <i className="bx bx-chevron-down icon-show" />
                        <i className="bx bx-chevron-up icon-close" />
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list">
                        <p>
                          Store and manage contacts. Such as Name, Mobile, Email
                          of the Members information
                        </p>
                      </div>
                    </li>
                    <li className="learnmore">
                      <a
                        data-bs-toggle="collapse"
                        href="/"
                        className="collapsed text-center learncontent">
                        Learn More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                style={{ backgroundImage: 'url("assets/img/why-us.png")' }}
                data-aos="zoom-in"
                data-aos-delay={150}>
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={100}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble" />
                  </div>
                  <h4>
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay={200}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file" />
                  </div>
                  <h4>
                    <a href="/">Sed ut perspici</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={300}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer" />
                  </div>
                  <h4>
                    <a href="/">Magni Dolores</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={400}>
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-layer" />
                  </div>
                  <h4>
                    <a href="/">Nemo Enim</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
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
