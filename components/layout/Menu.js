'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <nav id="main-nav" className="main-nav">
                <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-02", "/home-03", "/onePage"])}`}>
                        <Link href="#">Home</Link>
                        <ul className="sub-menu">
                            <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
                                <Link href="/">Home 01</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/home-02")}`}>
                                <Link href="/home-02">Home 02</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/home-03")}`}>
                                <Link href="/home-03">Home 03</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/onePage")}`}>
                                <Link href="/onePage">OnePage</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`menu-item ${pathname === "/about" ? "current-menu-item" : ""}`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`menu-item ${pathname === "/collections" ? "current-menu-item" : ""}`}>
                        <Link href="/collections">Collections </Link>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive([
                        "/team",
                        "/roadmap",
                        "/our-mission",
                        "/blog-list",
                        "/blog-grid",
                        "/blog-single",
                        "/faq"]
                    )}`}>
                        <Link href="#">Pages</Link>
                        <ul className="sub-menu">
                            <li className={`menu-item ${checkCurrentMenuItem("/team",)}`}>
                                <Link href="/team">Team</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/roadmap",)}`}>
                                <Link href="/roadmap">Road Map</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/our-mission",)}`}>
                                <Link href="/our-mission">Our Mission</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/blog-list",)}`}>
                                <Link href="/blog-list">Blog List</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/blog-grid",)}`}>
                                <Link href="/blog-grid">Blog Grid</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/blog-single",)}`}>
                                <Link href="/blog-single">Blog Single</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/faq",)}`}>
                                <Link href="/faq">Faq</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`menu-item ${pathname === "/contact" ? "current-menu-item" : ""}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

