import React, {useState, useEffect} from 'react'

import AuthCard from '../components/AuthCard'

import {__GetAllCategories, __FindCategoryByName} from '../services/CategoryServices'
import {__UpvotePost, __DownvotePost, __GetOnePost} from '../services/PostsServices';
import {__GetAllPostsByCategory} from '../services/TagServices'


import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default () => {
    const classes = useStyles();

    const [categories, setCategories] = useState(null)
    const [categoryChosen, setCategoryChosen] = useState(null)
    const [noResults, setNoResults] = useState(true)

    const [picUrl, setPicUrl] =  useState(null);
    const [postId, setPostId] = useState(null);
    const [postDownvotes, setPostDownvotes] = useState(null);
    const [postUpvotes, setPostUpvotes] = useState(null);
    const [titleText, setTitle] = useState(null)
    const [descriptionText, setDescription] = useState(null)
    const [firstChoice, setFirstChoice] = useState(true)

    const getAllCategories = async() => {
        try {
            let res = await __GetAllCategories()
            setCategories(res)
        } catch (error) {
            throw error
        }
    }

    const upvoteOrDownvote = async(action) => {
        try {
            if (action === 'up') {
                __UpvotePost(postId)
            } else if (action === 'down') {
                __DownvotePost(postId)
            }
            handleNextPost();
        } catch (error) {
            throw error
        }
    }

    const handleSubmit = async(e) => {
        try {
            setFirstChoice(false)
            let category = await __FindCategoryByName(e.target.innerHTML)
            setCategoryChosen(category)
            let tags = await __GetAllPostsByCategory(category.id)
            if (tags.length === 0) {
                setNoResults(true)
            } else {
                let randomPost = tags[Math.floor( Math.random() * tags.length)]
                let post = await __GetOnePost(randomPost.postId)
                setNoResults(false)
                setPostAttributes(post)
            }
        } catch (error) {
            throw error
        }
    }

    const handleNextPost = async() => {
        let tags = await __GetAllPostsByCategory(categoryChosen.id)
        if (tags.length === 0) {
            setNoResults(true)
        } else {
            let randomPost = tags[Math.floor( Math.random() * tags.length)]
            let post = await __GetOnePost(randomPost.postId)
            setNoResults(false)
            setPostAttributes(post)
        }
}

    const setPostAttributes = (post) => {
        setPostId(post.id); 
        setPicUrl(post.picture);
        setTitle(post.title)
        setDescription(post.description)
        setPostUpvotes(post.upvote);
        setPostDownvotes(post.downvote);
    }

    useEffect(() => {
        if (!categories) {
            getAllCategories()
        }
    }, [])

    return (
        <div style={{padding: '50px'}}>
            <div style={{margin: '10px'}}>
                <Autocomplete
                    id="combo-box"
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 223}}
                    renderInput={(params) => <TextField id='test'{...params} label="Category" variant="outlined" />}
                    onChange={(e) => {handleSubmit(e)}}
                /> 
            </div>
            {!firstChoice ? 
                noResults ? 
                    <p style={{margin: '50px'}}>This category has no posts!</p>
                    : 
                    <div style={{margin: '50px'}}>
                        <div className={classes.root}>
                            <IconButton 
                                style={{}}
                                onClick={() => {handleNextPost()}}
                            >
                                <p> Skip </p>
                                <NavigateNextIcon />
                            </IconButton>
                        </div>
                        <AuthCard 
                            id={postId}
                            url={picUrl}
                            title={titleText}
                            description={descriptionText}
                            downvotes={postDownvotes}
                            upvotes={postUpvotes}
                            // mt onclick
                            onclick={(action) => {upvoteOrDownvote(action)}}
                        />
                    </div>
            :
                <p style={{margin: '50px'}}> Please pluck a category!</p>
            }
    </div>
    )
}