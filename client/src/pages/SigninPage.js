import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {__LoginUser} from '../services/UserServices'

export default (props) => {

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
        <div style={{backgroundColor: 'white', padding: '50px', borderRadius:'20px'}} >
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
                    <button style={{margin: '10px'}}>Login</button>
                    {formError ? <p>Error While Logging In</p> : <p></p>}
                </form>
            </div>   
        </div>
    )
}