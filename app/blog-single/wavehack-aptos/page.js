
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogSingle() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="blog-single">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-img">
                                        <img src="/assets/images/events/wavehack.png" alt="AI-Mint" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-9 col-md-12">
                                    <div className="blog-body">
                                        <div className="blog-content">
                                            <ul className="meta">
                                                <li><Link href="#"><i className="fa fa-folder-open" />WaveHack</Link></li>
                                                <li><Link href="#"><i className="fa fa-clock" />April - August, 2024</Link></li>
                                            </ul>
                                            <h3 className="title">
                                                Aptos Wave Hack
                                            </h3>
                                            <p className="fs-18">Build products that represent the Aptos ecosystem through continuous product improvement on the Aptos blockchain.</p>
                                            <p className="fs-18 mt-28">Build your product on the Aptos blockchain and improve it for release to market through the Aptos WaveHack program. There are no restrictions on products that are already under development or developed from scratch. The program evaluates submitted products every two weeks. We will evaluate the ecosystem impact of the submitted product and the difference in progress from previous submissions and vote.</p>
                                            <ul className="fs-18 mt-28">
                                                <li style={{ listStyle: 'disc' }}>Deployment and continuous updates of products to the Aptos blockchain</li>
                                                <li style={{ listStyle: 'disc' }}>Optimize existing products to the Aptos ecosystem</li>
                                                <li style={{ listStyle: 'disc' }}>Updates for products under development on the Aptos network</li>
                                            </ul>
                                            <p className="fs-18 mt-28">This is not a one-time hackathon, but a program that evaluates updates every two weeks and distributes grants on an ongoing basis. The genre of the submitted product does not matter, so please improve the product you are building in each wave and submit it.</p>
                                            <p className="fs-18 mt-28">Submitted products will be evaluated and feedback will be available for each wave by the Aptos core team and community.</p>
                                            <p className="fs-18 mt-28">The development period for each wave will be 10 days, and the evaluation voting period from Aptos will be 4 days, and this will be done 10 times continuously as 1 wave. This is an open opportunity and anyone can submit a product to any wave, and there is no penalty for skipping it, so feel free to improve and submit your product at your own discretion. please.</p>

                                            <div className="action-group">
                                                <div className="tag">
                                                    <ul className="tag">
                                                        <li><Link className="fs-18" href="#">Aptos</Link></li>
                                                        <li><Link className="fs-18" href="#">WaveHack</Link></li>
                                                        <li><Link className="fs-18" href="#">Online</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-content related-post d-none">
                                            <div className="prev">
                                                <img src="/assets/images/blog/related.jpg" alt="AI-Mint" />
                                                <div className="action-right">
                                                    <Link href="#"><i className="fa fa-angle-double-left" />Previous Post</Link>
                                                    <div className="divider" />
                                                    <Link className="title" href="#">When the musics over turn off the light</Link>
                                                </div>
                                            </div>
                                            <div className="next">
                                                <img src="/assets/images/blog/related-1.jpg" alt="AI-Mint" />
                                                <div className="action-right">
                                                    <Link href="#">Next Post<i className="fa fa-angle-double-right" /></Link>
                                                    <div className="divider" />
                                                    <Link className="title" href="#">When the musics over turn off the light</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-content post">
                                            <img src="/assets/images/blog/avt.jpg" alt="AI-Mint" />
                                            <div className="post-right">
                                                <div className="info">
                                                    <Link href="#" className="h5">Jewel Khan</Link>
                                                    <ul className="social">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    </ul>
                                                </div>
                                                <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum </p>
                                                <Link className="btn-post" href="#">View All Posts <i className="fa fa-angle-double-right" /></Link>
                                            </div>
                                        </div>
                                        <div className="blog-content comment">
                                            <h3 className="fs-36">20 Comments</h3>
                                            <div className="comment-box mt-0">
                                                <img src="/assets/images/blog/avt1.jpg" alt="AI-Mint" />
                                                <div className="comment-right">
                                                    <div className="top">
                                                        <div className="info">
                                                            <h5>Johnson Doe</h5>
                                                            <p>February 07, 2021   04:42 pm</p>
                                                        </div>
                                                        <Link className="btn-action" href="#"><span>Reply</span></Link>
                                                    </div>
                                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum </p>
                                                </div>
                                            </div>
                                            <div className="comment-box">
                                                <img src="/assets/images/blog/avt2.jpg" alt="AI-Mint" />
                                                <div className="comment-right">
                                                    <div className="top">
                                                        <div className="info">
                                                            <h5>Johnson Doe</h5>
                                                            <p>February 07, 2021   04:42 pm</p>
                                                        </div>
                                                        <Link className="btn-action" href="#"><span>Reply</span></Link>
                                                    </div>
                                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum </p>
                                                </div>
                                            </div>
                                            <div className="comment-box rep">
                                                <img src="/assets/images/blog/avt3.jpg" alt="AI-Mint" />
                                                <div className="comment-right">
                                                    <div className="top">
                                                        <div className="info">
                                                            <h5>Johnson Doe</h5>
                                                            <p>February 07, 2021   04:42 pm</p>
                                                        </div>
                                                        <Link className="btn-action" href="#"><span>Reply</span></Link>
                                                    </div>
                                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod m, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum </p>
                                                </div>
                                            </div>
                                            <div className="comment-box">
                                                <img src="/assets/images/blog/avt2.jpg" alt="AI-Mint" />
                                                <div className="comment-right">
                                                    <div className="top">
                                                        <div className="info">
                                                            <h5>Johnson Doe</h5>
                                                            <p>February 07, 2021   04:42 pm</p>
                                                        </div>
                                                        <Link className="btn-action" href="#"><span>Reply</span></Link>
                                                    </div>
                                                    <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor ui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and do nderit in voluptate velit esse cillum </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-content comment-form d-none">
                                            <h3 className="fs-36">Add A Comment</h3>
                                            <form className="comment__form">
                                                <div className="form-group">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Your comment here" />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Your name" required />
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email" required />
                                                    <input className="form-control mr-0" type="text" placeholder="Your website" required />
                                                </div>
                                                <button type="submit" className="btn-action style-2"><span>Send Now</span></button>
                                            </form>
                                        </div>
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
                                                    <Link href="/blog-single"><img src="/assets/images/blog/blog-04.jpg" alt="AI-Mint" /></Link>
                                                    <div className="info">
                                                        <Link href="/blog-single" className="fs-18">Buy your NFT today</Link>
                                                        <p className="fs-14">Feb 07</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link href="/blog-single"><img src="/assets/images/blog/blog-05.jpg" alt="AI-Mint" /></Link>
                                                    <div className="info">
                                                        <Link href="/blog-single" className="fs-18">How to make blockcahin</Link>
                                                        <p className="fs-14">Feb 07</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link href="/blog-single"><img src="/assets/images/blog/blog-06.jpg" alt="AI-Mint" /></Link>
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
                    {/* end Blog single */}
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