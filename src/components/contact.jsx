import Header from "./header";
import Footer from "./footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  function onSubmitcontactform(data, e) {
    axios
      .post(`https://religioapp.cristoerp.com/api/store-contact/data`, data)
      .then((Response) => {
        console.log(Response);
        if (Response.status === 200) {
          Swal.fire("Submited Successfully..!", "", "success");
          e.target.reset();
          navigate("/contact");
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
            <h2>Contact</h2>
            <p>
              Contact us to establish a direct line of communication. We value
              your questions, feedback, and inquiries. Our team is readily
              available to assist you and provide the information you need.
              Reach out via phone, email, or the contact form, and we'll get
              back to you promptly. Your input is important to us, and we look
              forward to hearing from you
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>
                    Bosco Soft Technologies Pvt. Ltd, No. 231/77, S.H.C Complex,
                    TamilNadu , India , 635601
                  </p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>info@boscosofttech.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+91 9786000436</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15575.764257833738!2d78.61428245477639!3d12.586135910511421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1694600412664!5m2!1sen!2sin"
                  style={{ border: 0, width: "100%", height: "290px" }}
                  allowfullscreen=""
                  title="boscosoft"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                className="php-email-form"
                onSubmit={handleSubmit(onSubmitcontactform)}>
                <div className="row">
                  <div className="form-group col-md-6">
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
                  <div className="form-group col-md-6">
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
                </div>
                <div className="form-group">
                  <label htmlFor="name">Your Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
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
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="subject"
                    rows={10}
                    defaultValue={""}
                    {...register("subject", { required: true })}
                    aria-invalid={errors?.subject ? "true" : "false"}
                  />
                  {errors?.subject?.type === "required" && (
                    <div className="text-danger text_error">
                      <label className="errlabel">Message is required</label>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
