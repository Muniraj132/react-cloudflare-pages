import Header from "./header";
import Footer from "./footer";

function About() {
  return (
    <>
      <Header />
      <section id="about" className="about" style={{ padding: "100px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <h2>Boscosoft is Stands for</h2>
              <ul>
                <li>
                  <i className="ri-check-double-line" />
                  Developing complete feature rich and scalable ERP solutions as
                  per need and requirement.
                </li>
                <li>
                  <i className="ri-check-double-line" /> Innovative products and
                  excellent support that meet or exceed Client's expectations.
                </li>
                <li>
                  <i className="ri-check-double-line" /> Timely delivery.
                </li>
                <li>
                  <i className="ri-check-double-line" /> Unassailable support.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>
                IT And IT-Enabled Solution Provider For Church corporates And
                Service Sectors
              </h3>
              <ul>
                <li>
                  <i className="ri-check-double-line" />
                  Our strength is innovative approach, user friendliness and
                  staunch customer support with focus on mobile app , IoT and AI
                  Integration.
                </li>
              </ul>

              <h3>Our Mission</h3>

              <ul>
                <li>
                  <i className="ri-check-double-line" /> We strive to achieve
                  optimal results in the interest of stakeholders, employing
                  cutting-edge technologies, involving committed associates,
                  driven by innovation and leadership.
                </li>
              </ul>
              <a
                href="https://www.boscosofttech.com/about"
                target="_blank"
                className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
