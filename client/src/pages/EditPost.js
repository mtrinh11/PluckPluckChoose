import React, {useState, useEffect} from 'react';
import {__GetPostsByAccount, __DeletePost, __UpdatePost, __UploadPost, __GetOnePost} from '../services/PostsServices'
import {__GetAccountByUserId} from '../services/AccountServices';
import {__TagPostToCategory, __GetAllCategoriesOnPost, __RemoveTagFromPost, __GetTag} from '../services/TagServices'
import {__GetAllCategories, __FindCategoryByName, __GetCategory} from '../services/CategoryServices'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

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

    const [picUrl, setPicUrl] = useState(null);
    const [acctId, setAcctId] = useState('');
    const [formError, setFormError] = useState(false)
    const [titleText, setTitle] = useState('')
    const [descriptionText, setDescription] = useState('')
    const [categories, setCategories] = useState(null)
    const [categoryChosen, setCategoryChosen] = useState(null)
    const [categoryChosenId, setCategoryChosenId] = useState(null)
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        getAccountId()
        getAllCategories()
        getPost()
    }, [])

    const getPost = async() => {
        try {
            let res = await __GetOnePost(props.match.params.post_id)
            setPicUrl(res.picture)
            setTitle(res.title)
            setDescription(res.description)
            setPostId(res.id)
            let cat = await __GetAllCategoriesOnPost(props.match.params.post_id)
            if (cat.length < 1) {
                setCategoryChosenId(null)
            } else {
                setCategoryChosenId(cat[0].category_id)
                ifCategoriesExist(cat)
                let tagId = await __GetTag(res.id, cat[0].category_id)
            await __RemoveTagFromPost(tagId.id)
            }
        } catch (error) {
            throw error
        }
    }

    const ifCategoriesExist = async(arr) => {
        let catName = await __GetCategory(arr[0].category_id)
        setCategoryChosen(catName.name)
    }

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
                title: titleText,
                description: descriptionText
            }
            let picToEdit = await __UpdatePost(postId, submittedInfo)
            if (categoryChosen){
                let res = await __FindCategoryByName(categoryChosen)
                let input = {
                    categoryId: res.id ,
                    postId: postId
                }
                await __TagPostToCategory(input)
            }
            props.history.push('/profile/manage')
        }
        catch(error){
            setFormError(true)
            throw error
        }
    }
    
    const field = () => {
        if (categories ) {
            return (<Autocomplete
                id="combo-box"
                options={categories}
                getOptionLabel={(option) => option.name}
                style={{ width: 230}}
                defaultValue={categories[categoryChosenId]}
                renderInput={(params) => <TextField id='test'{...params} label="Category" variant="outlined" />}
                onChange={(e) => setCategoryChosen(e.target.innerHTML)}
            /> )
        } 
        return (
            <Autocomplete
                id="combo-box"
                options={categories}
                getOptionLabel={(option) => option.name}
                style={{ width: 230}}
                renderInput={(params) => <TextField id='test'{...params} label="Category" variant="outlined" />}
                onChange={(e) => setCategoryChosen(e.target.innerHTML)}
            /> 
        )
    }

    return (
        <div style={{backgroundColor: 'white', padding: '50px', borderRadius:'20px'}} >
            <h1> Edit Post </h1>
            <div className="row">
                <form className="col s12" onSubmit={(e) => handleSubmit(e)}>
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="title"
                            label="Title"
                            value={`${titleText}`}
                            type="text"
                            variant="outlined"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div style={{margin: '10px'}}>
                        <p> Current Category: {categoryChosen} </p>
                        { field() }                  
                    </div>
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="description"
                            label={"Description (250 max)"}
                            value={`${descriptionText}`}
                            multiline
                            rows={4}
                            style={{width: 230}}
                            type="text"
                            maxLength={250}
                            variant="outlined"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div style={{margin: '10px'}}>
                        <TextField
                            fullwidth='true'
                            id="url"
                            label="Url of Picture"
                            value={`${picUrl}`}
                            type="url"
                            variant="outlined"
                            onChange={(e) => setPicUrl(e.target.value)}
                        />
                    </div>
                    <Button type='submit' variant="outlined" size="medium" color="primary" className={classes.margin}>
                        Submit
                    </Button>
                    {formError ? <p>Error While submitting</p> : <p></p>}
                </form>
            </div>   
        </div>
    )
}