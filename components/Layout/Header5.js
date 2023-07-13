import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from "react";
import NavBarMain from './NavBarMain';
import NavBarMobile from './NavBarMobile';

export default function Header5() {
   const [isToggled, setToggled] = useState(false);
   const toggleTrueFalse = () => setToggled(!isToggled);

   // const [size, setSize] = useState(0);
   // console.log(size);

   const [scroll, setScroll] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
      });
   }, []);

   return <>
   <div className={`progress-wrap ${scroll ? "active-progress" : ""}`}>
      {/* <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
         <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg> */}
   </div>
   <header>
      <div className="header__area">
         <div className="header__top pt-5 pb-5 grey-bg-6">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                     <div className="header__info text-center text-sm-start">
                        <Link href="/mailto:info@gmail.com" legacyBehavior> <i className="icon_mail"></i>info@gmail.com</Link>
                        <Link href="/tel:+124-547-689" legacyBehavior> <i className="icon_phone w-phone"></i>+124 547 689</Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                     <div className="header__social fix float-end d-none d-sm-block">
                        <h5>Follow us:</h5>
                        <ul>
                           <li><Link href="#" legacyBehavior><i className="fab fa-pinterest-p"></i></Link></li>
                           <li><Link href="#" legacyBehavior><i className="fab fa-twitter"></i></Link></li>
                           <li><Link href="#" legacyBehavior><i className="fab fa-facebook-f"></i></Link></li>
                           <li><Link href="#" legacyBehavior><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="header-sticky" className={`header__bottom header__padding ${scroll ? "sticky" : ""}`}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                     <div className="logo">
                        <Link href="/" legacyBehavior>
                           <img src='/img/logo/logo.png' alt="logo" />
                        </Link>
                     </div>
                  </div>
                  <div className="col-xxl-8 col-xl-7 col-lg-7 d-none d-lg-block">
                     <div className="main-menu main-menu-5 ml-90">
                        <NavBarMain/>
                     </div>
                  </div>
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-6">
                     <div className="header__action d-flex align-items-center justify-content-end">
                        <div className="header__search">
                           <Link href="/javascript:void(0);" className="searchOpen" legacyBehavior><i className="far fa-search"></i></Link>
                        </div>
                        <div className="header__right-btn d-none d-md-flex d-xl-block ml-30">
                           <Link href="/contact" className="w-btn w-btn-11 mt-5">Get a quote</Link>
                        </div>
                        <div className="sidebar__menu d-flex justify-content-end d-lg-none">
                           <div onClick={setToggled} className="sidebar-toggle-btn sidebar-toggle-btn-5" id="sidebar-toggle">
                              <span className="line"></span>
                              <span className="line"></span>
                              <span className="line"></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`sidebar__area ${!isToggled ? "" : "sidebar-opened"}`}>
                     <div className="sidebar__wrapper">
                        <div className="sidebar__close">
                           <button onClick={toggleTrueFalse} className="sidebar__close-btn" id="sidebar__close-btn">
                              <span><i className="fal fa-times"></i></span>
                              <span>close</span>
                           </button>
                        </div>
                        <div className="sidebar__content">
                           <div className="logo mb-40">
                              <Link href="/" legacyBehavior>
                                 <img src="/img/logo/logo.png" alt="logo" />
                              </Link>
                           </div>
                           <div className={`mobile-menu mean-container`}>
                              <NavBarMobile />
                           </div>
                           <div className="sidebar__info mt-350">
                              <Link href="#" className="w-btn w-btn-4 d-block mb-15 mt-15">login</Link>
                              <Link href="#" className="w-btn d-block">sign up</Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Body Overlay end     */}
                  <div className={`body-overlay ${!isToggled ? "" : "opened"}`}>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   </>;
}
