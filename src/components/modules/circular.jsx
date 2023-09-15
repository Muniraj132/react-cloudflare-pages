import Header from "../header";
import Footer from "../footer";

function Circular() {
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
            <h2>Circular</h2>
            <h4>Share your faith with circulars</h4>
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
                    src="assets/img/cercular.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Circular Maintain</a>
                </h4>
                <p>
                  Person can be Create the Circulars and Maintain all the
                  Circulars.
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
                    src="assets/img/moules/Pdf_icon.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Generate Circular Content</a>
                </h4>
                <p>
                  User can Generate the Circular Content into PDF format and
                  Store it on computer.
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
                    src="assets/img/moules/send.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Send Circular</a>
                </h4>
                <p>
                  Admin can send the ciruclar to all the members in email
                  notification.
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
                    src="assets/img/moules/Preview2.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Preview Circular</a>
                </h4>
                <p>
                  Before send the Circular the admin can be preview the circular
                  content.
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
                    src="assets/img/moules/upload.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Upload Circular</a>
                </h4>
                <p>
                  Admin can be upload the circular document in dashboard and it
                  will send to the members.
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
                    src="assets/img/moules/store.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Store Circular into Documents</a>
                </h4>
                <p>
                  The Ciruclars are stored in the dashboard page in the document
                  format.
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

export default Circular;
