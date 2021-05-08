import React from "react";
import cssStyles from './Info.module.css';
import InfoContainer from '../info-container/InfoContainer';
import INFO_DETAILS from './info.constants';
import { Container} from '@material-ui/core';


const Info = () => {
    return (
        <Container maxWidth="lg">

        <div className={cssStyles.Info}>
            <h1 className={cssStyles.Title}> Why You Should Express Gratitude Every Day</h1>
            {INFO_DETAILS.map(item => <InfoContainer className={cssStyles.Container} key={item.title} info={item}/>)}
        </div>
        </Container>
    );
};

export default Info;
