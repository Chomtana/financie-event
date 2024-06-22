import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer__body">
                            <img src="/assets/images/aptoslogo.png" alt="AI-Mint" data-aos="fade-down" height={120} style={{ borderRadius: 200 }} />
                            <p className="desc fs-18" data-aos="fade-up">
                                Aptos Event helps onboard people to Web 3 through both online and offline crypto events.
                                Participants are rewarded with POAP and additional on-chain rewards.
                                These rewards are interoperable between the Aptos and Ethereum ecosystems, thanks to our Aptos ENS Gateway.
                            </p>
                            {/* <ul className="social">
                                <li data-aos="fade-up" data-aos-duration={1200}><Link href="#"><i className="fab fa-twitter" /></Link>
                                </li>
                            </ul> */}
                        </div>
                        <div className="footer_bottom">
                            <p className="fs-16">Copyright © {new Date().getFullYear()} Chomtana</p>
                            <ul>
                                <li><Link href="#">Akindo</Link></li>
                                <li><Link href="#">Demo</Link></li>
                                <li><Link href="#">GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
