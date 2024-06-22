
import Layout from "@/components/layout/Layout"
import Link from "next/link"

const blogImgStyle = {
    objectFit: "cover",
    aspectRatio: "12 / 9",
}

export default function BlogGrid() {

    return (
        <>

            <div>
                <div>
                    <section className="blog-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/ivs-crypto">
                                                <img src="/assets/images/events/ivs.webp" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/ivs-crypto"><i className="fa fa-folder-open" />Conference</Link></li></ul>
                                            <Link href="/blog-single/ivs-crypto" className="title h6">IVS Crypto 2024</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/wavehack-global">
                                                <img src="/assets/images/events/wavehackglobal.webp" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/wavehack-global"><i className="fa fa-folder-open" />WaveHack</Link></li></ul>
                                            <Link href="/blog-single/wavehack-global" className="title h6">WaveHack Global</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/wavehack-aptos">
                                                <img src="/assets/images/events/wavehack.png" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/wavehack-aptos"><i className="fa fa-folder-open" />WaveHack</Link></li></ul>
                                            <Link href="/blog-single/wavehack-aptos" className="title h6">Aptos Wave Hack</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/ivs-demo">
                                                <img src="/assets/images/events/ivs-demo.avif" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/ivs-demo"><i className="fa fa-folder-open" />Conference</Link></li></ul>
                                            <Link href="/blog-single/ivs-demo" className="title h6">IVS Demo Day</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/aptos-world-tour">
                                                <img src="/assets/images/events/aptosworldtour.avif" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/aptos-world-tour"><i className="fa fa-folder-open" />Conference</Link></li></ul>
                                            <Link href="/blog-single/aptos-world-tour" className="title h6">Aptos World Tour - Taipei</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/aptos-seoul-hack">
                                                <img src="/assets/images/events/seoul.avif" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/aptos-seoul-hack"><i className="fa fa-folder-open" />Hackathon</Link></li></ul>
                                            <Link href="/blog-single/aptos-seoul-hack" className="title h6">Aptos Seoul Hack</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="load-more center">
                                        <Link id="loadmore" className="btn-action" href="#">
                                            Discover More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Blog grid */}
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


            </div>
        </>
    )
}