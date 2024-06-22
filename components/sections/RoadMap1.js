
import Link from "next/link"

export default function RoadMap1() {
    return (
        <>

            <section className="tf-section road-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Road Map</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Road Map</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>The Journey of <br /> AI-Mint
                                    NFT</h3>
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
                                    <p className="fs-16 color-main mb-0">February 01, 2024</p>
                                    <h5 className="title mb-20">Concept Development</h5>
                                    <p className="fs-18">Research & Planning: Conduct market research and define project goals.
Team Formation: Assemble a skilled team of AI developers, blockchain experts, and designers.</p>
                                </div>
                                <div className="box-time right mt-223" data-aos="fade-up" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-check" /></span>
                                    <p className="fs-16 color-main mb-0">May 30, 2024</p>
                                    <h5 className="title mb-20">Platform Development</h5>
                                    <p className="fs-18">AI Integration: Implement advanced generative AI algorithms for art creation.
Blockchain Integration: Set up secure blockchain infrastructure for minting and ownership verification. </p>
                                </div>
                                <div className="box-time left mt--23" data-aos="fade-right" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-circle" /></span>
                                    <p className="fs-16 color-main mb-0">August 20, 2024</p>
                                    <h5 className="title mb-20">Beta Launch</h5>
                                    <p className="fs-18">Beta Testing: Invite early users to test the platform and provide feedback.
UI/UX Improvements: Refine the user interface and experience based on beta user feedback.</p>
                                </div>
                                <div className="box-time right mt-200" data-aos="fade-up" data-aos-offset={300}>
                                    <span data-aos="zoom-in" data-aos-offset={300}><i className="fa fa-angle-down color2" /></span>
                                    <p className="fs-16 color-main mb-0">Nov 30, 2024</p>
                                    <h5 className="title mb-20">Official Launch</h5>
                                    <p className="fs-18">Public Release: Launch AI-Mint to the public with full features.
Marketing Campaign: Initiate a comprehensive marketing campaign to attract users.</p>
                                </div>
                            </div>
                            <div className="view-all center" data-aos="fade-up">
                                <Link href="#" className="btn-action style-2">View Full</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
