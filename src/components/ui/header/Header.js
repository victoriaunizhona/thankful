import React, {useContext} from "react";
import {AppBar, Toolbar, Button} from '@material-ui/core';
import smallLogo from '../../../assets/logo-small.svg';
import {useTheme} from '@material-ui/core/styles';
import CssStyles from './Header.module.css';
import {matchPath, useLocation, useHistory} from 'react-router-dom';
import {AuthContext} from '../../../context/auth-context';
import cssStyles from './Header.module.css';
import Menu from '../../menu/Menu';


const Header = () => {
    const authContext = useContext(AuthContext);

    const theme = useTheme();
    const {pathname} = useLocation();
    const history = useHistory();

    const goToPage = (path) => {
        history.push(path);
    }

    const isLoginPage = () => {
        return matchPath(pathname, '/login')
    }

    return (
        <div    className={cssStyles.Header}>
            <AppBar style={{height: '70px', background: theme.palette.primary.dark}} color="primary" position="static">
                <Toolbar className={CssStyles.Toolbar}>
                    <img style={{cursor: 'pointer'}} onClick={() => goToPage(`/home`)} src={smallLogo} alt="logo"/>
                    {!authContext.user ?
                        !isLoginPage() &&
                        <Button onClick={() => goToPage(`/login`)} variant="outlined" color="secondary">Login</Button> :
                 <Menu/>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
