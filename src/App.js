import { Component } from "react";
import Users from "./components/users";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <header className="header">
          <nav
            className="navbar navbar-expand-lg navbar-dark position-absolute w-100"
            id="navbar">
            <div className="container">
              <a className="navbar-brand d-block d-lg-none" href="#!">
                <img src="img/logo-alt.svg" alt="..." width={60} />
              </a>
              <button
                className="navbar-toggler navbar-toggler-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span />
                <span />
                <span />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#hero">
                      Home{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#works">
                      Works
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav d-none d-lg-block px-4">
                  <li className="nav-item m-0">
                    <a className="navbar-brand m-0" href="#!">
                      <img src="img/logo.svg" alt="..." width={80} />
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#sermons">
                      Sermons{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="text.html">
                      Text Page{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Hero Slider */}
        <section className="text-center pt-lg-0 hero-home" id="hero">
          <div className="swiper hero-slider">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide hero-slide bg-cover py-5 with-border-image d-flex align-items-center"
                style={{ background: "url(img/hero-bg-2.jpg)" }}>
                <div className="container text-white py-5 my-5 index-forward">
                  <h1 className="text-uppercase text-xl mt-5">
                    Join the prayer
                  </h1>
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <p className="lead">
                        Visit your local church and become a part of the flock
                        by contributing to the community in any way you possibly
                        can.
                      </p>
                      <a className="btn btn-primary px-4" href="text.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide hero-slide bg-cover py-5 with-border-image d-flex align-items-center"
                style={{ background: "url(img/hero-bg-3.jpg)" }}>
                <div className="container text-white py-5 my-5 index-forward">
                  <h1 className="text-uppercase text-xl mt-5">Way to god</h1>
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <p className="lead">
                        Visit your local church and become a part of the flock
                        by contributing to the community in any way you possibly
                        can.
                      </p>
                      <a className="btn btn-primary px-4" href="text.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide hero-slide bg-cover py-5 with-border-image d-flex align-items-center"
                style={{ background: "url(img/hero-bg-1.jpg)" }}>
                <div className="container text-white py-5 my-5 index-forward">
                  <h1 className="text-uppercase text-xl mt-5">God is love</h1>
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <p className="lead">
                        Visit your local church and become a part of the flock
                        by contributing to the community in any way you possibly
                        can.
                      </p>
                      <a className="btn btn-primary px-4" href="text.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-nav-custom d-none d-lg-block" />
            <div className="swiper-button-prev swiper-nav-custom d-none d-lg-block" />
            <div className="swiper-pagination py-3 d-block d-lg-none" />
          </div>
        </section>
        {/* Features Section*/}
        <section id="features">
          <div className="container-fluid p-0">
            <div className="row p-0 text-center align-items-stretch g-0">
              <div className="col-lg-3 col-md-6">
                <div className="p-5 text-white h-100 bg-primary">
                  <h3 className="h4">Our Community </h3>
                  <p className="mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                    te
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="p-5 text-white h-100 bg-primary-shade">
                  <h3 className="h4">Church Mission </h3>
                  <p className="mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                    te
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 order-lg-3">
                <div className="p-5 text-white h-100 bg-primary">
                  <h3 className="h4">Join a Group </h3>
                  <p className="mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                    te
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 order-lg-4">
                <div className="p-5 text-white h-100 bg-primary-shade">
                  <h3 className="h4">Church Beliefs </h3>
                  <p className="mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                    te
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-5" id="services">
          <div className="container py-5">
            <header className="mb-4 text-center mb-5">
              <p className="text-serif mb-0 text-primary">
                Watch our services online
              </p>
              <h2 className="text-uppercase">Our services </h2>
            </header>
            <div className="row text-center gy-4">
              <div className="col-lg-4">
                <i className="fas text-primary mb-4 fa-3x fa-church" />
                <h3 className="h5">Tour the chapel</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                  tempor incididunt labore.
                </p>
              </div>
              <div className="col-lg-4">
                <i className="fas text-primary mb-4 fa-3x fa-bible" />
                <h3 className="h5">Chapel weddings</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                  tempor incididunt labore.
                </p>
              </div>
              <div className="col-lg-4">
                <i className="fas text-primary mb-4 fa-3x fa-praying-hands" />
                <h3 className="h5">Special events</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                  tempor incididunt labore.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Works Section*/}
        <section id="works">
          <div className="container-fluid px-0">
            <div className="row align-items-stretch">
              <div
                className="col-lg-6 half-page-banner bg-cover"
                style={{ background: "url(img/priest.jpg)" }}
              />
              <div className="col-lg-6 bg-light py-lg-5">
                <div className="h-100 d-flex flex-column p-5 justify-content-center">
                  <p className="text-serif text-primary mb-0">
                    Where to find us
                  </p>
                  <h2 className="text-uppercase">Our work</h2>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                    tempor incididunt labore.
                  </p>
                  <ul className="list-check ps-0">
                    <li>
                      <p className="mb-0 text-muted mb-2">
                        Eu vim atqui ludus petentium, suas idque est id.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="mb-0 text-muted mb-2">
                        Ne veniam oblique propriae vim, dicant.{" "}
                      </p>
                    </li>
                    <li>
                      <p className="mb-0 text-muted mb-2">
                        Sed everti utroque, vis ea oblique pertinax con.{" "}
                      </p>
                    </li>
                  </ul>
                  <img
                    className="mb-3"
                    src="img/signature.png"
                    alt="..."
                    width={90}
                  />
                  <h6 className="text-uppercase mb-0">Richard Wood</h6>
                  <p className="text-serif text-primary text-small mb-0">
                    Lead Pastor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sermons Section */}
        <section className="py-5" id="sermons">
          <div className="container py-5">
            <header className="mb-4 text-center mb-5">
              <p className="text-serif mb-0 text-primary">
                Watch our services online
              </p>
              <h2 className="text-uppercase">Our latest sermons</h2>
            </header>
            <div className="row gy-5">
              <div className="col-lg-4">
                <a className="primary-overlay d-block mb-3" href="text.html">
                  <div className="overlay-content">
                    <img
                      className="img-fluid w-100"
                      src="img/sermon-1.jpg"
                      alt="..."
                    />
                  </div>
                </a>
                <h4 className="mb-0">
                  {" "}
                  <a className="reset-anchor" href="text.html">
                    Testing our faith
                  </a>
                </h4>
                <p className="text-serif text-primary text-small">Holiday</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                  tempor incididunt labore.
                </p>
              </div>
              <div className="col-lg-4">
                <a className="primary-overlay d-block mb-3" href="text.html">
                  <div className="overlay-content">
                    <img
                      className="img-fluid w-100"
                      src="img/sermon-2.jpg"
                      alt="..."
                    />
                  </div>
                </a>
                <h4 className="mb-0">
                  {" "}
                  <a className="reset-anchor" href="text.html">
                    Peaceful day
                  </a>
                </h4>
                <p className="text-serif text-primary text-small">
                  Holiday &amp; Faith
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                  tempor incididunt labore.
                </p>
              </div>
              <div className="col-lg-4">
                <a className="primary-overlay d-block mb-3" href="text.html">
                  <div className="overlay-content">
                    <img
                      className="img-fluid w-100"
                      src="img/sermon-3.jpg"
                      alt="..."
                    />
                  </div>
                </a>
                <h4 className="mb-0">
                  {" "}
                  <a className="reset-anchor" href="text.html">
                    True connection
                  </a>
                </h4>
                <p className="text-serif text-primary text-small">
                  Holiday &amp; Children
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod
                  tempor incididunt labore.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Become a Volunteer Section */}
        <section
          className="bg-cover bg-fixed shadow-inner"
          id="volunteer"
          style={{ background: "url(img/divider-img.jpg)" }}>
          <div className="primary-overlay py-5">
            <div className="overlay-content z-index-20 position-relative py-5">
              <div className="container py-5 text-white text-center">
                <p className="lead text-serif mb-1">
                  You’ve been created with gifts and passions to use
                </p>
                <h2 className="text-xl text-shadow mb-4">Become a Volunteer</h2>
                <a className="btn btn-primary px-4" href="text.html">
                  Signup now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Next Event Section*/}
        <section className="bg-primary-shade text-white py-5" id="events">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-lg-3 text-lg-end mb-4 mb-lg-0">
                <h2 className="mb-0 text-uppercase">Next Event</h2>
              </div>
              <div className="col-lg-6 text-center mb-4 mb-lg-0">
                <p className="text-serif">Experience God’s Presence</p>
                <div
                  className="p-2 counter event-counter d-flex align-items-center justify-content-center text-center"
                  data-counter=".event-counter"
                  data-date="Sat Dec 26 2021 11:12:29 GMT">
                  <div className="day counter-item text-center mx-3">
                    <p className="h2 num" />
                    <span className="word text-serif">Days</span>
                  </div>
                  <div className="hour counter-item text-center mx-3">
                    <p className="h2 num" />
                    <span className="word text-serif">Hours</span>
                  </div>
                  <div className="min counter-item text-center mx-3">
                    <p className="h2 num" />
                    <span className="word text-serif">Minutes</span>
                  </div>
                  <div className="sec counter-item text-center mx-3">
                    <p className="h2 num" />
                    <span className="word text-serif">Seconds</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-lg-end">
                <a className="btn btn-outline-light px-4" href="text.html">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Events Section*/}
        <section className="py-5">
          <div className="container py-5">
            <header className="mb-4 text-center mb-5">
              <p className="text-serif mb-0 text-primary">United in Spirit</p>
              <h2 className="text-uppercase">Next Events</h2>
            </header>
            <div className="p-4 p-lg-5 bg-light text-center mb-4">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-3">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                    <p className="text-gray text-xl h1 mb-0">17</p>
                    <div className="ms-2">
                      <h5 className="mb-0">April</h5>
                      <p className="text-small mb-0 text-muted">Saturday</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <h4 className="text-primary mb-1">
                    {" "}
                    <a className="reset-anchor" href="text.html">
                      Building a Church Fellowship
                    </a>
                  </h4>
                  <p className="text-serif mb-0 text-muted">
                    April 13, 2019 - October 14, 2022
                  </p>
                  <p className="text-serif mb-0 text-muted">New York</p>
                </div>
                <div className="col-lg-3 text-lg-end">
                  <a className="btn btn-outline-primary px-4" href="text.html">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 p-lg-5 bg-light text-center">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-3">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                    <p className="text-gray text-xl h1 mb-0">25</p>
                    <div className="ms-2">
                      <h5 className="mb-0">June</h5>
                      <p className="text-small mb-0 text-muted">Monday</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <h4 className="text-primary mb-1">
                    {" "}
                    <a className="reset-anchor" href="text.html">
                      Sermon: Hope For Us
                    </a>
                  </h4>
                  <p className="text-serif mb-0 text-muted">
                    April 13, 2019 - October 14, 2022
                  </p>
                  <p className="text-serif mb-0 text-muted">New York</p>
                </div>
                <div className="col-lg-3 text-lg-end">
                  <a className="btn btn-outline-primary px-4" href="text.html">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Donation Section*/}
        <section id="donation">
          <div className="container-fluid px-0">
            <div className="row align-items-stretch">
              <div className="col-lg-6 bg-light py-lg-5 order-2 order-lg-1">
                <div className="h-100 d-flex flex-column p-5 justify-content-center text-lg-end">
                  <div className="w-100">
                    <p className="text-serif text-primary mb-0">
                      Sharing our faith
                    </p>
                    <h2 className="text-uppercase mb-0">Donate now</h2>
                    <div className="row">
                      <div className="col-lg-10 ms-auto">
                        <p className="text-muted mt-4 mb-0">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique.
                        </p>
                      </div>
                    </div>
                    <div
                      className="progress-circle position-relative my-3"
                      id="pCircle">
                      <div className="position-absolute text-center top-50 start-50 translate-middle d-flex flex-column">
                        <h6 className="h5 text-primary mb-0">70%</h6>
                        <p className="text-small text-serif mb-0 text-muted">
                          donate
                        </p>
                      </div>
                    </div>
                    <div className="d-block">
                      <a className="btn btn-primary px-4" href="text.html">
                        Donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 half-page-banner bg-cover bg-center order-1 order-lg-2"
                style={{ background: "url(img/img-donation.jpg)" }}
              />
            </div>
          </div>
        </section>
        {/* Contact Section*/}
        <section className="py-5" id="contact">
          <div className="container py-5">
            <header className="mb-4 mb-5 text-center">
              <p className="text-serif mb-0 text-primary">Where to find us</p>
              <h2 className="text-uppercase">Reach us</h2>
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </header>
            <div className="row align-items-stretch gx-0">
              <div className="col-lg-6">
                <div
                  className="contact-img bg-center bg-cover"
                  style={{ background: "url(img/contact-bg.jpg)" }}
                />
              </div>
              <div className="col-lg-6">
                <div className="bg-light p-5 h-100">
                  <h4>ST.Johns Church</h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul className="list-unstyled mb-0 text-muted">
                    <li className="mb-2">
                      <a className="reset-anchor" href="tel:+0035478968">
                        {" "}
                        <i className="text-primary me-3 fas fa-phone" />
                        <span>+003 5478 968</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="reset-anchor" href="text.html">
                        {" "}
                        <i className="text-primary me-3 fas fa-globe-americas" />
                        <span>402 Park Ave S, NY 10016</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="reset-anchor"
                        href="mailto:church@example.com">
                        {" "}
                        <i className="text-primary me-3 far fa-envelope" />
                        <span>Church@example.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Clients Section*/}
        <section className="pb-5">
          <div className="container pb-5">
            <div className="row align-items-center text-center gy-2">
              <div className="col-lg-3 col-sm-6">
                <img src="img/logo-1.svg" alt="..." width={120} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src="img/logo-2.svg" alt="..." width={120} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src="img/logo-3.svg" alt="..." width={120} />
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src="img/logo-4.svg" alt="..." width={120} />
              </div>
            </div>
          </div>
        </section>
        {/* Scroll Top Button*/}
        <a className="scroll-top" href="#">
          <i className="fas fa-long-arrow-alt-up" />
        </a>
        <footer className="pt-5 text-white" style={{ background: "#111" }}>
          <div className="container pt-5">
            <div className="row mb-5 pb-5">
              <div className="col-md-4 col-sm-12">
                <img
                  className="mb-3"
                  src="img/logo-footer.svg"
                  alt="..."
                  width={140}
                />
                <p className="text-small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-md-4 col-sm-12">
                <h5 className="mb-4 mt-3">Upcoming events</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <h6 className="mb-1">
                      {" "}
                      <a className="reset-anchor text-primary" href="#!">
                        Building a Church Fellowship
                      </a>
                    </h6>
                    <p className="text-muted text-small mb-0">
                      New York, 18 April 2020
                    </p>
                  </li>
                  <li className="mb-2">
                    <h6 className="mb-1">
                      {" "}
                      <a className="reset-anchor text-primary" href="#!">
                        Sermon: Hope For Us
                      </a>
                    </h6>
                    <p className="text-muted text-small mb-0">
                      New York, 18 April 2020
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12">
                <h5 className="mb-4 mt-3">Newsletter</h5>
                <p className="text-small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="input-group">
                  <input
                    className="form-control border-dark text-white rounded-0 bg-none"
                    type="search"
                    placeholder="Enter your email address"
                    aria-label="email address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary px-4"
                    id="button-addon2"
                    type="submit">
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-4 border-top border-dark text-center">
              <p className="mb-0 text-muted">
                Template designed by{" "}
                <a
                  className="reset-anchor text-primary"
                  href="https://bootstrapious.com/p/cathedral-bootstrap-church-charity-template">
                  Bootstrap Temple
                </a>
                .{" "}
              </p>
              {/* If you want to remove the backlink, please purchase the Attribution-Free License. See details in readme.txt or license.txt. Thanks!*/}
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
