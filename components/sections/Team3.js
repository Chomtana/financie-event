'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    pagination: {
        el: ".abc1",
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

export default function Team3() {
    return (
        <>

            <section className="tf-section team" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Team</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Team Members</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Our Amazing Team <br />
                                    Members</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-53">
                        <div className="col-md-12">
                            <div className="swiper swiper-team" data-aos="fade-up">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="team-box">
                                            <div className="img-team">
                                                <img src="/assets/images/team/team-01.jpg" alt="AI-Mint" />
                                                <div className="social">
                                                    <p>
                                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                                        <Link href="#"><i className="fab fa-telegram" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="team-info">
                                                <Link href="/team" className="h5">Mike Anderson</Link>
                                                <p className="fs-16">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="team-box">
                                            <div className="img-team">
                                                <img src="/assets/images/team/team-02.jpg" alt="AI-Mint" />
                                                <div className="social">
                                                    <p>
                                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                                        <Link href="#"><i className="fab fa-telegram" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="team-info">
                                                <Link href="/team" className="h5">Paul Harrison</Link>
                                                <p className="fs-16">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="team-box">
                                            <div className="img-team">
                                                <img src="/assets/images/team/team-03.jpg" alt="AI-Mint" />
                                                <div className="social">
                                                    <p>
                                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                                        <Link href="#"><i className="fab fa-telegram" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="team-info">
                                                <Link href="/team" className="h5">Sarah Jenifer</Link>
                                                <p className="fs-16">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="team-box">
                                            <div className="img-team">
                                                <img src="/assets/images/team/team-04.jpg" alt="AI-Mint" />
                                                <div className="social">
                                                    <p>
                                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                                        <Link href="#"><i className="fab fa-telegram" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="team-info">
                                                <Link href="/team" className="h5">James Smith</Link>
                                                <p className="fs-16">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="team-box">
                                            <div className="img-team">
                                                <img src="/assets/images/team/team-01.jpg" alt="AI-Mint" />
                                                <div className="social">
                                                    <p>
                                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                                        <Link href="#"><i className="fab fa-telegram" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="team-info">
                                                <Link href="/team" className="h5">Mike Anderson</Link>
                                                <p className="fs-16">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="team-box">
                                            <div className="img-team">
                                                <img src="/assets/images/team/team-02.jpg" alt="AI-Mint" />
                                                <div className="social">
                                                    <p>
                                                        <Link href="#"><i className="fab fa-facebook-square" /></Link>
                                                        <Link href="#"><i className="fab fa-twitter-square" /></Link>
                                                        <Link href="#"><i className="fab fa-telegram" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="team-info">
                                                <Link href="/team" className="h5">Paul Harrison</Link>
                                                <p className="fs-16">Founder &amp; CEO</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-pagination abc1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
