import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import AuthCard from '../components/AuthCard'

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {__GetRandomPost, __UpvotePost, __DownvotePost} from '../services/PostsServices';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

<<<<<<< HEAD
export default (props) => {
    // we're going to use this to get the post and set it
    const [picUrl, setPicUrl] = useState('');
    const [isCreating, setCreatePost] = useState(false);
    //


    useEffect(() => {
        getAccountPosts()
        handleSubmit()
    }, [])

    const toggleCreatePost = (value) => {setCreatePost(value)}

    const getAccountPosts = async () => {
        try {
            let accountPosts = await __GetPostsByAccount();
            setPicUrl(accountPosts.picture)
        } catch (error) {
            console.log('FRONTEND: getAccountPosts fails')
            throw error
        }
        return
    }
    
    const handleSubmit = async (myEvent) => {
        myEvent.preventDefault()
        console.log('FRONTEND: Profile.js handleSubmit')
        try{
            let picToUpload = {
                picture: picUrl
            }
            let newPost = await __UploadPost(picToUpload)
            props.history.push('/create')
            //line 63 is.... questionable
        }
        catch(error){
            console.log('FRONTEND: handleSubmit fails')
            throw error
        }
    }

=======
export default () => {
>>>>>>> 2ab94b1cca13c3f93ad724e1be37943a56877f8d

    const classes = useStyles();

    const [picUrl, setPicUrl] =  useState('');
    const [postId, setPostId] = useState('');
    const [postDownvotes, setPostDownvotes] = useState('');
    const [postUpvotes, setPostUpvotes] = useState('');
    const [titleText, setTitle] = useState('')
    const [descriptionText, setDescription] = useState('')

    const getOneRandomPost = async () => {
        try {
            let post = await __GetRandomPost();
            setPostId(post.id); 
            setPicUrl(post.picture);
            setTitle(post.text)
            setDescription(post.description)
            setPostUpvotes(post.upvote);
            setPostDownvotes(post.downvote);
        } catch (error) {
            throw error
        }
        return
    }

    const upvoteOrDownvote = async(action) => {
        try {
            if (action === 'up') {
                __UpvotePost(postId)
            } else if (action === 'down') {
                __DownvotePost(postId)
            }
            getOneRandomPost();
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getOneRandomPost();
    }, [])

    console.log('this is the title', titleText,'this is the desription', descriptionText)

    return (
            <div>
                <div 
                    style={{ 
                        margin: '50px', 
                    }}
                >
                    <div className={classes.root}>
                        <IconButton 
                        style={{}}
                        onClick={() => {getOneRandomPost()}}>
                            <p> next </p>
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
            </div>
        </div>
    )
}