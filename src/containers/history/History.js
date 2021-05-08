import React, {useContext, useEffect, useState} from "react";
import {CircularProgress, Container} from '@material-ui/core';
import cssStyles from './History.module.css'
import axios from '../../axios-main';
import {AuthContext} from '../../context/auth-context';
import ThankCard from '../../components/thank-card/ThankCard'
import toDo from '../../assets/To-do.svg';
import notFound from '../../assets/not-found.svg';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Divider from '../../components/ui/divider/Divider';
import ConfirmDialog from '../../components/confirm-dialog/ConfirmDialog'
import Alert from '@material-ui/lab/Alert';


const areDatesTheSame = (dateA, dateB) => new Date(dateA).toDateString() === new Date(dateB).toDateString();


const History = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const authContext = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showSuccessAlert, setSuccessAlert] = useState(false);

    const deleteItem = (item, key) => {
        setConfirmOpen(true);
        setSelectedItem({item, key});
    }

    const deleteItemHandler = () => {
        axios.delete(`/thank-list/${selectedItem?.key}.json?auth=${authContext?.user?.idToken}`).then(() => {
            setSuccessAlert(true);
            console.log('deleted');
            setItems(null);
            setTimeout(()=>  setSuccessAlert(false), 1500)
        })
    }

    useEffect(() => {
        const queryParam = '?auth=' + authContext?.user?.idToken + '&orderBy="userId"&equalTo="' + authContext?.user?.uid + '"';
        axios.get("thank-list.json" + queryParam).then(res => {
            const dataForDay = Object.entries(res?.data)?.filter(([key, items]) => areDatesTheSame(items.date, selectedDate))[0]

            let formattedItems;

            if(dataForDay?.length){
                const keyItem = dataForDay[0];
                const dataItems = dataForDay[1];
                formattedItems = <ThankCard key={dataItems.date} date={dataItems.date} list={dataItems.data} clicked={() => deleteItem(dataItems, keyItem)}/>;

            }

            setItems(formattedItems)
            setLoading(false);
        })
    }, [authContext?.user?.idToken, authContext?.user?.uid, selectedDate])

    return (
        <Container maxWidth="lg">
            <div className={cssStyles.Container}>
                <img className={cssStyles.Image} src={toDo} alt="logo"/>
                <div className={cssStyles.MainText}>
                <h1>History</h1>
                <p>Please select a date to see your thanks</p>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Select date"
                            value={selectedDate}
                            onChange={(date)=> setSelectedDate(date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </div>

            <Divider/>
            {
                showSuccessAlert &&

                <Alert variant="outlined" severity="success">
                    The record was successfully removed
                </Alert>
            }
            {
              loading ?   <CircularProgress className={cssStyles.Loader} color="secondary" /> :
                  <div className={cssStyles.History}>
                     {items || <div className={cssStyles.NotFound}>
                           <img className={cssStyles.NotFoundImage} src={notFound} alt="logo"/>
                         <h2>Nothing found for this date</h2>
                       </div>
                      }
                   </div>
            }
            <ConfirmDialog
                title="Delete record"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={deleteItemHandler}
            >
                Are you sure you want to delete this record?
            </ConfirmDialog>
        </Container>

    );
};

export default History;
