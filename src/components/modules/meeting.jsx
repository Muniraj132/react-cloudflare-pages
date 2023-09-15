import Header from "../header";
import Footer from "../footer";

function Meeting() {
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
            <h2>Meeting</h2>
            <h4>Connect, Communicate, Collaborate</h4>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/schedule.jpg"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Schedule Meeting</a>
                </h4>
                <p>
                  Users can create and schedule meetings with all the necessary
                  details.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/attach-1.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Attachments</a>
                </h4>
                <p>
                  Users can attach relevant files or documents to the meeting
                  details.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/invite.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Invite Members</a>
                </h4>
                <p>
                  Users can invite participants to the meeting by sending email
                  invitations.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/mom.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Minutes of Meeting</a>
                </h4>
                <p>
                  After the meeting, the recorder can generate and provide a
                  report called "Minutes of Meeting".
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

export default Meeting;
