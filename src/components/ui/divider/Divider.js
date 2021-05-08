import React from "react";
import cssStyles from './Divider.module.css';



const Divider = () => {
    return (
        <div  className={[cssStyles.DivDot, cssStyles.Divider, cssStyles.DivTransparent].join(' ')}/>
    );
};

export default Divider;
