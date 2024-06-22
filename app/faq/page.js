'use client'
import { useState } from "react"
import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ" imgNum="group-ntf-02">
                <div>
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
                            <div className="row flat-tabs">
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
                    {/* Partners */}
                    <section className="tf-section partners">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Team</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Partners</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>We Are Partnered <br /> with Top Brands </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="partners__body" data-aos="fade-up">
                                        <div className="box-partner border-r border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-01.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-02.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-03.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-04.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r">
                                            <Link href="#"><img src="/assets/images/partners/logo-05.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r">
                                            <Link href="#"><img src="/assets/images/partners/logo-06.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r">
                                            <Link href="#"><img src="/assets/images/partners/logo-07.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner">
                                            <Link href="#"><img src="/assets/images/partners/logo-08.png" alt="AI-Mint" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Partners */}
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