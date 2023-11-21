import React, { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import { HomeFooter } from "../Home/Footer";
import { getFaqs } from "../lib/api";
import { Item } from "./Item";

export const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getFaqs().then((data) => {
      setFaqs(data.data.faqs);
    });
  }, []);
  return (
    <>
      <section className="faq">
        <div className="faq_title">
          <div className="title"><strong>Preguntas</strong> <br /> <span className="libre_font" >frecuentes</span></div>
        </div>
        <div className="faq_content">
          <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
            {faqs.length > 0 && (
              <>
                {faqs.map((item, index) => {
                  return <Item item={item} />;
                })}
              </>
            )}
          </Accordion>
        </div>
      </section>
    </>
  );
};
