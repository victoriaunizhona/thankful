import React, {useContext, useEffect, useState} from "react";
import WellDone from '../../components/well-done/WellDone';
import logoThankful from '../../assets/logo_thankful.svg';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import {Button, Container} from '@material-ui/core';
import cssStyles from './Home.module.css';
import axios from '../../axios-main';
import {AuthContext} from '../../context/auth-context';
import CircularProgress from '@material-ui/core/CircularProgress';



const onEnter = (event, callback) => event.key === 'Enter' && callback(event.target.value)
const areDatesTheSame = (dateA, dateB) => new Date(dateA).toDateString() === new Date(dateB).toDateString();


const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataSet, setDataSet] = useState(false);
    const [textField, setTextField] = useState("");
    const authContext = useContext(AuthContext);


    const removeItem = (value) => {
        setItems(prevState => {
            setTextField("");
            return prevState.filter(item => item !== value)
        })
    }

    const addItem = (value) => {
        if(value){
            setItems(prevState => {
                setTextField("");
                return [...prevState, value]
            })
        }
    }

    const clearItems = () => {

        setItems([])
    }

    const saveItems = () => {
        setLoading(true);
        axios.post("thank-list.json?auth=" + authContext?.user?.idToken, { data: [...items], date: new Date(), userId: authContext?.user?.uid}).then(res => {
            setTextField('');
            setItems([]);
            setDataSet(true);
            setLoading(false);


        }).catch(err => console.log(err));
    }

    useEffect( () => {
        const queryParam = '?auth=' + authContext?.user?.idToken + '&orderBy="userId"&equalTo="' + authContext?.user?.uid + '"';
        axios.get("thank-list.json" + queryParam).then(res => {
            for( let key in res?.data) {
                if(res?.data.hasOwnProperty(key)) {
                    const itemData = res?.data[key];
                    if(areDatesTheSame(itemData?.date, new Date())) {
                        setDataSet(true);
                    }
                }
            }
            setLoading(false);
        })
    },[authContext?.user?.idToken, authContext?.user?.uid])

    const content =  (
    !dataSet ?
    <Container className={cssStyles.Container} maxWidth="sm">
        <img style={{height: '150px'}} src={logoThankful} alt="logo"/>
        <h1>Today I am thankful for:</h1>
        {
            <List dense={false}>
                {items.map((item, index) =>
                    <ListItem key={item + index}>
                        <ListItemText
                            primary={item}
                        />
                        <ListItemSecondaryAction onClick={() => removeItem(item)}>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>)
                }
            </List>
        }
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <AddCircleIcon style={{cursor: 'pointer'}} onClick={() => addItem(textField)} color={'secondary'}/>
            </Grid>
            <Grid item>
                <TextField onChange={(e) => {
                    setTextField(e.target.value)
                }} value={textField} label="Add item" onKeyPress={e => onEnter(e, addItem)}/>
            </Grid>
        </Grid>
        <div className={cssStyles.Buttons}>
            <Button onClick={() => clearItems()} variant="contained" color="primary">Clear List</Button>
            <Button disabled={!items?.length} onClick={() => saveItems()} variant="contained"
                    color="secondary">Save</Button>
        </div>
    </Container> :  <WellDone/>
)
    return (
        <>
            {
                loading ?   <CircularProgress className={cssStyles.Loader} color="secondary" /> : content
            }
        </>
    )
};


export default Home;
