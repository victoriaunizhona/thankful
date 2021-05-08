import React from "react";
import {Button, Container} from '@material-ui/core';
import NotFoundSvg from '../../assets/Error404.svg';
import cssClasses from './NotFound.module.css'
import {useHistory} from 'react-router-dom';


const NotFound = () => {
    const history = useHistory();
    const goHomeHandler = () => {
        history.push('/home');

    }
    return (
        <div className={cssClasses.Container} >
            <img style={{height: '500px', paddingTop: '40px'}} src={NotFoundSvg} alt="logo"/>
            <Button onClick={() => goHomeHandler()} variant="contained" color="secondary"> Go to Home page</Button>
        </div>
    )
};

export default NotFound;
