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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="イベントに参加" breadcrumbDescription={title}>
                <div>
                    <section className="tf-section contact">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h1 className="heading-bg" data-aos="fade-in" data-aos-duration={1000}><span>JOIN</span></h1>
                                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>イベントに参加</h5>
                                        <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>情報を入力してください<br/></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-left">
                                        <ul>
                                            <li data-aos="fade-up">
                                                <div className="icon"><i className="fas fa-bookmark" /></div>
                                                <div className="info">
                                                    <h5>一度だけ入力</h5>
                                                    <p className="fs-18">このフォームに一度だけ入力すればOK</p>
                                                </div>
                                            </li>
                                            <li data-aos="fade-up">
                                                <div className="icon"><i className="fas fa-gift" /></div>
                                                <div className="info">
                                                    <h5>報酬をゲット</h5>
                                                    <p className="fs-18">POAPや他の報酬をオンチェーンで確認</p>
                                                </div>
                                            </li>
                                            <li data-aos="fade-up">
                                                <div className="icon"><i className="fas fa-users" /></div>
                                                <div className="info">
                                                    <h5>友達とシェア</h5>
                                                    <p className="fs-18">このイベントを友達に紹介しよう</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <form className="contact__form">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="First Name" required />
                                            <input className="form-control" type="text" placeholder="Last Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email" required />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your Twitter" required />
                                        </div>
                                        {/* <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your Telegram" required />
                                        </div> */}
                                        {/* <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Your message here" />
                                        </div> */}
                                        <Link href={`/success?title=${title}&id=${id}`} className="btn-action style-2"><span>Register</span></Link>
                                    </form>
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
                                            <h3 className="mb-13">まだ気になりますか？</h3>
                                            <p className="fs-21 mb-7">心配しないで、ボタンをクリックして戻り、詳しい情報を読んでください。</p>
                                        </div>
                                        <Link href={"/blog-single/" + id} className="btn-action style-2">Event Information</Link>
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