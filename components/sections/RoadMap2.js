
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}

export default function RoadMap2() {
    return (
        <>

            <section className="tf-section road-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Road Map</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Road Map</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>The Journey of NFT <br />
                                    Portfolio </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="road-map__content style-2">
                                <div className="swiper swiper-road-map">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="swiper-box top">
                                                <div className="box-time" data-aos="fade-down">
                                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                                    <h5 className="title mb-20">Idea Generation</h5>
                                                    <p className="fs-18">Oficia dese runt molit anim iesod est labo met conse ctetur
                                                        adipi</p>
                                                </div>
                                                <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-box bottom">
                                                <div className="box-time" data-aos="fade-up">
                                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                                    <h5 className="title mb-20">Research</h5>
                                                    <p className="fs-18">Oficia dese runt molit anim iesod est labo met conse ctetur
                                                        adipi</p>
                                                </div>
                                                <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-box top">
                                                <div className="box-time" data-aos="fade-down">
                                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-circle" /></span>
                                                    <h5 className="title mb-20">Development</h5>
                                                    <p className="fs-18">Oficia dese runt molit anim iesod est labo met conse ctetur
                                                        adipi</p>
                                                </div>
                                                <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-box bottom">
                                                <div className="box-time" data-aos="fade-up">
                                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-angle-right color2" /></span>
                                                    <h5 className="title mb-20">Result</h5>
                                                    <p className="fs-18">Oficia dese runt molit anim iesod est labo met conse ctetur
                                                        adipi</p>
                                                </div>
                                                <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-box top">
                                                <div className="box-time">
                                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                                    <h5 className="title mb-20">Idea Generation</h5>
                                                    <p className="fs-18">Oficia dese runt molit anim iesod est labo met conse ctetur
                                                        adipi</p>
                                                </div>
                                                <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                {/* If we need pagination */}
                                <div className="swiper-pagination" />
                                {/* If we need navigation buttons */}
                                <div className="swiper-button-prev" />
                                <div className="swiper-button-next" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
