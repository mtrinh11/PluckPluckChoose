import React, {useState, useEffect} from 'react'
import {__UpdatePost} from '../services/PostServices'
import TextField from '@material-ui/core/Textfield'


export default (props) => {

    const [titleText, setTitle] = useState('')
    const [descriptionText, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            let submittedInfo = {
                title: titleText,
                description: descriptionText
            }
            let editedPost = await __UpdatePost(submittedInfo)
            console.log(submittedInfo)
            
            console.log('FRONTEND EditPost handleSubmit hits')
        } catch (error){
            console.log('FRONTEND EditPost handleSubmit fails')
            setFormError(true)
            throw error
        }
    }
}