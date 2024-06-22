
import Link from "next/link"

export default function Montono2() {
    return (
        <>

            <section className="tf-section montono">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Collections</span></h1>
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
                                <img src="/assets/images/items/montono-02.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 1</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-01.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 2</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-05.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 3</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-04.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 4</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-06.png" alt="AI-Mint" />
                                <div className="image-box__title">
                                    <Link href="/collections" className="h6">AI-Mint item 5</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="image-box" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/items/montono-07.png" alt="AI-Mint" />
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
