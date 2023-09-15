import React, { useState, useEffect } from "react";

function Header() {
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);

  const toggleMobileNav = () => {
    setIsNavbarMobile(!isNavbarMobile);
  };

  const handleDropdownClick = (e) => {
    if (isNavbarMobile) {
      e.preventDefault();
      const dropdownContent = e.target.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.classList.toggle("dropdown-active");
      }
    }
  };

  const handleDropdownLinks = (e) => {
    if (isNavbarMobile) {
      const dropdownToggle = e.target.closest(".dropdown > a");
      if (dropdownToggle) {
        e.preventDefault();
        const dropdownContent = dropdownToggle.nextElementSibling;
        if (dropdownContent) {
          dropdownContent.classList.toggle("dropdown-active");
        }
      }
    }
  };

  useEffect(() => {
    // Add event listener for clicking on dropdown links
    document.addEventListener("click", handleDropdownLinks);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDropdownLinks);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavbarMobile]);

  return (
    <>
      <header id="header" className="fixed-top my-header">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">Cathedra</a>
          </h1>
          <nav
            id="navbar"
            className={`navbar ${isNavbarMobile ? "navbar-mobile" : ""}`}>
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/">
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="/" onClick={handleDropdownClick}>
                  <span>Products</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="/">
                      {" "}
                      <img
                        src="assets/img/moules/cathedra.png"
                        className="logoimg"
                        alt="cathedra"
                      />
                      Cathedra
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://parish.cristoerp.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/img/moules/parishimg.png"
                        className="logoimg"
                        alt="cathedra"
                      />
                      CristO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://religio.cristoerp.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src="assets/img/moules/religioimg.png"
                        className="logoimg"
                        alt="cathedra"
                      />
                      Religio
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="assets/img/moules/charisma.png"
                        className="logoimg"
                        alt="cathedra"
                      />
                      Charisma
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/" onClick={handleDropdownClick}>
                  <span>Features</span> <i className="bi bi-chevron-down" />
                </a>
                <ul id="startul">
                  <li>
                    <div className="row">
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/dashboard"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/dashboard-3.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Dashboard"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "3px 6rem 0px 1rem" }}>
                                <div className="nav-link-title">
                                  <b>Dashboard</b>
                                </div>
                                <p className="nav-link-description">
                                  Monitor, analyze, optimize of your province
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/community"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/community-1.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Community"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Community</b>
                                </div>
                                <p className="nav-link-description">
                                  Where you belong and thrive
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/calendar"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/calendar-2.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Calendar"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Calendar</b>
                                </div>
                                <p className="nav-link-description">
                                  Smart way to organize your schedule
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/meeting"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/meeting-2.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Meeting"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Meeting</b>
                                </div>
                                <p className="nav-link-description">
                                  Connect, Communicate, Collaborate
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/members"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/members-1.jpg"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Members"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Members</b>
                                </div>
                                <p className="nav-link-description">
                                  Manage your database Priest and their <br />
                                  informations
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/documents"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/document-2.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Documents"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Document Management</b>
                                </div>
                                <p className="nav-link-description">
                                  Store, organize, and access your <br /> files
                                  anytime, anywhere.
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/circular"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/1759/1759492.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Circular"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 8rem 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Circular</b>
                                </div>
                                <p className="nav-link-description">
                                  Share your faith with circulars
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/transfer"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/transfer-2.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Transfers"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Transfers</b>
                                </div>
                                <p className="nav-link-description">
                                  Hassel free Transfers made Quickly
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/directory"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/directory-2.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Directory"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 11rem 0px 15px" }}>
                                <div className="nav-link-title">
                                  <b>Directory</b>
                                </div>
                                <p className="nav-link-description">
                                  Simplify your search with one click
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="flex-tl tablet-vertical is-mobile-nav">
                          <div className="nav-dropdown-wrapper">
                            <a
                              href="/contacts"
                              className="nav-dropdown-link w-inline-block"
                              tabIndex={0}>
                              <img
                                src="https://religio.cristoerp.com/wp-content/uploads/2023/07/contact-2.png"
                                style={{ height: "40px" }}
                                className="nav-link-logo"
                                alt="Contacts"
                              />
                              <div
                                className="wrapper"
                                style={{ margin: "1px 76px 0px 17px" }}>
                                <div className="nav-link-title">
                                  <b>Contacts</b>
                                </div>
                                <p className="nav-link-description">
                                  Keep your contacts up to date and <br />{" "}
                                  organized.
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/support">
                  Support
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="/security">
                  Security
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="/demo">
                  Get Started
                </a>
              </li>
            </ul>
            <i
              className={`bi mobile-nav-toggle ${
                isNavbarMobile ? "bi-x" : "bi-list"
              }`}
              onClick={toggleMobileNav}
            />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
