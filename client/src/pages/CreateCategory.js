import React, {useState, useEffect} from 'react'
import {__CreateCategory, __EditCategory} from '../services/CategoryServices'

import TextField from '@material-ui/core/TextField';
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

    const [titleText, setTitle] = useState('')
    const [formError, setFormError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let submittedInfo = {
                name: titleText
            }
            let newCategory = await __CreateCategory(submittedInfo)
            setTitle(titleText)
            props.history.push('/profile/manage')
            console.log('FRONTEND CreatePost createCategory hits')
        }catch(error){
            console.log('FRONTEND CreatePost createCategory fails')
            setFormError(true)
            throw error
        }
    }

        return (
            <div style ={{backgroundColor: 'white', padding: '50px', borderRadius: '20px'}}>
                <h1> Create Category </h1>
                <div className="row">
                    <form className="col s12" onSubmit={(e)=> handleSubmit(e)}>
                        <div style={{margin: '10px'}}>
                            <TextField
                                required
                                fullwidth='true'
                                id='categoryTitle'
                                label='Category Title'
                                type="text"
                                variant="outlined"
                                color="secondary"
                                onChange ={(e)=> setTitle(e.target.value)}
                            />
                        </div>
                        <Button type='submit' variant="outlined" size="medium" color="primary" className={classes.margin}>
                            Submit
                        </Button>
                        {formError ? <p>Error while submitting </p> : <p></p>}
                    </form>
                </div>
            </div>
        )
}
