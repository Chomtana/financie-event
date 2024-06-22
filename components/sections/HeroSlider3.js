
import Link from "next/link"
import CountDownTime from "../elements/CountDownTime"

export default function HeroSlider3() {
    return (
        <>

            <section className="tf-section hero-slider" id="hero-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12 col-12">
                            <div className="block-text pt-24">
                                <h6 className="sub-title mb-6" data-aos="fade-up">We are AI-Mint NFT</h6>
                                <h2 className="title mb-26" data-aos="fade-up">Collect Next Generation NFTs Today </h2>
                                <p className="desc mb-43" data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium </p>
                                <Link href="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>Get
                                    Connected</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12 col-12">
                            <div className="token-sale" data-aos="zoom-in" data-aos-duration={2000}>
                                <h5 className="fs-30">Token Sale Ends In</h5>
                                <CountDownTime />
                                <div className="tf-progress-bar">
                                    <div className="meter orange">
                                        <span data-progress={74} style={{ width: "74%" }} />
                                    </div>
                                    <div className="descrip">
                                        <h6 className="fs-14">$18.090<span>Pledget</span></h6>
                                        <h6 className="fs-16">$35.090<span>Goal</span></h6>
                                    </div>
                                </div>
                                <div className="button-action">
                                    <Link href="/contact" className="btn-action style-2">Purchase Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
