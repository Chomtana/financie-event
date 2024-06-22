
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogList() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog" imgNum="group-ntf-02">
                <div>
                    <section className="blog-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-md-12">
                                    <div className="blog-body">
                                        <div className="blog-box">
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-04.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="meta">
                                                    <li><Link href="/blog-single"><i className="fa fa-folder-open" />Cryptography</Link></li>
                                                    <li><Link href="#"><i className="fa fa-user" />John Doe</Link></li>
                                                    <li><Link href="#"><i className="fa fa-clock" />February 07, 2022</Link></li>
                                                </ul>
                                                <Link href="/blog-single" className="title fs-36">
                                                    When the musics over turn off the light
                                                </Link>
                                                <p className="fs-18 text">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex when the musics over turn off the light says jim morrison and doors. So close no matter how far whatis the best thing</p>
                                                <div className="action-group">
                                                    <Link href="#" className="btn-action style-2">Continue Reading</Link>
                                                    <div className="share">
                                                        <h6 className="fs-16">Share</h6>
                                                        <ul>
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-box">
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-05.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="meta">
                                                    <li><Link href="/blog-single"><i className="fa fa-folder-open" />Cryptography</Link></li>
                                                    <li><Link href="#"><i className="fa fa-user" />John Doe</Link></li>
                                                    <li><Link href="#"><i className="fa fa-clock" />February 07, 2022</Link></li>
                                                </ul>
                                                <Link href="/blog-single" className="title fs-36">
                                                    When the musics over turn off the light
                                                </Link>
                                                <p className="fs-18 text">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex when the musics over turn off the light says jim morrison and doors. So close no matter how far whatis the best thing</p>
                                                <div className="action-group">
                                                    <Link href="#" className="btn-action style-2">Continue Reading</Link>
                                                    <div className="share">
                                                        <h6 className="fs-16">Share</h6>
                                                        <ul>
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-box">
                                            <div className="blog-img">
                                                <Link href="/blog-single">
                                                    <img src="/assets/images/blog/blog-06.jpg" alt="AI-Mint" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="meta">
                                                    <li><Link href="/blog-single"><i className="fa fa-folder-open" />Cryptography</Link></li>
                                                    <li><Link href="#"><i className="fa fa-user" />John Doe</Link></li>
                                                    <li><Link href="#"><i className="fa fa-clock" />February 07, 2022</Link></li>
                                                </ul>
                                                <Link href="/blog-single" className="title fs-36">
                                                    When the musics over turn off the light
                                                </Link>
                                                <p className="fs-18 text">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex when the musics over turn off the light says jim morrison and doors. So close no matter how far whatis the best thing</p>
                                                <div className="action-group">
                                                    <Link href="#" className="btn-action style-2">Continue Reading</Link>
                                                    <div className="share">
                                                        <h6 className="fs-16">Share</h6>
                                                        <ul>
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination">
                                            <li className="active"><Link href="#">1</Link></li>
                                            <li><Link href="#">2</Link></li>
                                            <li><Link href="#">3</Link></li>
                                            <li><Link href="#"><i className="fa fa-angle-right" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-12">
                                    <div className="side-bar">
                                        <div className="side-bar__box">
                                            <h6 className="title">Search</h6>
                                            <div className="input-group">
                                                <div className="form-outline">
                                                    <input type="search" id="form1" className="form-control" placeholder="Type & hit enter" required />
                                                </div>
                                                <button type="button" className="btn btn-primary">
                                                    <i className="fas fa-search" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="side-bar__box">
                                            <h6 className="title">Recent Posts</h6>
                                            <ul className="recent">
                                                <li>
                                                    <Link href="/blog-single">
                                                        <img src="/assets/images/blog/blog-04.jpg" alt="AI-Mint" />
                                                    </Link>
                                                    <div className="info">
                                                        <Link href="/blog-single" className="fs-18">Buy your NFT today</Link>
                                                        <p className="fs-14">Feb 07</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link href="/blog-single">
                                                        <img src="/assets/images/blog/blog-05.jpg" alt="AI-Mint" />
                                                    </Link>
                                                    <div className="info">
                                                        <Link href="/blog-single" className="fs-18">How to make blockcahin</Link>
                                                        <p className="fs-14">Feb 07</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link href="/blog-single">
                                                        <img src="/assets/images/blog/blog-06.jpg" alt="AI-Mint" />
                                                    </Link>
                                                    <div className="info">
                                                        <Link href="/blog-single" className="fs-18">When the musics over </Link>
                                                        <p className="fs-14">Feb 07</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="side-bar__box">
                                            <h6 className="title">Categories</h6>
                                            <ul className="category">
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Cryptocurrency</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Block Chain</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Bit Coin</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Eatherium</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />NFT Market</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Buy Sale</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Online Trading</Link></li>
                                                <li><Link className="fs-18" href="#"><i className="fas fa-caret-right" />Crypto Trade</Link></li>
                                            </ul>
                                        </div>
                                        <div className="side-bar__box">
                                            <h6 className="title">Tags</h6>
                                            <ul className="tag">
                                                <li><Link className="fs-18" href="#">Crypto</Link></li>
                                                <li><Link className="fs-18" href="#">Blockchain</Link></li>
                                                <li><Link className="fs-18" href="#">NFT</Link></li>
                                                <li><Link className="fs-18" href="#">Ether</Link></li>
                                                <li><Link className="fs-18" href="#">Ico</Link></li>
                                                <li><Link className="fs-18" href="#">Ethereum</Link></li>
                                                <li><Link className="fs-18" href="#">Bitcoin</Link></li>
                                                <li><Link className="fs-18" href="#">NFT Trading</Link></li>
                                                <li><Link className="fs-18" href="#">Media</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Blog */}
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