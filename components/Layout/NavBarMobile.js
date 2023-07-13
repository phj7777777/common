import React from 'react'
import Link from 'next/link'
import MetisMenu from 'metismenujs';
import { useState, useEffect, useLayoutEffect } from "react";

export default function NavBarMobile() {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);
    return (
        <nav className="mean-nav" >
            <ul className="metismenu text-muted" id="metismenu">
                <li>
                <Link href="#" className="has-arrow">Home</Link>
                    <ul className="submenu">
                        <li><Link href="/">Home 1</Link></li>
                        <li><Link href="/index-2">Home 2</Link></li>
                        <li><Link href="/index-3">Home 3</Link></li>
                        <li><Link href="/index-4">Home 4</Link></li>
                        <li><Link href="/index-5">Home 5</Link></li>
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li>
                    <Link href="#" className="has-arrow">Services</Link>
                    <ul className="submenu">
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/services-details">Services Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#" className="has-arrow">Blog</Link>

                    <ul className="submenu">
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#" className="has-arrow">Pages</Link>
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
            {/* <ul className="metismenu text-muted" id="metismenu">
                <li className="has-dropdown">
                    <Link href="/"><a className="has-arrow" href="#" aria-expanded="true">Home</a></Link>
                    <ul className="submenu">
                        <li><Link href="/"><a>Home 1</a></Link></li>
                        <li><Link href="/index-2"><a>Home 2</a></Link></li>
                        <li><Link href="/index-3"><a>Home 3</a></Link></li>
                        <li><Link href="/index-4"><a>Home 4</a></Link></li>
                        <li><Link href="/index-5"><a>Home 5</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/about"><a className="has-arrow" href="#" aria-expanded="true">About</a></Link></li>
                <li className="has-dropdown">
                    <Link href="/services" className="has-arrow" href="#" aria-expanded="true"><a>Services</a></Link>
                    <ul className="submenu">
                        <li><Link href="/services"><a>Services</a></Link></li>
                        <li><Link href="/services-details"><a>Services Details</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="/blog"><a>Blog</a></Link>

                    <ul className="submenu">
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                        <li><Link href="/blog-standard"><a>Blog Standard</a></Link></li>
                        <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="/about"><a className="has-arrow" href="#" aria-expanded="true">Pages</a></Link>
                    <ul className="submenu">
                        <li><Link href="/faq"><a>Faq</a></Link></li>
                        <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                        <li><Link href="/portfolio-details"><a>Portfolio Details</a></Link></li>
                        <li><Link href="/team"><a>Team</a></Link></li>
                        <li><Link href="/team-details"><a>Team Details</a></Link></li>
                        <li><Link href="/error"><a>Error 404</a></Link></li>
                        <li><Link href="/sign-up"><a>Sign Up</a></Link></li>
                        <li><Link href="/sign-in"><a>Sign In</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul> */}
        </nav>
    );
}
