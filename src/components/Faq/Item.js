import React, { useState } from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { arrowDown } from "../Common/Icons";

export const Item = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AccordionItem className={`${isOpen && "accordion--open"}`}>
      <AccordionItemHeading onClick={() => clickAccordion(item)}>
        <AccordionItemButton>
          <div className={`accordion_button`}>
            <div className="accordion_button_text">
              <span>{item.pregunta}</span>
            </div>
            <div className="arrow">{arrowDown}</div>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div
          className="accordion_panel"
          dangerouslySetInnerHTML={{ __html: item.respuesta }}
        ></div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};
