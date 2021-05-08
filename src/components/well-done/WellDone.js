import React from "react";
import target from '../../assets/Target.svg';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import cssStyles from './WellDone.module.css';


const WellDone = () => {
    const history = useHistory();

    const goToPage = (path) => {
        history.push(path);
    }

    return (
        <section  className={cssStyles.Card}>
            <img className={cssStyles.SVG}  src={target} alt="logo"/>
            <h1>Well done!</h1>
            <p>You have filled in the data for today. If you want to view it - go to <Button
                onClick={() => goToPage(`/history`)} variant="contained" color="secondary">History</Button>
            </p>
        </section>
    )
};

export default WellDone;
