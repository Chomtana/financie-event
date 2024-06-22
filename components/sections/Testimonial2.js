
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    pagination: {
        el: ".abc2",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
}

export default function Testimonial2() {
    return (
        <>

            <section className="tf-section testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Testimonial</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Testimonial</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>What People Say <br /> About
                                    us</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial__content style-2">
                                <div className="swiper swiper-testimonial2">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote.png" alt="AI-Mint" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons
                                                    equat. Duis aute irure dolor in reprehen derit in voluptate velit esse
                                                    cillum dolore eu fu giat nulla parinon proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-02.png" alt="AI-Mint" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote.png" alt="AI-Mint" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons
                                                    equat. Duis aute irure dolor in reprehen derit in voluptate velit esse
                                                    cillum dolore eu fu giat nulla parinon proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-03.png" alt="AI-Mint" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote.png" alt="AI-Mint" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons
                                                    equat. Duis aute irure dolor in reprehen derit in voluptate velit esse
                                                    cillum dolore eu fu giat nulla parinon proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-04.png" alt="AI-Mint" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote.png" alt="AI-Mint" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons
                                                    equat. Duis aute irure dolor in reprehen derit in voluptate velit esse
                                                    cillum dolore eu fu giat nulla parinon proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-02.png" alt="AI-Mint" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote.png" alt="AI-Mint" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons
                                                    equat. Duis aute irure dolor in reprehen derit in voluptate velit esse
                                                    cillum dolore eu fu giat nulla parinon proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-03.png" alt="AI-Mint" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-pagination abc2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
