import React, { Children } from 'react'
import Footer2 from './Footer2';
import Header2 from "./Header2";
import Sidebar from "./Sidebar";

export default function Layout2({children,className}) {
    // console.log(className);
    return (
        <>
            {/* <BackToTop /> */}
            <Header2 />
            <Sidebar />
            {children}
            {/* <Footer className={className}/> */}
            <Footer2 className={className}/>
        </>
    )
}
