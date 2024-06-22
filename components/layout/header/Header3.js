'use client'
import Link from "next/link"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {

    return (
        <>

            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body d-flex justify-content-between">
                                <div className="header__logo">
                                    <Link href="/">
                                        <img id="site-logo" src="/assets/images/logo_aimint.png" alt="AI-Mint" width={217} height={50} data-retina="assets/images/logo@2x.png" data-height={50} />
                                    </Link>
                                </div>
                                <div className="header__right">
                                    <div className="d-none d-lg-block">
                                        <nav id="main-nav" className="main-nav">
                                            <ul id="menu-primary-menu" className="menu">
                                                <li className="menu-item-has-children">
                                                    <Link href="/onePage#">Home</Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item"><Link href="/">Home 01</Link></li>
                                                        <li className="menu-item"><Link href="/home-02">Home 02</Link></li>
                                                        <li className="menu-item"><Link href="/home-03">Home 03</Link></li>
                                                        <li className="menu-item current-item"><Link href="/onePage">OnePage</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#about">About</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#info">Infomation</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#roadmap">Road Map</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#portfolio">Portfolio</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#team">Team</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#technology">Technology</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#testimonial">Testimonial</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#counter">Counter</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#blog">Blog</Link>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <Link href="/onePage#faq">FAQ</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="button">
                                        <Link className="btn-action" href="/contact">
                                            Join Now
                                        </Link>
                                    </div>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                        <ul id="menu-primary-menu" className="menu">
                            <li className="menu-item menu-item-has-children">
                                <Link href="/">Home 1</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/home-02">Home 2</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/home-03">Home 3</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#hero-3">Hero</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#about">About</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#info">Infomation</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#roadmap">Road Map</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#portfolio">Portfolio</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#team">Team</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#technology">Technology</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#testimonial">Testimonial</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#counter">Counter</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#blog">Blog</Link>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <Link href="/onePage#faq">FAQ</Link>
                            </li>
                        </ul>
                    </nav>
            </header>

        </>
    )
}
