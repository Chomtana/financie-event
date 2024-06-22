
import Link from "next/link"

export default function HeroSlider2() {
    return (
        <>

            <section className="tf-section hero-slider style-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text pt-24 center">
                                <h6 className="sub-title mb-6" data-aos="fade-up">We are AI-Mint NFT</h6>
                                <h2 className="title mb-26" data-aos="fade-up">Most Popular NFT <br /> Collections</h2>
                                <p className="desc mb-53" data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error sit
                                    vol<br />uptatem accusantium </p>
                                <Link href="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>Get
                                    Connected</Link>
                                <div className="shape">
                                    <div className="item bg-1"><img src="/assets/images/items/item-11.png" alt="Image" /></div>
                                    <div className="item bg-2"><img src="/assets/images/items/item-12.png" alt="Image" /></div>
                                    <div className="item bg-1"><img src="/assets/images/items/item-13.png" alt="Image" /></div>
                                    <div className="item bg-1"><img src="/assets/images/items/item-14.png" alt="Image" /></div>
                                    <div className="item bg-2"><img src="/assets/images/items/item-06.png" alt="Image" /></div>
                                    <div className="item bg-2"><img src="/assets/images/items/item-15.png" alt="Image" /></div>
                                    <div className="item bg-1"><img src="/assets/images/items/item-16.png" alt="Image" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
