import Header from "./header";
import Footer from "./footer";

function Benefits() {
  return (
    <>
      <Header />
      <section id="about" className="about" style={{ padding: "100px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>BENEFITS FOR THE USER</h2>
            <img
              src="/assets/img/6.jpg"
              style={{ width: "500px" }}
              className="img-fluid animated"
              alt=""
            />
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bx bx-badge-check" />
                  Single source for all member, institution details and
                  communication
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Create & Maintain Member Profile (Education, Sacraments,
                  Profession, Formation, Holy Order etc…)
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Member profile with more than 170 data points that can be
                  viewed online or downloaded in PDF/Excel
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Communicate thru email, SMS to the Members, Communities and
                  Intuitions and maintain records
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Send Greetings on Birthdays & on all special Anniversaries
                  days such as Ordination, feast days
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Create & Maintain Calendar events
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  View Personal and Public Calendar events
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Add Photos and Attachments
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Send Circular to all members
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <ul>
                <li>
                  <i className="bx bx-badge-check" />
                  Schedule meetings, send invites and track
                  confirmation/participation
                </li>
                <li>
                  <i className="bx bx-badge-check" />
                  Generate Member List, Transfer Due list and enable transfer
                </li>
                <li>
                  <i className="bx bx-badge-check" /> Generate Annual Directory
                  list and online directory reports
                </li>
                <li>
                  <i className="bx bx-badge-check" /> Customized Reports can be
                  generated as Excel & PDF
                </li>
                <li>
                  <i className="bx bx-badge-check" /> Application can be
                  accessed through Desktop, Web and Mobile devices
                </li>
                <li>
                  <i className="bx bx-badge-check" /> Allows you to dedicate
                  more time for pastoral activities versus administrative
                  activities
                </li>
                <li>
                  <i className="bx bx-badge-check" /> Excellent Training and
                  support to enable quicker onboarding
                </li>
                <li>
                  <i className="bx bx-badge-check" /> Availability of upgrades
                  and extensions for free
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Benefits;
