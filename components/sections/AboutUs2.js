
import Link from "next/link"

export default function AboutUs2() {
    return (
        <>

            <section className="tf-section section-about">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image">
                                <div className="left">
                                    <div className="item bg-1"><img src="/assets/images/items/item-08.png" alt="AI-Mint" /></div>
                                </div>
                                <div className="right">
                                    <div className="item bg-2"><img src="/assets/images/items/item-09.png" alt="AI-Mint" /></div>
                                    <div className="item bg-3"><img src="/assets/images/items/item-10.png" alt="AI-Mint" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>About Us</h5>
                                <h3 className="title mb-58" data-aos="fade-up" data-aos-duration={1000}>Hight Quality NFT
                                    Collections </h3>
                                <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration={1000}>Sed ut perspiciatis unde
                                    omnis iste natus enim ad minim veniam, quis nostrud exercit </p>
                                <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration={1000}>Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit
                                    anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat
                                </p>
                                <Link href="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>More
                                    About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
