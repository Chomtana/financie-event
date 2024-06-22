
'use client'
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

export default function Portfolio() {
    return (
        <>

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
                                <div className="item bg-2"><img src="/assets/images/items/item-21.png" alt="Image" /></div>
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
        </>
    )
}
