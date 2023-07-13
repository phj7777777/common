import React, { Children } from 'react'
import Footer from "./Footer";
import Header1 from "./Header1";
import Sidebar from "./Sidebar";

export default function Layout1({children,className}) {
    // console.log(className);
    return (
        <>
            <Header1 />
            <Sidebar />
            {children}
            <Footer className={className}/>
        </>
    )
}
