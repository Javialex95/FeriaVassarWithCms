import { motion } from "framer-motion";
import React, { useState } from "react";
import { useOuterClick } from "../../Common/Hooks/useOutsideClick";

import { useLocation } from "react-router";
import { ROUTES } from "../../Router/routes";
import { useWindowSize } from "../../Common/Hooks/useWindowSize";

const test = {
  show: {
    x: 0,
    transition: { ease: "linear" },
  },
  hidden: {
    x: 150,
    transition: { ease: "linear" },
  },
};

const test1 = {
  show: {
    // x: 40,
    opacity: 1,
    transition: {
      x: {
        ease: "linear",
      },
      opacity: {
        delay: 0.5,
      },
    },
  },
  hidden: {
    // x: 150,
    opacity: 0,
    transition: {
      x: {
        ease: "linear",
        delay: 0.5,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
};

export const Close = () => {
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("Menu");
  const [active, setActive] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();
  const size = useWindowSize();

  const innerRef = useOuterClick((ev) => outsideClick());

  const outsideClick = () => {
    setHover(false);
  };

  const openMenu = () => {
    setText("Cerrar");
  };

  const closeMenu = () => {
    setText("Menu");
  };

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    if (!active) {
      openMenu();
      setRedirect(false);
      menu.classList.add("show-menu");
      body.style.overflow = "hidden";
    } else {
      closeMenu();
      menu.classList.remove("show-menu");
      body.style.overflow = "auto";
    }
  };

  if (
    location.pathname === ROUTES.CMS_LOGIN ||
    location.pathname === ROUTES.CMS_EMPRENDIMIENTO ||
    location.pathname === ROUTES.CMS_ADMIN ||
    location.pathname === ROUTES.CMS_LISTA
  ) {
    return null;
  }

  const handleOnMouseEnter = () => {
    if (size.width > 768) setHover(true);
  };
  const handleOnMouseLeave = () => {
    if (size.width > 768) setHover(false);
  };

  return (
    <>
      <div
        className={`menu-opener ${hover && "menu-opener_hover"}`}
        ref={innerRef}
        onClick={toggleMenu}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <svg viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clipPath-5">
              <path d="M0 49.5C0 23.2665 21.2665 2 47.5 2H200V97H47.5C21.2665 97 0 75.7335 0 49.5V49.5Z" />
              <circle cx="200" cy="50" r="50.1" />
            </clipPath>
            <clipPath id="clipPath-1">
              <circle cx="200" cy="50" r="50.1" />
            </clipPath>
          </defs>

          <g clipPath="url(#clipPath-5)">
            <motion.path
              transform="translate(0, 0)"
              d="M47.5 2.25H199.75V96.75H47.5C21.4045 96.75 0.25 75.5955 0.25 49.5C0.25 23.4045 21.4045 2.25 47.5 2.25Z"
              fill="#BBB3A1"
              stroke="black"
              strokeWidth="0.5"
              variants={test}
              animate={hover ? "show" : "hidden"}
            />
            <circle cx="200" cy="50" r="49.75" stroke="black" strokeWidth="1" />

            <motion.text
              font-size="25"
              y="60"
              variants={test1}
              animate={hover ? "show" : "hidden"}
            >
              Cerrar
            </motion.text>
          </g>
          <g clipPath="url(#clipPath-1)" fill="">
            <g id="equis_cerrar" transform="translate(0.707 0.707)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                y="2"
                x="180"
                width="40"
                viewBox="0 0 50.634 50.634"
              >
                <line
                  id="Line_12"
                  data-name="Line 12"
                  y2="69.607"
                  transform="translate(49.22 0) rotate(45)"
                  fill="black"
                  stroke="#241F20"
                  strokeWidth="2"
                />
                <line
                  id="Line_13"
                  data-name="Line 13"
                  y1="69.607"
                  transform="translate(49.22 49.22) rotate(135)"
                  fill="none"
                  stroke="#241F20"
                  strokeWidth="2"
                />
              </svg>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};