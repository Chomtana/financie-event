'use client'
import { useState } from "react"
import Accordion1 from "../elements/Accordion1"


export default function FAQ2() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="tf-section faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>FAQ</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>FAQ</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Frequently Aksed <br />
                                    Questions</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="flat-tabs" data-aos="fade-up" data-aos-duration={800}>
                                <div className="col-md-4 col-12">
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
                                <div className="col-md-8 col-12">
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
                    </div>
                </div>
            </section>
        </>
    )
}
