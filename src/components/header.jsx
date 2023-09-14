import React, { useState, useEffect } from "react";

function Header() {
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleMobileNav = () => {
    setIsNavbarMobile(!isNavbarMobile);
  };

  // Function to handle click events on dropdown links
  const handleDropdownClick = (e) => {
    if (isNavbarMobile) {
      e.preventDefault();
      const dropdownContent = e.target.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.classList.toggle("dropdown-active");
      }
    }
  };

  // Function to handle scroll-to links
  const handleScrollTo = (hash) => {
    if (isNavbarMobile) {
      setIsNavbarMobile(false);
    }
    // Implement your scroll-to logic here, e.g., using the `hash` variable
    // For simplicity, let's assume it's a smooth scroll
    document.querySelector(hash).scrollIntoView({
      behavior: "smooth",
    });
  };

  // Event listener for clicking on dropdown links
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

  // Use useEffect to add and remove event listeners when the component mounts and unmounts
  useEffect(() => {
    // Add event listener for clicking on dropdown links
    document.addEventListener("click", handleDropdownLinks);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDropdownLinks);
    };
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
                    <a href="/">Cathedra</a>
                  </li>
                  <li>
                    <a
                      href="https://parish.cristoerp.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      CristO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://religio.cristoerp.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      Religio
                    </a>
                  </li>
                  <li>
                    <a href="/">Charisma</a>
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
                <a className="nav-link scrollto" href="/">
                  Mobile App
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
