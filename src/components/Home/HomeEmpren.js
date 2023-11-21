import { useEffect, useRef, useState } from "react";
import { Button } from "../Common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

export const HomeEmpren = ({ emprendimientos }) => {
  const [speed, setSpeed] = useState(10000);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize")); // Swiper thingies
    }, 5000);
  }, []);

  return (
    <div className="home-emprendimientos">
      <div className="home-emprendimientos-contenedor">
        <div className="home-emprendimientos-contenedor-title">
          <div className="title-bg flex">
            <div >
              <h2>
                <span className="libre_font">Conoce nuestros</span> <br /> Emprendimientos
              </h2>

              <Link to="/emprendimientos">
                <Button>
                  <span>
                    Nuestros <strong>emprendimientos</strong>
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* ESTE SLIDER ES EL QUE SE VE EN MOBILE */}
          <div className="mobile-slider">
            <Swiper
              ref={swiperRef}
              loop={true}
              slidesPerView={"1"}
              centeredSlides={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                autoplayDisableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              observeParents={true}
              observer={true}
              className="home-emprendimientos_slider"
            >
              {emprendimientos.map((slide, index) => {
                return (
                  <SwiperSlide>
                    <Link to={slide.url}>
                      <div className="home-emprendimientos_slider_item ">
                        <div className="img">
                          <img src={slide.imagen.url} alt="" />
                        </div>

                        <span>{slide.nombre}</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div
          className="home-emprendimientos_slider_container desktop-slider"
          onMouseEnter={() => {
            setSpeed(10000);
          }}
          onMouseLeave={() => {
            setSpeed(10000);
          }}
        >
          <Swiper
            ref={swiperRef}
            loop={true}
            speed={speed}
            grabCursor={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              autoplayDisableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            observeParents={true}
            observer={true}
            className="home-emprendimientos_slider"
          >
            {emprendimientos.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to={slide.url}>
                    <div
                      className={`home-emprendimientos_slider_item bg-color_red ${slide.class_name}`}
                    >
                      <div className="img">
                        <img src={slide.imagen.url} alt="" />
                      </div>

                      <span>{slide.nombre}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
