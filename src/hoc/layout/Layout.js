import React from "react";
import Footer from "../../components/ui/footer/Footer";
import Header from '../../components/ui/header/Header';


const Layout = (props) => {
    return (
        <div>
            <Header isAuth={props.isAuth}/>
            <div>{props.children}</div>
            <Footer/>
        </div>
    )
}
 export default Layout;
