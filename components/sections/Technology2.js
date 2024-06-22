
import Link from "next/link"

export default function Technology2() {
    return (
        <>

            <section className="tf-section technology" id="technology">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Technology</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>AI-Mint unique Technology
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-53">
                        <div className="col-xl-6 col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src="/assets/images/icon/database.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <Link href="#" className="h5">
                                                Safe Database
                                            </Link>
                                            <p className="fs-16">Aliquam erat volutpat. Fusce sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src="/assets/images/icon/lock.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <Link href="#" className="h5">
                                                Safe Database
                                            </Link>
                                            <p className="fs-16">Aliquam erat volutpat. Fusce sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src="/assets/images/icon/paymentt.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <Link href="#" className="h5">
                                                verify payment
                                            </Link>
                                            <p className="fs-16">Aliquam erat volutpat. Fusce sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-box bg-2" data-aos="fade-up">
                                        <div className="icon">
                                            <img src="/assets/images/icon/timestaps.png" alt="AI-Mint" />
                                        </div>
                                        <div className="content">
                                            <Link href="#" className="h5">
                                                Timestamp server
                                            </Link>
                                            <p className="fs-16">Aliquam erat volutpat. Fusce sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="group-image">
                                <img src="/assets/images/items/technology.png" alt="AI-Mint" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
