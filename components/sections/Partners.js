
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
}

import Link from "next/link"

export default function Partners() {
    return (
        <>

            <section className="tf-section partners">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="partners__body style-2" data-aos="fade-up" data-aos-duration="800">
                                {/* Slider main container */}
                                <div className="swiper swiper-partner">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="box-partner">
                                                <Link href="#"><img src="/assets/images/partners/logo-01.png" alt="AI-Mint" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-partner">
                                                <Link href="#"><img src="/assets/images/partners/logo-02.png" alt="AI-Mint" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-partner">
                                                <Link href="#"><img src="/assets/images/partners/logo-03.png" alt="AI-Mint" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-partner">
                                                <Link href="#"><img src="/assets/images/partners/logo-04.png" alt="AI-Mint" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-partner">
                                                <Link href="#"><img src="/assets/images/partners/logo-05.png" alt="AI-Mint" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-partner">
                                                <Link href="#"><img src="/assets/images/partners/logo-06.png" alt="AI-Mint" /></Link>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
