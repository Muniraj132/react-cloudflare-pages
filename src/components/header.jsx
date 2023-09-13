import React, { useEffect, useState } from "react";

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
              <li>
                <a className="nav-link scrollto" href="/appuser">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link   scrollto" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/team">
                  Team
                </a>
              </li>
              <li className="dropdown">
                <a href="/">
                  <span>Drop Down</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="/">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="/">
                      <span>Deep Drop Down</span>
                      <i className="bi bi-chevron-right" />
                    </a>
                  </li>
                  <li>
                    <a href="/">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="/about">
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