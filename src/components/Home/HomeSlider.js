import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade } from "swiper";
import { arrowDown } from "../Common/Icons";

export const HomeSlider = ({ banner }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize")); // Swiper thingies
    }, 1000);
  }, []);

  return (
    <div className="home-slider">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        ref={swiperRef}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          autoplayDisableOnInteraction: false,
        }}
        observeParents={true}
        observer={true}
        className="home-slider_swiper"
      >
        {banner.map((slide, index) => {
          return (
            <SwiperSlide key={index} index={index}>
              <div className={`slide slide-1 ${slide.className}`}>
                <div
                  className="left-img"
                  style={{
                    backgroundImage: `url(${slide.imagen_IZQUIERDA.formats.medium.url})`,
                  }}
                >
                  <img className="top" src={slide.logo} alt="" />
                </div>
                <div className="text">
                  <div className="">
                  #VASSARNOSMUEVE
                  </div>
                </div>
                <div
                  className="right-img"
                  style={{
                    backgroundImage: `url(${slide.imagen_DERECHA.formats.medium.url})`,
                  }}
                >
                  {/* <img src={image1Right} alt="" /> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mobile-arrowDown">{arrowDown}</div>
    </div>
  );
};
