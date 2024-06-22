
import Link from "next/link"

export default function Montono3() {
    return (
        <>

            <section className="tf-section montono" id="portfolio">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>NFT Portfolio
                                    Collections</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Checkout Our NFT<br />
                                    Collections</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-52">
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-09.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 1</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-10.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 2</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-11.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 3</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-12.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 4</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-13.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 5</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-14.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 6</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="view-all center">
                                <Link className="btn-action" href="/collections">
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
