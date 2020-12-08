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

    const getOneRandomPost = async () => {
        try {
            let post = await __GetRandomPost();
            setPostId(post.id); 
            setPicUrl(post.picture);
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
        <div style={{margin: '50px', alignContent: ''}}>
            <NavLink
                to="/profile/createpost"
                >
                <h3>Create Post</h3>
            </NavLink>
            <NavLink
                to="/profile/manage"
                >
                <h3>Manage Posts</h3>
            </NavLink>
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
