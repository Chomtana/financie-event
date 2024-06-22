
import Link from "next/link"

export default function AboutUs1() {
    return (
        <>

            <section className="tf-section section-about">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image">
                                <div className="left">
                                    <div className="item"><img src="/assets/images/items/item-18.jpeg" alt="AI-Mint" style={{ 
                                                        width: 270,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        borderWidth: 1,
                                                    }} /></div>
                                </div>
                                <div className="right">
                                    <div className="item"><img src="/assets/images/items/item-19.jpeg" alt="AI-Mint" style={{ 
                                                        width: 270,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        borderWidth: 1,
                                                    }}/></div>
                                    <div className="item"><img src="/assets/images/items/item-20.jpeg" alt="AI-Mint" style={{ 
                                                        width: 270,
                                                        height: 320,
                                                        borderRadius: 10,
                                                        overflow: "hidden",
                                                        borderWidth: 1,
                                                    }}/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>About Us</h5>
                                <h3 className="title mb-58" data-aos="fade-up" data-aos-duration={1000}>High Quality NFT Collections Powered by AI</h3>
                                <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration={1000}>Discover the Future of Digital Art with AI-Mint </p>
                                <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration={1000}>At AI-Mint, we are redefining the boundaries of digital art creation. Our platform leverages the power of generative AI to produce high-quality, unique NFT collections that captivate and inspire. Each piece is a testament to the synergy between human creativity and advanced technology, offering unparalleled depth and originality.
                                </p>
                                <Link href="#" className="btn-action style-2" data-aos="fade-up" data-aos-duration={1200}>More
                                    About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
