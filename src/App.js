import './App.css';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from '../src/hoc/layout/Layout';
import {Redirect, Route, Switch} from 'react-router-dom';
import React, { Suspense } from "react";
import { CircularProgress } from '@material-ui/core';

const InfoComponent = React.lazy(() => import("./components/info/Info"));
const HistoryComponent = React.lazy(() => import("./containers/history/History"));



const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#cfd8dc',
            dark: '#9ea7aa',
            contrastText: '#000000',
        },
        secondary: {
            light: '#fff350',
            main: '#ffc107',
            dark: '#c79100',
            contrastText: '#000000',
        },
    },
});

function App() {
    let routes = (
        <Suspense fallback={<CircularProgress color="secondary" />
        }>
            <Switch>
                <Route path="/info" component={InfoComponent} />
                <Route path="/history" component={HistoryComponent} />
                <Route path="/home" exact component={InfoComponent} />
                <Redirect from="*" to="/home" />
            </Switch>
        </Suspense>
    );
    return (
        <ThemeProvider theme={theme}>
            <Layout isAuth={true}>
                {routes}
            </Layout>
        </ThemeProvider>
    );
}

export default App;
