const Users = ({ users }) => {
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="https://react-cloudflare-pages-e3c.pages.dev/index.html">
              Arsha
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto active"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/appuser">
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#services">
                  Services
                </a>
              </li>
              <li>
                <a
                  className="nav-link   scrollto"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#team">
                  Team
                </a>
              </li>
              <li className="dropdown">
                <a href="https://react-cloudflare-pages-e3c.pages.dev/">
                  <span>Drop Down</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="https://react-cloudflare-pages-e3c.pages.dev/">
                      Drop Down 1
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="https://react-cloudflare-pages-e3c.pages.dev/#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                  </li>
                  <li>
                    <a href="https://react-cloudflare-pages-e3c.pages.dev/">
                      Drop Down 2
                    </a>
                  </li>
                  <li>
                    <a href="https://react-cloudflare-pages-e3c.pages.dev/">
                      Drop Down 3
                    </a>
                  </li>
                  <li>
                    <a href="https://react-cloudflare-pages-e3c.pages.dev/">
                      Drop Down 4
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#contact">
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="getstarted scrollto"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}>
              <h1>Better Solutions For Your Business</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a
                  href="https://react-cloudflare-pages-e3c.pages.dev/#about"
                  className="btn-get-started scrollto">
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
        <section id="clients" className="clients section-bg">
          <div className="container">
            <div className="row" data-aos="zoom-in">
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-3.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-5.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img
                  src="assets/img/clients/client-6.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
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
                    Eum ipsam laborum deleniti{" "}
                    <strong>velit pariatur architecto aut nihil</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
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
                        <span>01</span> Non consectetur a erat nam at lectus
                        urna duis?{" "}
                        <i className="bx bx-chevron-down icon-show" />
                        <i className="bx bx-chevron-up icon-close" />
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list">
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis
                          urna id volutpat lacus laoreet non curabitur gravida.
                          Venenatis lectus magna fringilla urna porttitor
                          rhoncus dolor purus non.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        href="/"
                        data-bs-target="#accordion-list-2"
                        className="collapsed">
                        <span>02</span> Feugiat scelerisque varius morbi enim
                        nunc? <i className="bx bx-chevron-down icon-show" />
                        <i className="bx bx-chevron-up icon-close" />
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list">
                        <p>
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        href="/"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed">
                        <span>03</span> Dolor sit amet consectetur adipiscing
                        elit? <i className="bx bx-chevron-down icon-show" />
                        <i className="bx bx-chevron-up icon-close" />
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
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
      </main>
    </>
  );
};

export default Users;
