import Header from "../header";
import Footer from "../footer";

function Dashboard() {
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
            <h2>Dashboard</h2>
            <h4>Monitor, analyze, optimize</h4>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/profile.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Province Profile</a>
                </h4>
                <p>The user can view information about a specific province.</p>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/birthday.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Birthday Wishes</a>
                </h4>
                <p>
                  This user can see the upcoming birthdays and important feast
                  days.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/news.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Province News</a>
                </h4>
                <p>The users can see news to a specific province.</p>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/stat.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Statistics</a>
                </h4>
                <p>
                  User can see the statistical information related members and
                  province.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/ins.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Institution</a>
                </h4>
                <p>The user can view information about a specific province.</p>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/calendar-4.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Calendar</a>
                </h4>
                <p>
                  The user can set various types of information,calendar of
                  events,
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

export default Dashboard;
