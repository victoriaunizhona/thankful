import React from "react";
import cssStyles from './ThankCard.module.css'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DoneIcon from '@material-ui/icons/Done';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { format} from 'date-fns'


const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '2rem',
    },
    title: {
        fontSize: 14
    },
    button: {
        color: 'darkred'
    }
});


const ThankCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    Thankful
                </Typography>
                <Typography variant="h5" component="h2">
                    {format(new Date(props?.date), 'dd/MM/yyyy')
                    }
                </Typography>
                <List component="nav" aria-label="secondary mailbox folders">
                    {
                        props?.list?.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <DoneIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ) )
                    }
                </List>
            </CardContent>
            <CardActions>
                <Button onClick={props.clicked} className={classes.button}  size="medium">
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
};

export default ThankCard;
