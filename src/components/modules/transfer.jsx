import Header from "../header";
import Footer from "../footer";

function Transfer() {
  const customStyle = {
    marginTop: "142px",
  };
  return (
    <>
      <Header />
      <section
        id="services"
        className="services section-bg"
        style={{ padding: "100px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Transfer</h2>
            <h4>Hassel free Transfer made Quickly</h4>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}>
              <div className="icon-box">
                <div className="icons">
                  <img
                    className="img-module"
                    src="assets/img/moules/membertransfer.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Member Transfer</a>
                </h4>
                <p>
                  This feature allows administrators or designated users to
                  create and manage a list of members who are eligible.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}>
              <div className="icon-box">
                <div className="icons">
                  <img
                    className="img-module"
                    src="assets/img/moules/generate.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Generate Due List</a>
                </h4>
                <p>
                  The system can automatically generate a list of members who
                  are due for transfer based on predefined criteria.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={300}>
              <div className="icon-box">
                <div className="icons">
                  <img
                    className="img-module"
                    src="assets/img/moules/request.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Transfer Request</a>
                </h4>
                <p>
                  Members have the ability to submit transfer requests,
                  expressing their desire to move to a different location or
                  position.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}>
              <div className="icon-box">
                <div className="icons">
                  <img
                    className="img-module"
                    src="assets/img/moules/update.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Update Transfer List</a>
                </h4>
                <p>
                  When transfer decisions are made, administrators can update
                  the transfer destinations or positions of members.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}>
              <div className="icon-box">
                <div className="icons">
                  <img
                    className="img-module"
                    src="assets/img/moules/gtl.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Generate New Transfer List</a>
                </h4>
                <p>
                  After processing transfer requests and updating transfer
                  decisions, the system can generate a new transfer list.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}>
              <div className="icon-box">
                <div className="icons">
                  <img
                    className="img-module"
                    src="assets/img/moules/report.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Report Details</a>
                </h4>
                <p>
                  The system can generate a comprehensive report in PDF format
                  that provides transfer details for each member.
                </p>
              </div>
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
              <img src="assets/img/export.svg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content "
              data-aos="fade-left"
              data-aos-delay={100}>
              <h3 className="mt-10" style={customStyle}>
                We’ll export the data from your current system and import it
                into CristO for you…
              </h3>
              <p className="fst-italic">
                Our import team will transfer your people data in from your
                previous system in any format of excel,docx...
              </p>
              <a class="c-btn align-middle" href="/demo">
                TRY IT OUT FIRST
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Transfer;
