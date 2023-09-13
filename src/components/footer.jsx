function Footer() {
  const listStyle = {
    display: "flex",
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
    marginLeft: "231px",
    color: "white",
  };
  const listItemStyle = {
    marginRight: "40px",
  };
  const listiconStyle = {
    display: "flex",
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
    marginLeft: "24rem",
    color: "white",
    marginTop: "27px",
  };
  const listIconStyle = {
    marginRight: "20px",
  };
  return (
    <>
      <footer id="footer">
        <div className="container footer-bottom clearfix">
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a className="footertag" href="/">
                Home
              </a>
            </li>
            <li style={listItemStyle}>
              <a className="footertag" href="/demo">
                Free Trial
              </a>
            </li>
            <li style={listItemStyle}>
              <a className="footertag" href="/about">
                About Us
              </a>
            </li>
            <li style={listItemStyle}>
              <a className="footertag" href="/">
                Mobile App
              </a>
            </li>
            <li style={listItemStyle}>
              <a className="footertag" href="/">
                Security
              </a>
            </li>
            <li style={listItemStyle}>
              <a className="footertag" href="/">
                Support
              </a>
            </li>
            <li style={listItemStyle}>
              <a className="footertag" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <ul style={listiconStyle}>
            <li style={listIconStyle}>
              <a href="/" className="twitter footertag">
                <i className="bx bxl-twitter" style={{ fontSize: "20px" }} />
              </a>
            </li>
            <li style={listIconStyle}>
              <a href="/" className="facebook footertag">
                <i className="bx bxl-facebook" style={{ fontSize: "20px" }} />
              </a>
            </li>
            <li style={listIconStyle}>
              <a href="/" className="instagram footertag">
                <i className="bx bxl-instagram" style={{ fontSize: "20px" }} />
              </a>
            </li>
            <li style={listIconStyle}>
              <a href="/" className="google-plus footertag">
                <i className="bx bxl-skype" style={{ fontSize: "20px" }} />
              </a>
            </li>
            <li style={listIconStyle}>
              <a href="/" className="linkedin footertag">
                <i className="bx bxl-linkedin" style={{ fontSize: "20px" }} />
              </a>
            </li>
          </ul>

          <div style={{ marginLeft: "17rem" }}>
            © Copyright{" "}
            <strong>
              <span>Cathedra</span>
            </strong>
            . All Rights Reserved Designed by{" "}
            <a
              href="https://www.boscosofttech.com/"
              target="_blank"
              rel="noopener noreferrer">
              Boscosoft Technologies
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
