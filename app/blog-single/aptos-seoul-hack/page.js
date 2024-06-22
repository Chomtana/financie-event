
import EventSidebar from "@/components/event/EventSidebar"
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
                                        <img src="/assets/images/events/seoul.avif" alt="AI-Mint" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-9 col-md-12">
                                    <div className="blog-body">
                                        <div className="blog-content">
                                            <ul className="meta">
                                                <li><Link href="#"><i className="fa fa-folder-open" />Hackathon</Link></li>
                                                <li><Link href="#"><i className="fa fa-clock" />February 01, 2023 - February 05, 2023</Link></li>
                                            </ul>
                                            <h3 className="title">
                                                Aptos Seoul Hack
                                            </h3>
                                            <p className="fs-18">The Aptos Seoul Hack will be in-person only with participation by core Aptos engineers. There will be three days of hacking and demos with a party to cap the week on Friday evening! Themes include Gaming, NFTs, DeFi, Tooling and Infrastructure with prizes for winning teams in each track.</p>
                                            <p className="fs-18 mt-28">Anyone interested in learning more about or building on top of Move and Aptos is encouraged to attend! There will be core members of the Aptos technical team in attendance that speak both English and Korean.</p>
                                            <p className="fs-18 mt-28">The hackathon will begin on February 1st at 9:00AM and will complete in the afternoon of February 3rd.</p>
 
                                            <div className="action-group">
                                                <div className="tag">
                                                    <ul className="tag">
                                                        <li><Link className="fs-18" href="#">Aptos</Link></li>
                                                        <li><Link className="fs-18" href="#">Hackathon</Link></li>
                                                        <li><Link className="fs-18" href="#">Korea</Link></li>
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
                                        <div className="blog-content post d-none">
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
                                        <div className="blog-content comment d-none">
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
                                    <EventSidebar
                                        title="Aptos Seoul Hack"
                                        id="aptos-seoul-hack"
                                    ></EventSidebar>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Blog single */}
                    {/* Action */}
                    {/* <section className="tf-section action">
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
                    </section> */}
                </div>


            </Layout>
        </>
    )
}