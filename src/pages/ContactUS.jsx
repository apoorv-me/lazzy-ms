import React, { useState, useEffect } from "react";
import InputText from "../components/InputText";
import { useForm } from "react-hook-form";
import { contactUs } from "../services";
import swal from "sweetalert";

export const ContactUS = () => {
  const [error, seterror] = useState(" ");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    contactUs(data)
      .then((res) => {
        swal({
          title: "Admin will contact you soon.",
          text: res?.data?.message,
          icon: "success",
          button: "ok",
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          seterror(err?.response?.data?.error?.message);
        }
      });
  };

  return (
    <>
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section
            id="subheader"
            className="text-light"
            style={{ backgroundImage: `url("../metaframe/img/subheader.jpg")` }}
          >
            <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1>Contact Us</h1>
                    <p>Anim pariatur cliche reprehenderit</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white-page" aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-sm-30">
                  <h3>Do you have any question?</h3>

                  <form
                    name="contactForm"
                    id="contact_form"
                    className="form-border"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="field-set">
                      <InputText
                        name="name"
                        type="text"
                        placeholder="Name"
                        register={register}
                        validation={{ required: true }}
                        error={errors.Name}
                      />
                    </div>

                    <div className="field-set">
                      <InputText
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        register={register}
                        validation={{ required: true }}
                        error={errors.email}
                      />
                    </div>

                    <div className="field-set">
                      <InputText
                        name="number"
                        type="number"
                        placeholder="Phone Number"
                        register={register}
                        validation={{ required: true }}
                        error={errors.number}
                      />
                    </div>

                    <div className="field-set">
                      <InputText
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        register={register}
                        validation={{ required: true }}
                        error={errors.subject}
                      />
                    </div>

                    <div className="field-set">
                      <InputText
                        name="message"
                        type="textarea"
                        placeholder="Message"
                        register={register}
                        validation={{ required: true }}
                        error={errors.message}
                      />
                    </div>

                    <div className="spacer-half"></div>

                    <div id="submit">
                      <input
                        type="submit"
                        id="send_message"
                        value="Submit"
                        className="btn btn-main"
                      />
                    </div>
                  </form>
                  {error && error}
                </div>

                <div className="col-lg-4">
                  <div
                    className="padding40 box-rounded mb30"
                    style={{
                      backgroundColor: "rgb(242, 246, 254)",
                      backgroundSize: "cover",
                    }}
                  >
                    <h3>US Office</h3>
                    <address className="s1">
                      <span>
                        <i className="id-color fa fa-map-marker fa-lg"></i>08 W
                        36th St, New York, NY 10001
                      </span>
                      <span>
                        <i className="id-color fa fa-phone fa-lg"></i>+1 333
                        9296
                      </span>
                      <span>
                        <i className="id-color fa fa-envelope-o fa-lg"></i>
                        <a href="#">contact@example.com</a>
                      </span>
                      <span>
                        <i className="id-color fa fa-file-pdf-o fa-lg"></i>
                        <a href="#">Download Brochure</a>
                      </span>
                    </address>
                  </div>

                  <div className="padding40 bg-color text-light box-rounded">
                    <h3>AU Office</h3>
                    <address className="s1">
                      <span>
                        <i className="fa fa-map-marker fa-lg"></i>100 Mainstreet
                        Center, Sydney
                      </span>
                      <span>
                        <i className="fa fa-phone fa-lg"></i>+61 333 9296
                      </span>
                      <span>
                        <i className="fa fa-envelope-o fa-lg"></i>
                        <a href="#">contact@example.com</a>
                      </span>
                      <span>
                        <i className="fa fa-file-pdf-o fa-lg"></i>
                        <a href="#">Download Brochure</a>
                      </span>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
