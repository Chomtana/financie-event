"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Contact() {
    const query = useSearchParams()
    const title = query.get('title')
    const id = query.get('id')

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Join Event" breadcrumbDescription={title}>
                <div>
                    <section className="tf-section contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Thank You</h5>
                                        <h3 className="title" data-aos="fade-up" data-aos-duration={1000}>You have successfully joined<br/>{title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end contact */}
                    {/* Map */}
                    {/* <section className="map">
                        <div className="container">
                            <div className="col-12">
                                <p data-aos="fade-up"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sT%C3%B2a%20nh%C3%A0%20Empire%20State!5e0!3m2!1svi!2s!4v1645507902092!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" /></p>
                            </div>
                        </div>
                    </section> */}
                    {/* end Map */}
                    {/* Action */}
                    <section className="tf-section action">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="action__body" data-aos="fade-up">
                                        <div className="block-text">
                                            <h3 className="mb-13">Discover More Event?</h3>
                                            <p className="fs-21 mb-7">Click the button to discover more event</p>
                                        </div>
                                        <Link href={"/"} className="btn-action style-2">Discover Now</Link>
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