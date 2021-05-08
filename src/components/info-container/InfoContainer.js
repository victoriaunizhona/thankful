import React from "react";
import cssStyles from './InfoContainer.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Divider from '../../components/ui/divider/Divider'



const InfoContainer = (props) => {
    const imagePath = require(`../../assets/${props.info.imageName}`);

    return (
        <ScrollAnimation delay={1} queueDuration=".5" duration={2} animateIn="fadeIn">
        <div className={cssStyles.Card}>
                {props.info?.textRight &&
                <img className={cssStyles.SVG} style={{ paddingRight: '1rem'}} src={imagePath.default} alt="gratitude-image"/>
                }
                <div className={cssStyles.CardText}>
                    <h2 className={cssStyles.CardTitle}>{props?.info?.title}</h2>
                    <p>{props?.info?.message}</p>
                </div>
                {!props.info?.textRight &&
                <img className={cssStyles.SVG} style={{paddingLeft: '1rem'}} src={imagePath.default} alt="gratitude-image"/>}
            </div>
            <Divider/>
        </ScrollAnimation>

    )
}

export default InfoContainer;
