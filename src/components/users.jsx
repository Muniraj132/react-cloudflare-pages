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
        <section id="skills" className="skills">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay={100}>
                <img src="assets/img/skills.png" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay={100}>
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="skills-content">
                  <div className="progress">
                    <span className="skill">
                      HTML <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      CSS <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      JavaScript <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      Photoshop <i className="val">55%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
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
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="/">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <ul
              id="portfolio-flters"
              className="d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={100}>
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 1">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 3">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 2">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Card 2">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 2">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 3">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Card 1">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Card 3">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 3">
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="/portfolio-details.html"
                    className="details-link"
                    title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay={200}>
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>
                      Aut maiores voluptates amet et quis praesentium qui senda
                      para
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay={300}>
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>
                      Quisquam facilis cum velit laborum corrupti fuga rerum
                      quia
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 mt-4"
                data-aos="zoom-in"
                data-aos-delay={400}>
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>
                      Dolorum tempora officiis odit laborum officiis et et
                      accusamus
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Pricing</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="box">
                  <h3>Free Plan</h3>
                  <h4>
                    <sup>$</sup>0<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check" /> Quam adipiscing vitae proin
                    </li>
                    <li>
                      <i className="bx bx-check" /> Nec feugiat nisl pretium
                    </li>
                    <li>
                      <i className="bx bx-check" /> Nulla at volutpat diam
                      uteera
                    </li>
                    <li className="na">
                      <i className="bx bx-x" />{" "}
                      <span>Pharetra massa massa ultricies</span>
                    </li>
                    <li className="na">
                      <i className="bx bx-x" />{" "}
                      <span>Massa ultricies mi quis hendrerit</span>
                    </li>
                  </ul>
                  <a href="/" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay={200}>
                <div className="box featured">
                  <h3>Business Plan</h3>
                  <h4>
                    <sup>$</sup>29<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check" /> Quam adipiscing vitae proin
                    </li>
                    <li>
                      <i className="bx bx-check" /> Nec feugiat nisl pretium
                    </li>
                    <li>
                      <i className="bx bx-check" /> Nulla at volutpat diam
                      uteera
                    </li>
                    <li>
                      <i className="bx bx-check" /> Pharetra massa massa
                      ultricies
                    </li>
                    <li>
                      <i className="bx bx-check" /> Massa ultricies mi quis
                      hendrerit
                    </li>
                  </ul>
                  <a href="/" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay={300}>
                <div className="box">
                  <h3>Developer Plan</h3>
                  <h4>
                    <sup>$</sup>49<span>per month</span>
                  </h4>
                  <ul>
                    <li>
                      <i className="bx bx-check" /> Quam adipiscing vitae proin
                    </li>
                    <li>
                      <i className="bx bx-check" /> Nec feugiat nisl pretium
                    </li>
                    <li>
                      <i className="bx bx-check" /> Nulla at volutpat diam
                      uteera
                    </li>
                    <li>
                      <i className="bx bx-check" /> Pharetra massa massa
                      ultricies
                    </li>
                    <li>
                      <i className="bx bx-check" /> Massa ultricies mi quis
                      hendrerit
                    </li>
                  </ul>
                  <a href="/" className="buy-btn">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Users;
