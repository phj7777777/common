import React, { Children } from 'react'
import Header4 from "./Header4";
import Sidebar from "./Sidebar";
import Footer4 from './Footer4';

export default function Layout4({children,className}) {
    // console.log(className);
    return (
        <>
            <Header4 />
            <Sidebar />
            {children}
            {/* <Footer className={className}/> */}
            <Footer4/>
        </>
    )
}
