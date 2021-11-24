import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { EffectFade } from 'swiper';
import { mainSlides } from './mainSlides';

export const HomeSlider = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize')); // Swiper thingies
        }, 1000);
    }, [])

    return (
        <div className="home-slider">
            <Swiper
                modules={[EffectFade]} effect="fade"
                ref={swiperRef}
                loop={true}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    autoplayDisableOnInteraction: false,
                }}
                observeParents={true}
                observer={true}
                className="home-slider_swiper"
            >
                {
                    mainSlides.map((slide, index) => {
                        return (
                            <SwiperSlide index={index}>
                                <div className={`slide slide-1 ${slide.className}`}>
                                    <div className="left-img" style={{ backgroundImage: `url(${slide.leftImg})` }}>
                                        <img className="top" src={slide.logo} alt="" />
                                    </div>
                                    <div className="text">
                                        <div className="">{slide.text}</div>
                                    </div>
                                    <div className="right-img" style={{ backgroundImage: `url(${slide.rightImg})` }}>
                                        {/* <img src={image1Right} alt="" /> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}
