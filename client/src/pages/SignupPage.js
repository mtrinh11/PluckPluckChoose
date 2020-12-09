import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {__CreateUser} from '../services/UserServices';
import{__CreateAccount} from '../services/AccountServices';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default (props) => {
    const classes = useStyles();

    const [username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        let userFormData = {
            username: username,
            email: email,
            password: password
        }
        let newUser = await __CreateUser(userFormData)

        let accountFormData = {
            user_id: newUser.id,
        }
        await __CreateAccount(accountFormData)
        props.history.push('/login')
    } catch (error) {
        
    }
}


    return (
        <div style={{backgroundColor:'white', padding: '50px', borderRadius:'20px', flexGrow: '1', textAlign: 'center'}}>
            <div className="row">
                <form onSubmit={(e) => handleSubmit(e)} className="col s12" >
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{margin: '10px'}}>
                    <TextField
                            fullwidth='true'
                            id="username"
                            label="Username"
                            variant="outlined"
                            color="secondary"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        /> 
                    </div>
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="password"
                            label="Password"
                            variant="outlined"
                            color="secondary"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        /> 
                    </div>
                    <button> Sign Up </button>
                </form>
            </div>
            
        </div>
        
    )
}