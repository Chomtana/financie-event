import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer__body">
                            <img src="/assets/images/logo_aimint.png" alt="AI-Mint" data-aos="fade-down" height={100} />
                            <p className="desc fs-18" data-aos="fade-up">
                                Experience the future of NFT creation with AI-Mint. Whether you're an artist, a collector, or just curious, our platform is the perfect place to explore the limitless possibilities of generative AI.
                            </p>
                            <ul className="social">
                                <li data-aos="fade-up" data-aos-duration={1200}><Link href="#"><i className="fab fa-twitter" /></Link>
                                </li>
                            </ul>
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
