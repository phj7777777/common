import React, { Children } from 'react'
import Footer3 from './Footer3';
import Header5 from "./Header5";
import Sidebar from "./Sidebar";

export default function Layout3({children,className}) {
    // console.log(className);
    return (
        <>
            {/* <BackToTop /> */}
            <Header5 />
            <Sidebar />
            {children}
            {/* <Footer className={className}/> */}
            <Footer3 className={className}/>
        </>
    )
}
