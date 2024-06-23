
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
                    <section className="blog-grid" id="events">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/ivs-party">
                                                <img src="/assets/images/events/ivs-party.webp" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/ivs-party"><i className="fa fa-folder-open" />Party</Link></li></ul>
                                            <Link href="/blog-single/ivs-party" className="title h6">IVS VIP Exclusive Party</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 col-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link href="/blog-single/exclusive-party">
                                                <img src="/assets/images/events/exclusive-party.webp" alt="AI-Mint" style={blogImgStyle} />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link href="/blog-single/exclusive-party"><i className="fa fa-folder-open" />Party</Link></li></ul>
                                            <Link href="/blog-single/exclusive-party" className="title h6">FiNANCiE Exclusive Party</Link>
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
                                            <h3 className="mb-13">Download FiNANCiE App</h3>
                                            <p className="fs-21 mb-7">Web3時代におけるトークンプラットフォーム</p>
                                        </div>
                                        <Link href="https://financie.jp" target="_blank" className="btn-action style-2">Download</Link>
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