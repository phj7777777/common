import React from 'react'
import Link from 'next/link'

export default function Footer({className}) {
    // console.log(className);
    return (
        <footer className={`footer__area grey-bg-3 pt-270 p-relative ${className}`}>
            <div className="footer__shape">
                <img className="footer-circle-1" src="/img/icon/footer/home-1/circle-1.png" alt="" />
                <img className="footer-circle-2" src="/img/icon/footer/home-1/circle-2.png" alt="" />
            </div>
            <div className="footer__top pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="footer__widget mb-50">
                                <div className="footer__widget-title mb-25">
                                    <div className="footer__logo">
                                        <Link href="/" legacyBehavior>
                                            <img src="/img/logo/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="footer__widget-content">
                                    <p>Ever since we started using  we’ve , and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="footer__widget mb-50 footer__pl-70">
                                <div className="footer__widget-title mb-25">
                                    <h3>Overview</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__link">
                                        <ul>
                                            <li><Link href="#">Terms</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Cookies</Link></li>
                                            <li><Link href="#">Integrations</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="footer__widget mb-50 footer__pl-90">
                                <div className="footer__widget-title mb-25">
                                    <h3>Customer</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__link">
                                        <ul>
                                            <li><Link href="#">Home</Link></li>
                                            <li><Link href="#">Product</Link></li>
                                            <li><Link href="#">Pricing</Link></li>
                                            <li><Link href="#">Integrations</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="footer__widget mb-50">
                                <div className="footer__widget-title mb-25">
                                    <h3>Product</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__link">
                                        <ul>
                                            <li><Link href="#">Getting Started</Link></li>
                                            <li><Link href="#">Style Guide</Link></li>
                                            <li><Link href="#">Licences</Link></li>
                                            <li><Link href="#">Changelog</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1.2s">
                            <div className="footer__widget mb-50 float-md-end fix">
                                <div className="footer__widget-title mb-25">
                                    <h3>Follow Us</h3>
                                </div>
                                <div className="footer__widget-content">
                                    <div className="footer__social">
                                        <ul>
                                            <li><Link href="#" legacyBehavior><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#" legacyBehavior><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#" legacyBehavior><i className="fab fa-pinterest-p"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".5s">
                                <div className="footer__copyright-wrapper text-center">
                                    <p>Copyright © 2021 All Rights Reserved passion by <Link href="#">TrendyCoder</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
