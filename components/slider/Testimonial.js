'use client';

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        },
        {
            img: "4.webp",
        },
        {
            img: "5.webp",
        },
    ];

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide">
                        <div className="card-testimonial-grid">
                            <div className="box-author mb-10">
                                <a href="#">
                                    <img src="assets/imgs/page/homepage1/author.png" alt="iori" />
                                </a>
                                <div className="author-info">
                                    <a href="#">
                                        <span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span>
                                    </a>
                                    <span className="font-xs color-grey-500 department">Bank of America</span>
                                </div>
                            </div>
                            <p className="font-md color-grey-500">Muniwar Technologies helped us scale donor acquisition while improving transparency and ROI across our campaigns</p>
                            <div className="card-bottom-info">
                                <span className="font-xs color-grey-500 date-post">29 November 2026</span>
                                <div className="rating text-end">
                                    <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                    <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                    <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                    <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                    <img src="assets/imgs/template/icons/star.svg" alt="iori" />
                                </div>
                            </div>
                        </div>                       
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Testimonial;
