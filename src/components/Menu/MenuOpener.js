import { motion } from "framer-motion";
import { useState } from "react";
import { useOuterClick } from "../Common/Hooks/useOutsideClick";
import { Menu } from "./Menu";
import { useLocation } from "react-router-dom";

import { ROUTES } from "../Router/routes";
import { useWindowSize } from "../Common/Hooks/useWindowSize";

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

export const MenuOpener = () => {
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("Menu");
  const [active, setActive] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();
  const size = useWindowSize();

  const innerRef = useOuterClick((ev) => outsideClick());

  if (
    location.pathname === ROUTES.CMS_LOGIN ||
    location.pathname === ROUTES.CMS_EMPRENDIMIENTO ||
    location.pathname === ROUTES.CMS_ADMIN ||
    location.pathname === ROUTES.CMS_LISTA
  ) {
    return null;
  }

  const outsideClick = () => {
    setHover(false);
  };

  const openMenu = () => {
    setActive(true);
    setText("Cerrar");
  };

  const closeMenu = () => {
    setActive(false);
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
              fill="#241F20"
              stroke="white"
              strokeWidth="0.5"
              variants={test}
              animate={hover ? "show" : "hidden"}
            />

            {!active ? (
              <circle
                cx="200"
                cy="50"
                r="49.75"
                stroke="#BBB3A1"
                strokeWidth="1"
                fill="#BBB3A1"
              />
            ) : (
              <circle
                cx="200"
                cy="50"
                r="49.75"
                stroke="#BBB3A1"
                strokeWidth="1"
                fill="#811A92"
              />
            )}

            <motion.text
              font-size="25"
              y="60"
              variants={test1}
              fill="#BBB3A1"
              animate={hover ? "show" : "hidden"}
            >
              {text}
            </motion.text>
          </g>
          <g clipPath="url(#clipPath-1)" fill="">
            {active ? (
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
                    fill="#BBB3A1"
                    stroke="#BBB3A1"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_13"
                    data-name="Line 13"
                    y1="69.607"
                    transform="translate(49.22 49.22) rotate(135)"
                    fill="#BBB3A1"
                    stroke="#BBB3A1"
                    strokeWidth="2"
                  />
                </svg>
              </g>
            ) : (
              <g id="logo-svg">
                <svg
                  y="2"
                  x="180"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.973 141.33"
                >
                  <path
                    fill="currentColor"
                    data-name="Trazado 1491"
                    d="M846.6,75.673l-6.9,17.62,14.159,36.17,6.892-17.634Z"
                    transform="translate(-763.374 -33.569)"
                  />
                  <path
                    fill="currentColor"
                    data-name="Trazado 1492"
                    d="M864.847,98.319l6.892-17.635L860.354,51.595h-5.5L850.7,62.188Z"
                    transform="translate(-755.139 -51.595)"
                  />
                  <path
                    fill="currentColor"
                    data-name="Trazado 1493"
                    d="M868,73.733l8.654-22.138H859.333Z"
                    transform="translate(-748.68 -51.595)"
                  />
                  <path
                    fill="currentColor"
                    id="Trazado_1494"
                    data-name="Trazado 1494"
                    d="M852.1,61.625l-6.9,17.62,14.149,36.15,6.894-17.634Z"
                    transform="translate(-759.257 -44.086)"
                  />
                  <path
                    fill="currentColor"
                    data-name="Trazado 1495"
                    d="M848.367,143.532l6.894-17.634L841.1,89.722l-6.9,17.62Z"
                    transform="translate(-767.493 -23.052)"
                  />
                  <path
                    fill="currentColor"
                    data-name="Trazado 1496"
                    d="M860.042,142.83l0,.005-35.726-91.24H796.052l55.25,141.33h17.473l5.434-13.9Z"
                    transform="translate(-796.052 -51.595)"
                  />
                </svg>
              </g>
            )}
          </g>
        </svg>
      </div>

      <Menu
        redirect={redirect}
        toggleMenu={toggleMenu}
        setRedirect={setRedirect}
      />
    </>
  );
};
