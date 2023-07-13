'use client';
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from "react";
import NavBarMobile from './NavBarMobile';
import NavBarMain from './NavBarMain';

export default function Header4() {
   const [isToggled, setToggled] = useState(false);
   const toggleTrueFalse = () => setToggled(!isToggled);

   // const [size, setSize] = useState(0);

   const [scroll, setScroll] = useState(false);
   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
      });
   }, [scroll]);

   return <>
      <div className={`progress-wrap ${scroll ? "active-progress" : ""}`}>
         <svg viewBox="-1 -1 102 102">
            <path d="M50 1a49 49 0 010 98 49 49 0 010-98"></path>
         </svg>
      </div>
      <header>
         <div id="header-sticky" className={`header__area header__border-bottom header__padding grey-bg-9 ${scroll ? "sticky" : ""}`}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                     <div className="logo">
                        <Link href="/" legacyBehavior>
                           <img src='/img/logo/logo.png' alt="logo" />
                        </Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-7 d-none d-lg-block">
                     <div className="main-menu">
                        <NavBarMain />
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                     <div className="header__right text-end d-flex align-items-center justify-content-end">
                        <div className="header__right-btn d-none d-md-flex align-items-center">
                           <Link href="/sign-in" className="header__btn">login</Link>
                           <Link href="/sign-up" className="w-btn ml-45">sign up</Link>
                        </div>
                        <div className="sidebar__menu d-lg-none">
                           <div onClick={setToggled} className="sidebar-toggle-btn" id="sidebar-toggle">
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
      </header>
   </>;
}
