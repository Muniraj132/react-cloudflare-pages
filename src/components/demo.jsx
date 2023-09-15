import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "./header";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";

function Demo() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const maxValue = 10;
  const navigate = useNavigate();
  function onSubmitdemoform(data, e) {
    console.log(data);
    axios
      .post(`https://religioapp.cristoerp.com/api/store-demo/data`, data)
      .then((Response) => {
        console.log(Response);
        if (Response.status === 200) {
          Swal.fire("Submited Successfully..!", "", "success");
          e.target.reset();
          navigate("/demo");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err.message,
        });
      });
  }
  return (
    <>
      <Header />
      <section id="contact" className="contact" style={{ padding: "100px 0" }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Free Trial</h2>
            <p>
              "Cathedra, our Diocese Management Software, is designed to
              streamline and elevate the management of your diocese. With an
              array of powerful tools and features, Cathedra empowers diocesan
              leaders to efficiently oversee operations, foster community
              engagement, and strengthen faith-based initiatives. Our
              comprehensive solution ensures that you are well-equipped to
              manage your diocese effectively, from administration and
              communication to outreach and growth. Experience the
              transformative capabilities of Cathedra and lead your diocese into
              a brighter future."
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <form
                className="php-email-form"
                onSubmit={handleSubmit(onSubmitdemoform)}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    {...register("name", { required: true })}
                    aria-invalid={errors?.name ? "true" : "false"}
                  />
                  {errors?.name?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Name is required</label>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                    aria-invalid={errors?.email ? "true" : "false"}
                  />
                  {errors?.email?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Email is required</label>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="name">Your Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    max={maxValue}
                    id="mobile"
                    {...register("mobile", { required: true })}
                    aria-invalid={errors?.mobile ? "true" : "false"}
                  />
                  {errors?.mobile?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Mobile is required</label>
                    </div>
                  )}
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <div className="info">
                <h1>
                  Discover if Cathedra is perfect for your Diocese in just 5
                  minutes!
                </h1>
                <h5 style={{ marginTop: "25px" }}>
                  "Unlock the Power of Faith with a Diocese Free Trial Today.
                  Explore our resources, services, and support - no strings
                  attached. Start your journey towards a stronger spiritual
                  community."
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Demo;
