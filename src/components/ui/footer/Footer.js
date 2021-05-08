import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTheme } from '@material-ui/core/styles';
import CssStyles from "./Footer.module.css"

const gitHubLink = ' https://github.com/victoriaunizhona/thankful';
const linkedinLink = 'https://www.linkedin.com/in/victoria-unizhona/'

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
            <div className={CssStyles.Links}>
                <GitHubIcon onClick={() => openInNewTab(gitHubLink)} className={CssStyles.Icon} color="action" zize="small" >GitHub</GitHubIcon>
                <LinkedInIcon onClick={() => openInNewTab(linkedinLink)} className={CssStyles.Icon} color="action" zize="small" >Linkedin</LinkedInIcon>
            </div>
           <div>&#169; {getCurrentYear()} Victoria Unizhona</div>
        </div>
    )
}

export default Footer;
