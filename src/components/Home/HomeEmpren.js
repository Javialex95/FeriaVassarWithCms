import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Common/Button'
import { asteirsks } from '../Common/Icons'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Link } from 'react-router-dom'
import { homeEmprenSlides } from './slides';

SwiperCore.use([Autoplay]);

export const HomeEmpren = () => {
    const [speed, setSpeed] = useState(10000);
    const swiperRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize')); // Swiper thingies
        }, 1000);
    }, [])

    return (
        <div className="home-emprendimientos">

            <div className="home-emprendimientos-contenedor">

                <div className="home-emprendimientos-contenedor-title">

                    <h2>Emprendimientos</h2>

                    <div className="asterisks">
                        {asteirsks}
                    </div>

                    <p className="description">Descubre las marcas que hacen parte de esta gran comunidad.</p>
                    {/* ESTE SLIDER ES EL QUE SE VE EN MOBILE */}
                    <div className="mobile-slider">
                        <Swiper
                            ref={swiperRef}
                            loop={true}
                            slidesPerView={'1'}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                autoplayDisableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}

                            observeParents={true}
                            observer={true}
                            className="home-emprendimientos_slider"
                        >
                            {
                                homeEmprenSlides.map((slide, index) => {
                                    return (
                                        <Link to={slide.link}>
                                            <SwiperSlide>
                                                <div className="home-emprendimientos_slider_item ">
                                                    <div className="img">
                                                        <img src={slide.image} alt="" />
                                                    </div>

                                                    <span>{slide.title}</span>
                                                </div>
                                            </SwiperSlide>
                                        </Link>
                                    )
                                })
                            }

                        </Swiper>
                    </div>

                    <div className="home-emprendimientos_conoce">
                        <Link to="/emprendimientos">
                            <Button>
                                <span>Nuestros <strong>emprendimientos</strong></span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="home-emprendimientos_slider_container desktop-slider"
                    onMouseEnter={() => {
                        setSpeed(10000)
                    }}
                    onMouseLeave={() => {
                        setSpeed(10000)
                    }}
                >
                    <Swiper
                        ref={swiperRef}
                        loop={true}
                        speed={speed}
                        grabCursor={true}
                        slidesPerView={'auto'}
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
                        {
                            homeEmprenSlides.map((slide, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link to={slide.link}>
                                            <div className={`home-emprendimientos_slider_item bg-color_red ${slide.className}`}>
                                                <div className="img">
                                                    <img src={slide.image} alt="" />
                                                </div>

                                                <span>{slide.title}</span>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>

        </div>
    )
}
