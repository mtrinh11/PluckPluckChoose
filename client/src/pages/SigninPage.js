import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {__LoginUser} from '../services/UserServices'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false)
    
    useEffect(() => {
        
    }, [formError])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await __LoginUser({
                email: email,
                password: password,
            })
            props.toggleAuthenticated(true, res, () => (props.history.push('/profile')))
        } catch (error) {
            setFormError(true)
            throw error
        }
    }

    return (
        <div style={{backgroundColor: 'white', padding: '50px', borderRadius:'20px', flexGrow: '1', textAlign: 'center'}} >
            <div className="row">
                <form className="col s12" onSubmit={(e) => handleSubmit(e)}>
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
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => setPassword(e.target.value)}
                        /> 
                    </div>
                    <Button type='submit' variant="outlined" size="medium" color="primary" className={classes.margin}>
                        Login
                    </Button>
                    {formError ? <p>Error While Logging In</p> : <p></p>}
                </form>
            </div>   
        </div>
    )
}