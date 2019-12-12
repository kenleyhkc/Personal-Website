import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper, Typography} from '@material-ui/core';
import './Contact.css'
import { Component } from 'react';

const useStyles = makeStyles(theme =>({
    container:{
        display:'flex',
        flexWrap: 'wrap',
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 600,
    },
    button:{
        marginTop : 30,
        marginLeft : 20
    }
}))
export default function Contact(){
    const [values, setValues] = React.useState({
        name: 'Name',
        subject: 'Subject',
        email: 'Email',
        message: 'Message',
    });
    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value});
    }

    const classes = useStyles();

    return(
        <div id="contact">
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                Contact
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
            <Paper elevation="10" className={classes.paper}>
            < TextField className = {classes.textField}
            id = "name"
            label = "Name"
            placeholder = "Name"
            onChange = {handleChange('name')}
            />

            < TextField className = {classes.textField}
            id = "subject"
            label = "Subject"
            placeholder = "Subject"
            />

            <TextField className = {classes.textField}
            id = "email"
            label = "Email"
            placeholder = "Email"
             />

            <TextField className = {classes.textField}
            id = "message"
            label = "Message"
            multiline rows = "4"
            placeholder = "Message"
             />

            <Button className= {classes.button} variant="outlined" color="inherit">SEND</Button>
            </Paper>
            </form>
        </div>
    )
}

