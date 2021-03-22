import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import { useTheme } from '@material-ui/core/styles';
import CssStyles from "./Footer.module.css"

const gitHubLink = ' https://github.com/victoriaunizhona/thankful';

function getCurrentYear(){
    return new Date().getFullYear();
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const Footer = () => {
    const theme = useTheme();

    return (
        <div className={CssStyles.Footer} style={{background: theme.palette.primary.dark}}>
            <GitHubIcon onClick={() => openInNewTab(gitHubLink)} className={CssStyles.Icon} color="action" zize="small" >GitHub</GitHubIcon>
            <div>&#169; {getCurrentYear()} Victoria Unizhona</div>
        </div>
    )
}

export default Footer;
