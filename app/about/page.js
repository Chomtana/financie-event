
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">

                <div>
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
                                        <h3 className="title mb-58" data-aos="fade-up" data-aos-duration={1000}>High Quality NFT Collections</h3>
                                        <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration={1000}>Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quis nostrud exercit</p>
                                        <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration={1000}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                                        <Link href="/about" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>More About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end About Us */}
                    {/* Counter */}
                    <section className="tf-section counter">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter__body" data-aos="fade-down" data-aos-duration={1000}>
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed={1000} data-to={100} data-inviewport="yes"><CounterUp count={100} time={1} /></span>K
                                            </div>
                                            <h5 className="title">Registered User</h5>
                                        </div>
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed={1000} data-to={5} data-inviewport="yes"><CounterUp count={5} time={1} /></span>M
                                            </div>
                                            <h5 className="title">Total Assets</h5>
                                        </div>
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed={1000} data-to={10} data-inviewport="yes"><CounterUp count={10} time={1} /></span>B
                                            </div>
                                            <h5 className="title">Yearly Trading</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Counter */}
                    {/* Portfolio */}
                    <section className="tf-section porfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Join</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Join NFT Portfolio</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Become a AI-Mint <br /> Player Now</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-61">
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src="/assets/images/icon/wallet.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-16 color-main">Step 01</p>
                                            <Link href="#" className="h5">
                                                Connect Your Wallet
                                            </Link>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="icon">
                                            <img src="/assets/images/icon/shopping-cart.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-16 color-main">Step 02</p>
                                            <Link href="#" className="h5">
                                                Buy Your NFT
                                            </Link>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src="/assets/images/icon/folder.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-16 color-main">Step 03</p>
                                            <Link href="#" className="h5">
                                                Create Collection
                                            </Link>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="icon">
                                            <img src="/assets/images/icon/money-bag.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <p className="fs-16 color-main">Step 04</p>
                                            <Link href="#" className="h5">
                                                Sell Your NFT
                                            </Link>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met, conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Portfolio */}
                    {/* Team */}
                    <section className="tf-section team">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Team</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Team Members</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Our Amazing Team <br /> Members</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-48">
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-01.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">Mike Anderson</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-02.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">Paul Harrison</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={1600}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-03.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">Sarah Jenifer</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={2000}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-04.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">James Smith</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-team">
                                <div className="col-xl-4 col-md-6">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={1000}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-05.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">Paul Harrison</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-06.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">Sarah Jenifer</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12">
                                    <div className="team-box-2" data-aos="fade-up" data-aos-duration={1400}>
                                        <div className="img-team">
                                            <img src="/assets/images/team/team-07.jpg" alt="AI-Mint" />
                                            <div className="social">
                                                <p>
                                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                                    <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="team-info">
                                            <Link href="/team" className="h5">James Smith</Link>
                                            <p className="fs-16">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Team */}
                    {/* Partners */}
                    <section className="tf-section partners">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Team</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Partners</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>We Are Partnered <br /> with Top Brands </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="partners__body" data-aos="fade-up">
                                        <div className="box-partner border-r border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-01.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-02.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-03.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-b">
                                            <Link href="#"><img src="/assets/images/partners/logo-04.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r">
                                            <Link href="#"><img src="/assets/images/partners/logo-05.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r">
                                            <Link href="#"><img src="/assets/images/partners/logo-06.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner border-r">
                                            <Link href="#"><img src="/assets/images/partners/logo-07.png" alt="AI-Mint" /></Link>
                                        </div>
                                        <div className="box-partner">
                                            <Link href="#"><img src="/assets/images/partners/logo-08.png" alt="AI-Mint" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Partners */}
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