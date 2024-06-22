'use client'
import { Tilt } from 'react-tilt'
import Link from "next/link"
const options = {
	max:            25,  
    scale:          1,
	speed:          400,  
}

export default function Speciality1() {
    return (
        <>

            <section className="tf-section section-speciality">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-128 pd-0">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Our Speciality</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>Elevate Your NFT Experience with AI-Mint</h3>
                                <p className="fs-21" data-aos="fade-up" data-aos-duration={1000}>AI-Mint offers a comprehensive suite of AI-driven solutions to revolutionize your NFT journey.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="section-speciality__box">
                                <Tilt options={options} className="box-item bg-2 mr-28" data-aos="flip-left">
                                    <h3>01</h3>
                                    <Link href="/collections" className="h5">AI-Powered Art</Link>
                                    <p>Instant Creativity: Transform text prompts into stunning digital artworks.</p>
                                </Tilt>
                                <Tilt options={options} className="box-item bg-2 mt-45" data-aos="flip-right" data-aos-duration={1000}>
                                    <h3>02</h3>
                                    <Link href="/collections" className="h5">Seamless NFT Minting</Link>
                                    <p>Mint AI-generated artwork as NFTs with a few clicks.</p>
                                </Tilt>
                                <Tilt options={options} className="box-item bg-2 mr-28 mt--16" data-aos="flip-left">
                                    <h3>03</h3>
                                    <Link href="/collections" className="h5">Advanced Tools</Link>
                                    <p>Fine-tune AI-generated art to match your vision.</p>
                                </Tilt>
                                <Tilt options={options} className="box-item bg-2 mt-29" data-aos="flip-right" data-aos-duration={1000}>
                                    <h3>04</h3>
                                    <Link href="/collections" className="h5">Marketplace Integration</Link>
                                    <p>Track NFT performance with detailed analytics.</p>
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
