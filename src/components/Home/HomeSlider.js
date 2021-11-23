import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { EffectFade } from 'swiper';

import image1LeftT from '../../assets/slides/slide1Top.jpg'
import image1LeftB from '../../assets/slides/slide1Bottom.jpg'
import image1Right from '../../assets/1right.jpg'

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
                    pauseOnMouseEnter: true,
                }}
                observeParents={true}
                observer={true}
                className="home-slider_swiper"
            >
                <SwiperSlide>
                    <div className="slide slide-1">
                        <div className="left-img">
                            <img className="top" src={image1LeftT} alt="" />
                            <img className="bottom" src={image1LeftB} alt="" />
                        </div>
                        <div className="text">
                            <div className="">MOVIMIENTO CREATIVO</div>
                        </div>
                        <div className="right-img" style={{backgroundImage: `url(${image1Right})` }}>
                            {/* <img src={image1Right} alt="" /> */}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
