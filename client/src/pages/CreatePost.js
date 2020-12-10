import React, {useState, useEffect} from 'react';
import {__GetPostsByAccount, __DeletePost, __UpdatePost, __UploadPost} from '../services/PostsServices'
import {__GetAccountByUserId} from '../services/AccountServices';
import {__TagPostToCategory} from '../services/TagServices'
import {__GetAllCategories, __FindCategoryByName} from '../services/CategoryServices'
import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField'
/**
 * we want to add full crud for posts here
 * so that means
 *        CREATE
 *          upload a post
 *          tag a post
 *        READ
 *          get all posts made by a user   
 *        UPDATE
 *          Edit a post
 *        DESTROY
 *          Delete a post
 * 
 * 
 * 
 * 
 * 
 * and be able to display the user logged in
 *      the user logged in display could just be tucked into Nav
 *          cleaner this way
 * 
 * 
 * 
 */

export default (props) => {

    const [picUrl, setPicUrl] = useState(null);
    const [acctId, setAcctId] = useState('');
    const [formError, setFormError] = useState(false)
    //Added
    const [titleText, setTitle] = useState('')
    const [descriptionText, setDescription] = useState('')
    const [categories, setCategories] = useState(null)
    const [categoryChosen, setCategoryChosen] = useState(null)

    useEffect(() => {
        getAccountId()
        getAllCategories()
    }, [])

    const getAllCategories = async() => {
        try {
            let res = await __GetAllCategories()
            setCategories(res)
        } catch (error) {
            throw error
        }
    }

    const getAccountId = async() => {
        try {
            let res = await __GetAccountByUserId({user_id: props.currentUser.id})
            setAcctId(res.data.id)
        } catch (error) {
            throw error
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let submittedInfo = {
                account_id: acctId,
                picture: picUrl,
                //added title and description here -NZ
                title: titleText,
                description: descriptionText
            }
            let picToUpload = await __UploadPost(submittedInfo)
            if (categoryChosen){
                let res = await __FindCategoryByName(categoryChosen)
                console.log(res)
                let input = {
                    categoryId: res.id ,
                    postId: picToUpload.id
                }
                await __TagPostToCategory(input)
            }
            props.history.push('/profile/manage')
        }// need to add a unique key to each post
        catch(error){
            console.log('FRONTEND: createPost fails')
            setFormError(true)
            throw error
        }
    }

    return (
        <div style={{backgroundColor: 'white', padding: '50px', borderRadius:'20px'}} >
            <h1> Create Post </h1>
            <div className="row">
                <form className="col s12" onSubmit={(e) => handleSubmit(e)}>
                    {/* Nico's edits below */}
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="title"
                            label="Title"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div style={{margin: '10px'}}>
                    <Autocomplete
                        id="combo-box"
                        options={categories}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 223}}
                        renderInput={(params) => <TextField id='test'{...params} label="Category" variant="outlined" />}
                        onChange={(e) => setCategoryChosen(e.target.innerHTML)}
                    /> 
                    </div>
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="description"
                            label="Description"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    {/* Nico's edits end */}
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="url"
                            label="Url of Picture"
                            type="url"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => setPicUrl(e.target.value)}
                        />
                    </div>
                    <button style={{margin: '10px'}}>Submit</button>
                    {formError ? <p>Error While submitting</p> : <p></p>}
                </form>
            </div>   
        </div>
    )
}