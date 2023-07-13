import React, { Children } from 'react'
import Footer3 from './Footer3';
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout3({children,className}) {
    // console.log(className);
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            {/* <Footer className={className}/> */}
            <Footer3 className={className}/>
        </>
    )
}
