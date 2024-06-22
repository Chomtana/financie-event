
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function OurMission() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Visions & Mission" imgNum="group-ntf-03">
                <div>
                    <section className="tf-section visions">
                        <div className="container">
                            <div className="row reverse">
                                <div className="col-xl-7 col-md-12">
                                    <div className="group-image" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                                        <img src="/assets/images/pages/our-mission.png" alt="AI-Mint" />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-md-12">
                                    <div className="block-text pt-12">
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Our Visions</h5>
                                        <h3 className="title mb-37" data-aos="fade-up" data-aos-duration={1000}>Build Strong NFT Portfolio Community </h3>
                                        <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration={1000}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse </p>
                                        <Link href="#" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Visions */}
                    {/* Mission */}
                    <section className="tf-section missions">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-md-12">
                                    <div className="block-text pt-12">
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Our Mission</h5>
                                        <h3 className="title mb-37" data-aos="fade-up" data-aos-duration={1000}>Change The Way People Trade NFT </h3>
                                        <p className="fs-18 mb-29" data-aos="fade-up" data-aos-duration={1000}>
                                        Experience the future of NFT creation with AI-Mint. Whether you're an artist, a collector, or just curious, our platform is the perfect place to explore the limitless possibilities of generative AI.</p>
                                        <ul data-aos="fade-up" data-aos-duration={1000}>
                                            <li><i className="fa fa-check" /><p className="fs-18">Excepteur sint occae cat cupidatat non proident sunt in culpa qui officia </p></li>
                                            <li><i className="fa fa-check" /><p className="fs-18">Bnon proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse</p></li>
                                            <li><i className="fa fa-check" /><p className="fs-18">Dese runt mollit anim id est laborum velit esse </p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-12">
                                    <div className="group-image" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                                        <img src="/assets/images/pages/our-vission.png" alt="AI-Mint" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Mission */}
                    {/* Road Map */}
                    <section className="tf-section road-map">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Road Map</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Road Map</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>The Journey of <br /> AI-Mint NFT</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="road-map__content s1">
                                        <div className="box-time left" data-aos="fade-right" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                            <p className="fs-16 color-main mb-0">February 01, 2022</p>
                                            <h5 className="title mb-20">Idea Generation</h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                        <div className="box-time right mt-223" data-aos="fade-up" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                            <p className="fs-16 color-main mb-0">March 30, 2022</p>
                                            <h5 className="title mb-20">Design &amp; Development</h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                        <div className="box-time left mt--23" data-aos="fade-right" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-circle" /></span>
                                            <p className="fs-16 color-main mb-0">April 20, 2022</p>
                                            <h5 className="title mb-20">Initial Release </h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                        <div className="box-time right mt-200" data-aos="fade-up" data-aos-offset={300}>
                                            <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-angle-down color2" /></span>
                                            <p className="fs-16 color-main mb-0">May 30, 2022</p>
                                            <h5 className="title mb-20">Result &amp; Final Report</h5>
                                            <p className="fs-18">Oficia dese runt mollit anim id est labo met conse ctetur adipi smod tempor inc ididunt ut labore et dolore quis </p>
                                        </div>
                                    </div>
                                    <div className="view-all center" data-aos="fade-up">
                                        <Link href="#" className="btn-action style-2">View Full</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end Road Map */}
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