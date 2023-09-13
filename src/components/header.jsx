function Header() {
  return (
    <>
      <header id="header" className="fixed-top my-header">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">Cathedra</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/">
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="/">
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
                      rel="noopener">
                      CristO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://religio.cristoerp.com/"
                      target="_blank"
                      rel="noopener">
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
                <a className="nav-link   scrollto" href="/">
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
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
