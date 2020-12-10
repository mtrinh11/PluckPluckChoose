import React, {useState, useEffect} from 'react'
import {__CreateCategory, __EditCategory} from '../services/CategoryServices'
import TextField from '@material-ui/core/TextField';

export default (props) => {

    const [titleText, setTitle] = useState('')
    const [formError, setFormError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let submittedInfo = {
                title: titleText
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
                <div className="row">
                    <form className="col s12" onSubmit={(e)=> handleSubmit(e)}>
                        <div style={{margin: '10px'}}>
                            <TextField
                                fullwidth='true'
                                id='categoryTitle'
                                label='Category Title'
                                type="text"
                                variant="outlined"
                                color="secondary"
                                onChange ={(e)=> setTitle(e.target.value)}
                            />
                        </div>
                        <button style ={{margin: '10px'}}>Submit</button>
                        {formError ? <p>Error while submitting </p> : <p></p>}
                    </form>
                </div>
            </div>
        )
}
