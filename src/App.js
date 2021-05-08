import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import Layout from '../src/hoc/layout/Layout';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import React, {Suspense, useContext, useEffect, useState} from "react";
import {CircularProgress} from '@material-ui/core';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import {AuthContext} from './context/auth-context';
import THEME from './constants/theme.constant';
import {ErrorBoundary} from 'react-error-boundary'
import Home from './containers/home/Home';
import cssStyles from './containers/home/Home.module.css';


const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const InfoComponent = React.lazy(() => import("./components/info/Info"));
const HistoryComponent = React.lazy(() => import("./containers/history/History"));
const LoginComponent = React.lazy(() => import("./containers/login/Login"));
const NotFoundComponent = React.lazy(() => import("./components/404/NotFound"));

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const theme = THEME;

function App(props) {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const authContext = useContext(AuthContext);
    const {
        user,
        error,
        signOut,
        signInWithGoogle,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        setError
    } = props;

    let routes;

    const logOut = () => {
        console.log('log out')
        signOut();
        goToPage('/home');
    }

    const ErrorFallback = ({error, resetErrorBoundary}) => {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )
    }

    const myErrorHandler = (error, info) => {
        console.log(error, info)
    }


    const goToPage = (path) => {
        history.push(path);
    }


    useEffect(() => {
        console.log(user);
        if (user !== undefined) {
            setLoading(false)
            authContext.setUser(user);
            firebase.auth()?.currentUser?.getIdToken(true).then( (idToken) => {
                authContext.setUser({...user, idToken});
            }).catch(function (error) {
                console.log(error)
            });
        }
    }, [user])


    routes = (
        <Suspense fallback={<CircularProgress className={cssStyles.Loader} color="secondary"/>
        }>
            <Switch>
                <Route path="/not-found" component={NotFoundComponent}/>
                <Route path="/info" component={InfoComponent}/>
                <Route path="/history" component={HistoryComponent}/>
                <Route path="/home" exact component={InfoComponent}/>
                <Route path="/logout" component={NotFoundComponent}/>
                <Route path="/login" exact component={() => (
                    <LoginComponent setError={setError} signInWithEmailAndPassword={signInWithEmailAndPassword}
                                    error={error}
                                    createUserWithEmailAndPassword={createUserWithEmailAndPassword}
                                    onGoogleLogin={signInWithGoogle}/>)}/>
                <Redirect from="*" to="/not-found"/>
            </Switch>
        </Suspense>
    );

    if (user) {
        routes = (
            <Suspense fallback={<CircularProgress className={cssStyles.Loader} color="secondary"/>
            }>
                <Switch>
                    <Route path="/not-found" component={NotFoundComponent}/>
                    <Route path="/info" component={InfoComponent}/>
                    <Route path="/history" component={HistoryComponent}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/logout" exact render={() => logOut()}/>
                    <Redirect from="/login" to="/home"/>
                    <Redirect from="*" to="/not-found"/>
                </Switch>
            </Suspense>
        );
    }

    return (
        <ErrorBoundary
            onError={myErrorHandler}
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // reset the state of your app so the error doesn't happen again
            }}
        >
            <ThemeProvider theme={theme}>
                {
                   loading ? <CircularProgress className={cssStyles.Loader} color="secondary" /> :

                <Layout>
                    {routes}
                </Layout>
                }
            </ThemeProvider>
        </ErrorBoundary>

    );
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);
