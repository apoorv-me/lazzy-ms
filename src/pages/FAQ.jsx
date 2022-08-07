import React, { useState, useEffect } from "react";
import { getFAQs } from "../services";

export const FAQ = () => {
  const [faqs, setfaqs] = useState([]);

  const FaqCom = ({ question, answer }) => {
    const [show, setshow] = useState(false);

    const accordionOpenClose = () => {
      if (show === false) {
        setshow(true);
      } else if (show === true) {
        setshow(false);
      }
    };

    return (
      <>
        <button className="accordion" onClick={accordionOpenClose}>
          {question}
        </button>
        <div className="panel" style={{ display: show ? "block" : "none" }}>
          <p>{answer}</p>
        </div>
      </>
    );
  };

  useEffect(() => {
    getFAQs()
      .then((res) => {
        setfaqs(res?.data?.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log(err?.response?.data?.error?.message);
        }
      });
  });

  return (
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
                  <h1>Frequently Asked Questions</h1>
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
              <h3>Faq's</h3>
              <div className="col-lg-6">
                {faqs.map((faq) => (
                  <FaqCom
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>

              <div className="col-lg-6"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
