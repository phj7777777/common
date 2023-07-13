import React from 'react'
import Link from 'next/link'

export default function Footer4({ className }) {
    // console.log(className);
    return (
        <footer className={`footer__area grey-bg-3 p-relative fix ${className}`}>
            <div className="footer__bottom ">
                <div className="container">
                    <div className="footer__copyright footer__copyright-3">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="footer__copyright-wrapper footer__copyright-wrapper-4 text-center">
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
