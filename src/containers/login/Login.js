import React, {useEffect, useState} from "react";
import {Button, Container, TextField} from '@material-ui/core';
import cssStyles from './Login.module.css'
import googleIcon from '../../assets/google-icon.svg';
import logoThankful from '../../assets/logo_thankful.svg';
import Alert from '@material-ui/lab/Alert';


const Login = (props) => {
    if (props.error) {
        setTimeout(() => props.setError(null), 2000)
    }

    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState({value: '', showError: false, helperText: '', touched: false});
    const [password, setPassword] = useState({value: '', showError: false, helperText: '', touched: false});

    const handleEmailChange = (email) => {
        setEmail((prevState => ({...prevState, value: email, touched: true})))
    }

    const handlePasswordChange = (password) => {
        setPassword((prevState => ({...prevState, value: password, touched: true})))
    }

    const isValidEmail = (val) => {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return 'Invalid Email Address';
        }
    }

    useEffect(() => {
        if (!email.value && email?.touched) {
            updateErrorState(setEmail, 'This field is required');
        } else if (isValidEmail(email.value) && email?.touched) {
            updateErrorState(setEmail, 'Make sure that email value is correct');

        } else {
            updateErrorState(setEmail, '', false);
        }
    }, [email?.value, email?.touched])

    useEffect(() => {
        if (!password.value && password?.touched) {
            updateErrorState(setPassword, 'This field is required');
        } else if (password?.value && password?.touched && password.value.length < 6) {
            updateErrorState(setPassword, 'Length should be bigger than 6');
        } else {
            updateErrorState(setPassword, '', false);
        }
    }, [password?.value, password?.touched])

    const updateErrorState = (setState, text, showError = true) => {
        setState((prevState => ({...prevState, showError, helperText: text})));
    }

    const loginWithEmailAndPassword = () => {
        props.signInWithEmailAndPassword(email.value, password.value);
    }


    const isFormValid = () => {
        return !email?.showError && email.touched && password.touched && !password.showError
    }

    const loginHandler = () => {
        props.onGoogleLogin();
    }

    const switchMode = () => {
        setMode(prevState => (
            prevState === 'login' ? 'signup' : 'login'
        ))
    }

    const signUp = () => {
        props.createUserWithEmailAndPassword(email.value, password.value);
    }

    return (
        <Container className={[cssStyles.Login, cssStyles.Form, cssStyles.Container].join(' ')} maxWidth="sm">
            {
                props.error &&

                <Alert variant="outlined" severity="warning">
                    {props.error}
                </Alert>
            }

            <form className={cssStyles.Form} autoComplete="on">
                <img style={{height: '100px'}} src={logoThankful} alt="logo"/>
                <h1 className={cssStyles.Heading}> {mode === 'login' ? 'Login' : 'SignUp'}</h1>
                <TextField value={email?.value} onChange={(e) => handleEmailChange(e.target.value)}
                           helperText={email?.helperText} className={cssStyles.Input} id="standard-basic"
                           label="Email"
                           type="email"
                           error={email.showError}
                           variant="outlined"/>
                <TextField onChange={(e) => handlePasswordChange(e.target.value)} value={password?.value}
                           error={password.showError} helperText={password?.helperText}
                           className={cssStyles.Input} type="password"
                           id="filled-basic" label="Password" variant="outlined"/>
                <Button onClick={() => mode === 'login' ? loginWithEmailAndPassword() : signUp()}
                        disabled={!isFormValid()} className={cssStyles.Input} variant="contained"
                        color="secondary">{mode === 'login' ? 'LOG IN' : 'SIGN UP'}</Button>
                <Button onClick={() => switchMode()} className={cssStyles.Input} variant="outlined"
                        color="secondary">{mode !== 'login' ? 'Switch to LOG IN' : 'Switch to SIGN UP'}</Button>
            </form>
            <p>OR</p>
            <Button onClick={() => loginHandler()} variant="contained" color="primary">
                Log In with
                <img style={{width: '20px', height: '20px ', paddingLeft: '10px'}} src={googleIcon} alt="google"/>
            </Button>

        </Container>

    );
};

export default Login;
