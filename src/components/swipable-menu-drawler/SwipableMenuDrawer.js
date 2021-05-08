import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {useState} from "react";
import {logoutItem} from '../menu/navigation.constant';


import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import navItems from '../menu/navigation.constant';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export const  SwappableTemporaryDrawer = () => {
    const menuName = 'menu';
    const classes = useStyles();
    const [state, setState] = useState({
        menuName: false,
    });

    const history = useHistory();

    const goToPage = (path) => {
        history.push(path);
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navItems.slice(0, -1).map((item) => (
                    <ListItem onClick={() => goToPage(item.path)} button key={item.id}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem  onClick={() => goToPage(logoutItem.path)} button>
                    <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
                    <ListItemText  primary={'Logout'} />
                </ListItem>
            </List>
        </div>
    );

    return (
            <>
                <Button color="secondary" variant="outlined" onClick={toggleDrawer(menuName, true)}>{menuName}</Button>
                <SwipeableDrawer
                    anchor="right"
                    open={state[menuName]}
                    onClose={toggleDrawer(menuName, false)}
                    onOpen={toggleDrawer(menuName, true)}
                >
                    {list(menuName)}
                </SwipeableDrawer>
            </>
    );
}

export default SwappableTemporaryDrawer;
