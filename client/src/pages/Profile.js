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

export default () => {

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
            setTitle(post.title)
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
    
    return (
        <div>
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
            </div>
        </div>
    )
}
