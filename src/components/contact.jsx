import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  errors: {
    name: "",
    email: "",
    message: "",
  },
};

export const Contact = (props) => {
  const [{ name, email, message, errors }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...prevState.errors, [name]: "" }, // Clear validation errors when input changes
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };

    if (name.trim() === "") {
      updatedErrors.name = "Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      updatedErrors.email = "Invalid email format";
      isValid = false;
    }

    if (message.trim() === "") {
      updatedErrors.message = "Message is required";
      isValid = false;
    }

    setState((prevState) => ({ ...prevState, errors: updatedErrors }));
    return isValid;
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      // Check if any field is empty and display an alert
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    if (validateForm()) {
      emailjs
        .sendForm("service_dld0tfl", "template_3fjs2vo", e.target, "ql1Syo8D_hv790_tp")
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Email sent successfully!"); // Display success toast
            clearState();
          },
          (error) => {
            console.error(error.text);
            toast.error("Error sending email. Please try again."); // Display error toast
          }
        );
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${errors.name && "is-invalid"}`}
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="help-block text-danger">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email && "is-invalid"}`}
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="help-block text-danger">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className={`form-control ${errors.message && "is-invalid"}`}
                    rows="4"
                    placeholder="Message"
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="help-block text-danger">{errors.message}</p>}
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};
