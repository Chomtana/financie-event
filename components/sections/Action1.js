
import Link from "next/link"

export default function Action1() {
    return (
        <>

            <section className="tf-section action">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="action__body" data-aos="fade-up">
                                <div className="block-text">
                                    <h3 className="mb-13">Create Your NFT Today</h3>
                                    <p className="fs-21 mb-7">Join AI-Mint Now and Start Creating!</p>
                                </div>
                                <Link href="/" className="btn-action style-2">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
