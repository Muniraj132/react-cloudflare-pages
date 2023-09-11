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
                <a
                  className="nav-link scrollto"
                  href="https://react-cloudflare-pages-e3c.pages.dev/#about">
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
                src="%PUBLIC_URL%/assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
