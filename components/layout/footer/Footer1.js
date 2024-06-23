import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer__body">
                            <img src="/assets/images/e.png" alt="AI-Mint" data-aos="fade-down" height={120} style={{ borderRadius: 200 }} />
                            <p className="desc fs-18" data-aos="fade-up">
                                FiNANCiEイベントは、オンラインおよびオフラインのイベントを通じて人々をWeb3にオンボードするのを助けます。参加者はPOAPや追加のオンチェーン報酬を受け取ります。FiNANCiEポイントで購入されたコミュニティトークンの保有者には、限定イベントが予約されています。
                            </p>
                            {/* <ul className="social">
                                <li data-aos="fade-up" data-aos-duration={1200}><Link href="#"><i className="fab fa-twitter" /></Link>
                                </li>
                            </ul> */}
                        </div>
                        <div className="footer_bottom">
                            <p className="fs-16">Copyright © {new Date().getFullYear()} Chomtana</p>
                            <ul>
                                <li><Link href="https://app.akindo.io/communities/27DaQ3DEpUMXG011W/products/peAr4oG4DS0jx7pm" target="_blank">Akindo</Link></li>
                                <li><Link href="https://aptos-event.chom.dev" target="_blank">Demo</Link></li>
                                <li><Link href="https://github.com/Chomtana/aptos-event" target="_blank">GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
