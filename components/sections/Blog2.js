
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

import Link from "next/link"

export default function Blog2() {
    return (
        <>

            <section className="tf-section blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Blog</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>From Our Blog</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Read Our Recent<br />News &amp;
                                    Articles</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-51">
                        <div className="col-12">
                            <div className="swiper swiper-blog">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="blog__box" data-aos="fade-up" data-aos-duration={800}>
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-01.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <Link href="/blog-single" className="category">NFT Trading</Link>
                                                <Link href="/blog-single" className="h6 title">How to buy and sale nft in a easiest
                                                    way</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blog__box" data-aos="fade-up" data-aos-duration={1200}>
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-02.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <Link href="/blog-single" className="category">NFT Trading</Link>
                                                <Link href="/blog-single" className="h6 title">How to buy and sale nft in a easiest
                                                    way</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blog__box" data-aos="fade-up" data-aos-duration={1600}>
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-03.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <Link href="/blog-single" className="category">NFT Trading</Link>
                                                <Link href="/blog-single" className="h6 title">How to buy and sale nft in a easiest
                                                    way</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blog__box" data-aos="fade-up" data-aos-duration={800}>
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-04.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <Link href="/blog-single" className="category">NFT Trading</Link>
                                                <Link href="/blog-single" className="h6 title">How to buy and sale nft in a easiest
                                                    way</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
