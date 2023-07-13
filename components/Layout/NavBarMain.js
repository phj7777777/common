import React from 'react'
import Link from 'next/link'

export default function NavBarMain() {
    return (
        <nav>
            <ul>
                <li className="has-dropdown">
                    <Link href="/">Home</Link>
                    <ul className="submenu">
                        <li><Link href="/">Home 1</Link></li>
                        <li><Link href="/index-2">Home 2</Link></li>
                        <li><Link href="/index-3">Home 3</Link></li>
                        <li><Link href="/index-4">Home 4</Link></li>
                        <li><Link href="/index-5">Home 5</Link></li>
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li className="has-dropdown">
                    <Link href="#">Services</Link>
                    <ul className="submenu">
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/services-details">Services Details</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="#">Blog</Link>

                    <ul className="submenu">
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="#">Pages</Link>
                    <ul className="submenu">
                        <li><Link href="/faq">Faq</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/error">Error 404</Link></li>
                        <li><Link href="/sign-up">Sign Up</Link></li>
                        <li><Link href="/sign-in">Sign In</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
