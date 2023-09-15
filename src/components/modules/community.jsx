import Header from "../header";
import Footer from "../footer";

function Community() {
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
            <h2>Community</h2>
            <h4>Where you belong and thrive</h4>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/import.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Import Record</a>
                </h4>
                <p>Import or Create Manual Record for the Community Members.</p>
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/graph.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Graph</a>
                </h4>
                <p>
                  We Can see all the records in graph type, such as Pivot table.
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
                    src="https://religio.cristoerp.com/wp-content/uploads/2023/07/renewal.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Renewal</a>
                </h4>
                <p>
                  Renew all the Documents in this Section. It should be Manual
                  and Import.
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
                    src="https://freeiconshop.com/wp-content/uploads/edd/search-var-flat.png"
                    alt="ReligiO"
                  />
                </div>
                <h4>
                  <a href="/">Advanced Search</a>
                </h4>
                <p>
                  We can Search the details using Advanced search such as name,
                  email, mobile
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

export default Community;
