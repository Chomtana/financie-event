'use client'
import { Tilt } from 'react-tilt'
import Link from "next/link"
const options = {
	max:            25,  
    scale:          1,
	speed:          400,  
}
export default function Speciality() {
    return (
        <>

            <section className="tf-section section-speciality">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-12">
                            <Tilt options={options} className="box-item bg-2" data-aos="fade-up" data-aos-duration={800}>
                                <img src="/assets/images/icon/hosting.png" alt="AI-Mint" />
                                <Link href="/collections" className="h5">Huge Collection</Link>
                                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                            </Tilt>
                        </div>
                        <div className="col-xl-3 col-md-6 col-12">
                            <Tilt options={options} className="box-item bg-2 s2" data-aos="fade-up" data-aos-duration={1000}>
                                <img src="/assets/images/icon/provision.png" alt="AI-Mint" />
                                <Link href="/collections" className="h5">Top Resource</Link>
                                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                            </Tilt>
                        </div>
                        <div className="col-xl-3 col-md-6 col-12" data-aos="fade-up" data-aos-duration={1200}>
                            <Tilt options={options} className="box-item bg-2 s2-m">
                                <img src="/assets/images/icon/badge.png" alt="AI-Mint" />
                                <Link href="/collections" className="h5">High Quality</Link>
                                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                            </Tilt>
                        </div>
                        <div className="col-xl-3 col-md-6 col-12" data-aos="fade-up" data-aos-duration={1400}>
                            <Tilt options={options} className="box-item bg-2 s2">
                                <img src="/assets/images/icon/chat.png" alt="AI-Mint" />
                                <Link href="/collections" className="h5">Big Community</Link>
                                <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
