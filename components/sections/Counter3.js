import CounterUp from "../elements/CounterUp"


export default function Counter3() {
    return (
        <>

            <section className="tf-section section-counter" id="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="counter__body" data-aos="fade-down" data-aos-duration={1000}>
                                <div className="counter">
                                    <img src="/assets/images/icon/users.png" alt="" />
                                    <div className="number-counter">
                                        <span className="number" data-speed={1000} data-to={100} data-inviewport="yes"><CounterUp count={100} time={1} /></span>K
                                    </div>
                                    <h5 className="title">Registered User</h5>
                                </div>
                                <div className="counter">
                                    <img src="/assets/images/icon/assets.png" alt="" />
                                    <div className="number-counter">
                                        <span className="number" data-speed={1000} data-to={5} data-inviewport="yes"><CounterUp count={5} time={1} /></span>M
                                    </div>
                                    <h5 className="title">Total Assets</h5>
                                </div>
                                <div className="counter">
                                    <img src="/assets/images/icon/trading.png" alt="" />
                                    <div className="number-counter">
                                        <span className="number" data-speed={1000} data-to={10} data-inviewport="yes"><CounterUp count={10} time={1} /></span>B
                                    </div>
                                    <h5 className="title">Yearly Trading</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
