import React from "react";
import {AppBar, Toolbar, Button, Tabs, Tab} from '@material-ui/core';
import smallLogo from '../../../assets/logo-small.svg';
import {useTheme} from '@material-ui/core/styles';
import CssStyles from './Header.module.css';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

const navItems = [
    {
        id: 1,
        path: '/home',
        text: 'Home',
    },
    {
        id: 2,
        path: '/history',
        text: 'History',
    },
    {
        id: 3,
        path: '/info',
        text: 'Info',
    },
    {
        id: 4,
        path: '/logout',
        text: 'Logout',
    },
];


const Header = (props) => {
    const theme = useTheme();
    const { pathname } = useLocation();
    const activeItem = navItems.find((item) => !!matchPath(pathname, { path: item.path }));

    return (
        <>
        <AppBar style={{height: '70px', background: theme.palette.primary.dark}} color="primary" position="static">
            <Toolbar className={CssStyles.Header}>
                <img src={smallLogo} alt="logo"/>
                { !props.isAuth ?
                    <Button variant="outlined"  color="secondary">Login</Button> :
                    <Tabs value={activeItem?.id}>
                        {navItems.map((item) => (
                            <Tab key={item.id} value={item.id} label={item.text} component={NavLink} to={item.path} />
                        ))}
                    </Tabs>
                }
            </Toolbar>
        </AppBar>
        </>
    );
};

export default Header;
