import Header from "../header";
import Footer from "../footer";

function Members() {
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
            <h2>Members</h2>
            <h4>Quickly Look Up People</h4>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/memberprofile.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Member Profile</a>
                </h4>
                <p>
                  Store all the information about every user who logged in
                  dashboard.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/update.jpg"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Profile Update</a>
                </h4>
                <p>Update all the member profile such as email,mobile,name.</p>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/email.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Email</a>
                </h4>
                <p>
                  Sending Email to all the members of the province at Same time.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/dataimport.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Data Import & Export</a>
                </h4>
                <p>
                  Import the Records using local files and Export all the Data
                  in PDF format.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/ministry.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Member Ministry</a>
                </h4>
                <p>We Can see all the Memeber ministries in the single page.</p>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/report.jpg"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Reports</a>
                </h4>
                <p>Generating and maintaining reports for different members.</p>
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

export default Members;
