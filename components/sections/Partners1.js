
import Link from "next/link"

export default function Partners1() {
    return (
        <>

            <section className="tf-section partners">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>Team</span></h1>
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Partners</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>We Are Partnered <br /> with
                                    Top Brands </h3>
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
        </>
    )
}
