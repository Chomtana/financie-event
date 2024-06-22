
import Link from "next/link"

export default function Infomation2() {
    return (
        <>

            <section className="tf-section section-info" id="info">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Token Information</h5>
                                <h3 className="title mb-26" data-aos="fade-up" data-aos-duration={1000}>Here’s what you need to know
                                    about NFT </h3>
                                <p className="fs-21 mb-50" data-aos="fade-up" data-aos-duration={1000}>Sed ut perspiciatis unde
                                    omnis iste natus enim ad minim veniam, quis nostrud exercit </p>
                                <Link href="/contact" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>Buy Token</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="box-info" data-aos="zoom-in" data-aos-duration={2000}>
                                <ul>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/user.png" alt="AI-Mint" /> Name :</h5>
                                        <p className="fs-16">Al Mahmud</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/box.png" alt="AI-Mint" />Flatform :</h5>
                                        <p className="fs-16">AI-Mint</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/box.png" alt="AI-Mint" />Total Supply :
                                        </h5>
                                        <p className="fs-16">100'000tokens</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/box.png" alt="AI-Mint" />ICO supply :</h5>
                                        <p className="fs-16">60'000 tokens</p>
                                    </li>
                                    <li>
                                        <h5 className="fs-18"><img src="/assets/images/icon/payment.png" alt="AI-Mint" />Token Price :
                                        </h5>
                                        <p className="fs-16">0.25€ / 0.29 USD</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
