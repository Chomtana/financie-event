'use client'
import Link from "next/link"
import { useEffect, useState } from 'react'
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from "wagmi"
import { addressParse } from "@/components/utils/address"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    const [isMobile, setIsMobile] = useState(false)
    const { open } = useWeb3Modal()
    const { address, isConnected } = useAccount()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991)
        }

        // Initial check
        handleResize()

        // Event listener for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>

            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body d-flex justify-content-between">
                                <div className="header__logo">
                                    <Link href="/">
                                        <div className="d-flex align-items-center gap-3">
                                            <img id="site-logo" src="/assets/images/e.png" alt="AI-Mint" width={''} height={60} style={{ borderRadius: 200 }}/>
                                            <div>
                                                <div className="fs-24">FiNANCiE</div>
                                                <div className="fs-14">Event</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="header__right">
                                    {!isMobile && false &&  <Menu /> }
                                    <div className="button">
                                        <a className="btn-action" onClick={() => open()}>
                                            {isConnected && address ? addressParse(address) : "Connect Wallet"}
                                        </a>
                                    </div>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isMobile && <MobileMenu isMobileMenu={isMobileMenu} />}
            </header>

        </>
    )
}
