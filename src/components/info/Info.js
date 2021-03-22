import React from "react";
import logoThankful from '../../assets/logo_thankful.svg';
import CssStyles from './Info.module.css'

const Info = () => {

    return (
        <div className={CssStyles.Info}>
            <img src={logoThankful} alt="logo"/>
        </div>
    );
};

export default Info;
