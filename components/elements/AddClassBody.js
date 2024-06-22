'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove(
                'home-1',
                'home-2',
                'home-3',
                'counter-scroll',
                'about',
                'page-blog',
                'collections',
                'page-contact',
                'page-faq',
                'mission',
                'roadmap',
                'page-team',
            )

            // Add class based on pathname
            // Add class based on pathname
            if (pathname === '/') {
                bodyElement.classList.add('home-1')
            }
            else if (pathname === '/home-02') {
                bodyElement.classList.add('home-2', 'counter-scroll')
            }
            else if (pathname === '/home-03') {
                bodyElement.classList.add('home-3')
            }
            else if (pathname === '/about') {
                bodyElement.classList.add('page', 'about')
            }
            else if (pathname === '/blog-grid') {
                bodyElement.classList.add('page', 'page-blog')
            }
            else if (pathname === '/blog-list') {
                bodyElement.classList.add('page', 'page-blog')
            }
            else if (pathname === '/blog-single') {
                bodyElement.classList.add('page', 'page-blog')
            }
            else if (pathname === '/collections') {
                bodyElement.classList.add('page', 'collections')
            }
            else if (pathname === '/contact') {
                bodyElement.classList.add('page', 'page-contact')
            }
            else if (pathname === '/faq') {
                bodyElement.classList.add('page', 'page-faq')
            }
            else if (pathname === '/onePage') {
                bodyElement.classList.add('home-3')
            }
            else if (pathname === '/our-mission') {
                bodyElement.classList.add('page', 'mission')
            }
            else if (pathname === '/roadmap') {
                bodyElement.classList.add('page', 'roadmap')
            }
            else if (pathname === '/team') {
                bodyElement.classList.add('page', 'page-team')
            } else {
                bodyElement.classList.add('page')
            }

        }
    }, [pathname])

    return null
}
