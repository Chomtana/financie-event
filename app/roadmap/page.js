
'use client'
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions1 = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 1,
    },
    speed: 2000,
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 1,
        reverseDirection: true,
    },
    speed: 2000,
}

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Accordion1 from "@/components/elements/Accordion1"
export default function RoadMap() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Road Map" imgNum="group-ntf-01">

                <div>
                    <section className="tf-section road-map">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Road Map</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Road Map</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>The Journey of <br /> AI-Mint NFT</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="road-map__content s1">
                                        <div className="box-time left" data-aos="fade-right" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                            <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            <h5 className="title mb-20">Idea Generation</h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                        <div className="box-time right mt-223" data-aos="fade-up" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                            <p className="fs-16 color-main mb-0">March 30, 2022</p>
                                            <h5 className="title mb-20">Design &amp; Development</h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                        <div className="box-time left mt--23" data-aos="fade-right" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-circle" /></span>
                                            <p className="fs-16 color-main mb-0">April 20, 2022</p>
                                            <h5 className="title mb-20">Initial Release </h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                        <div className="box-time right mt-200" data-aos="fade-up" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-angle-down color2" /></span>
                                            <p className="fs-16 color-main mb-0">May 30, 2022</p>
                                            <h5 className="title mb-20">Result &amp; Final Report</h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                    </div>
                                    <div className="view-all center" data-aos="fade-up">
                                        <Link href="#" className="btn-action style-2">View Full</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Road Map */}
                    {/* Portfolio */}
                    <section className="tf-section portfolio">
                        <div className="container-fluid">
                            <Swiper {...swiperOptions1} className="swiper swiper-portfolio s1">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-17.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-18.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-19.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-20.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-21.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-22.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-23.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-22.png" alt="Image" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item bg-2"><img src="/assets/images/items/item-23.png" alt="Image" /></div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                        <div className="swiper swiper-portfolio s2">
                            {/* Additional required wrapper */}
                            <Swiper {...swiperOptions2} className="swiper-wrapper">
                                {/* Slides */}
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-21.png" alt="Image" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-22.png" alt="Image" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-23.png" alt="Image" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-24.png" alt="Image" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-25.png" alt="Image" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-17.png" alt="Image" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item bg-2"><img src="/assets/images/items/item-18.png" alt="Image" /></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                    {/* end Portfolio */}
                    {/* FAQ */}
                    <section className="tf-section faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>FAQ</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>FAQ</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Frequently Aksed <br /> Questions</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row flat-tabs" data-aos="fade-up">
                                <div className="col-md-4">
                                    <ul className="menu-tab">
                                        <li className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                            <span className="inner">Cryptocurrency</span>
                                        </li>
                                        <li className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)}>
                                            <span className="inner">NFT Token</span>
                                        </li>
                                        <li className={activeIndex === 3 ? "item-title active" : "item-title"} onClick={() => handleOnClick(3)}>
                                            <span className="inner">Collection</span>
                                        </li>
                                        <li className={activeIndex === 4 ? "item-title active" : "item-title"} onClick={() => handleOnClick(4)}>
                                            <span className="inner">Crypto Trading</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-8">
                                    <div className="content-tab">
                                        <div className="content-inner" style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                                            <Accordion1 />
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                                            <Accordion1 />
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                                            <Accordion1 />
                                        </div>
                                        <div className="content-inner" style={{ display: `${activeIndex == 4 ? "block" : "none"}` }}>
                                            <Accordion1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end FAQ */}
                    {/* Action */}
                    <section className="tf-section action">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="action__body" data-aos="fade-up">
                                        <div className="block-text">
                                            <h3 className="mb-13">Create Your NFT Portfolio</h3>
                                            <p className="fs-21 mb-7">Get udpated with news, tips &amp; tricks</p>
                                        </div>
                                        <Link href="/contact" className="btn-action style-2">Join Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}