
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
                                        <img src="/assets/images/blog/blog-single.jpg" alt="AI-Mint" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-9 col-md-12">
                                    <div className="blog-body">
                                        <div className="blog-content">
                                            <ul className="meta">
                                                <li><Link href="#"><i className="fa fa-folder-open" />Cryptography</Link></li>
                                                <li><Link href="#"><i className="fa fa-user" />John Doe</Link></li>
                                                <li><Link href="#"><i className="fa fa-clock" />February 07, 2022</Link></li>
                                            </ul>
                                            <h3 className="title">
                                                Complete guide to buy and sale NFT in a marketplace
                                            </h3>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore qui inim veniam, quis nostrud ex when the musics over turn off the light says jim morri son and doors. So close no matter how far whatis the best thing</p>
                                            <p className="fs-18 mt-28">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                            <blockquote>
                                                <p className="fs-21">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesci hoichioi saradin aranonde sultanab ibiana unt.
                                                </p>
                                                <div>
                                                    <Link href="#">Hosen Mahmdud,</Link>
                                                    <p>Markout Corporation</p> </div>
                                            </blockquote>
                                            <p className="fs-18 mt-42">
                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo luptatem.  Kritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                            </p>
                                            <div className="action-group">
                                                <div className="tag">
                                                    <ul className="tag">
                                                        <li><Link className="fs-18" href="#">Crypto</Link></li>
                                                        <li><Link className="fs-18" href="#">Blockchain</Link></li>
                                                        <li><Link className="fs-18" href="#">NFT</Link></li>
                                                    </ul>
                                                </div>
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
                                        <div className="blog-content related-post">
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
                                        <div className="blog-content comment-form">
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