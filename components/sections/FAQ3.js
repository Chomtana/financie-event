import Accordion1 from "../elements/Accordion1"


export default function FAQ3() {
    return (
        <>

            <section className="tf-section faq" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>FAQ</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>FAQ</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Frequently Aksed <br />
                                    Questions</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <Accordion1 />
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="group-image">
                                <img src="/assets/images/shape/faq.png" alt="AI-Mint" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
