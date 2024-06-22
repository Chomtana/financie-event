

export default function Newsletter2() {
    return (
        <>

            <section className="tf-section newsletter" id="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="newsletter__body" data-aos="fade-up">
                                <div className="block-text">
                                    <h3 className="mb-13">Get Newsletter</h3>
                                    <p className="fs-21">
                                        Get udpated with news, tips &amp; tricks
                                    </p>
                                </div>
                                <form className="body__form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email here" required />
                                        <button type="submit" className="btn btn-primary">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
