
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}

export default function Testimonial1() {
    return (
        <>

            <section className="tf-section testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Slider main container */}
                            <div className="swiper swiper-testimonials">
                                {/* Additional required wrapper */}
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    {/* Slides */}
                                    <SwiperSlide>
                                        <div className="testimonials-box">
                                            <div className="image" data-aos="fade-right">
                                                <img src="/assets/images/testimonial/testimonial-01.jpg" alt="AI-Mint" />
                                            </div>
                                            <div className="block-text ">
                                                <h5 className="sub-title mb-10">Testimonial</h5>
                                                <h3 className="title">What People Say </h3>
                                                <div className="message">
                                                    <img src="/assets/images/icon/left-quote.png" alt="AI-Mint" />
                                                    <div className="message-content" data-aos="fade-up" data-aos-duration={1000}>
                                                        <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo
                                                            consequat. Duis aute irure dolor in reprehen derit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla parinon proident, sunt in
                                                            culpa</p>
                                                        <div className="info">
                                                            <img src="/assets/images/testimonial/avt-01.png" alt="AI-Mint" />
                                                            <h6>Paul Harrison,</h6>
                                                            <p className="fs-16">Founder &amp; CEO</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box">
                                            <div className="image">
                                                <img src="/assets/images/testimonial/testimonial-01.jpg" alt="AI-Mint" />
                                            </div>
                                            <div className="block-text ">
                                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>
                                                    Testimonial</h5>
                                                <h3 className="title" data-aos="fade-up" data-aos-duration={1000}>What People Say
                                                </h3>
                                                <div className="message">
                                                    <img src="/assets/images/icon/left-quote.png" alt="AI-Mint" data-aos="fade-right" />
                                                    <div className="message-content" data-aos="fade-up" data-aos-duration={1000}>
                                                        <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo
                                                            consequat. Duis aute irure dolor in reprehen derit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla parinon proident, sunt in
                                                            culpa</p>
                                                        <div className="info">
                                                            <img src="/assets/images/testimonial/avt-01.png" alt="AI-Mint" />
                                                            <h6>Paul Harrison,</h6>
                                                            <p className="fs-16">Founder &amp; CEO</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonials-box">
                                            <div className="image">
                                                <img src="/assets/images/testimonial/testimonial-01.jpg" alt="AI-Mint" />
                                            </div>
                                            <div className="block-text ">
                                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>
                                                    Testimonial</h5>
                                                <h3 className="title" data-aos="fade-up" data-aos-duration={1000}>What People Say
                                                </h3>
                                                <div className="message">
                                                    <img src="/assets/images/icon/left-quote.png" alt="AI-Mint" data-aos="fade-right" />
                                                    <div className="message-content" data-aos="fade-up" data-aos-duration={1000}>
                                                        <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo
                                                            consequat. Duis aute irure dolor in reprehen derit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla parinon proident, sunt in
                                                            culpa</p>
                                                        <div className="info">
                                                            <img src="/assets/images/testimonial/avt-01.png" alt="AI-Mint" />
                                                            <h6>Paul Harrison,</h6>
                                                            <p className="fs-16">Founder &amp; CEO</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
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
