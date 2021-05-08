import React from "react";
import cssStyles from "./Menu.module.css"
import {Tab, Tabs} from '@material-ui/core';
import {matchPath, NavLink, useLocation} from 'react-router-dom';
import navItems from './navigation.constant';
import useWindowSize from '../../hooks/window-resize';
import SwappableTemporaryDrawer from '../swipable-menu-drawler/SwipableMenuDrawer'

export const Menu = () => {
    const windowSize = useWindowSize();
    const {pathname} = useLocation();

    const activeItem = navItems.find((item) => !!matchPath(pathname, {path: item.path}));

    return(
    <>
        {
            windowSize?.width > 900 ?     <Tabs value={activeItem?.id}>
                {navItems?.map((item) => (
                    <Tab key={item.id} value={item.id} label={item.text} component={NavLink}
                         to={item.path}/>
                ))}
            </Tabs> : <SwappableTemporaryDrawer/>

        }

    </>
    );
}

export default Menu;
